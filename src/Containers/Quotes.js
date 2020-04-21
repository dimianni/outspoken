import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';
import QuoteList from '../Components/QuoteList';
import SearchBox from '../Components/SearchBox';
import styles from './Quotes.module.css'
import { Animated } from "react-animated-css";

class Quotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            speakers: null,
            searchField: '',
            visible: 20
        }
        this.loadMore = this.loadMore.bind(this);
    }



    componentDidMount() {
        axios.get('https://spokenout-dimianni.firebaseio.com/speakers.json')
            .then(response => {
                function shuffle(array) {
                    var m = array.length, t, i;

                    // While there remain elements to shuffle…
                    while (m) {

                        // Pick a remaining element…
                        i = Math.floor(Math.random() * m--);

                        // And swap it with the current element.
                        t = array[m];
                        array[m] = array[i];
                        array[i] = t;
                    }

                    return array;
                }
                this.setState({ speakers: shuffle(response.data) })
            })
    }

    onSearchChange = (e) => {
        // подключаем input к searchField
        this.setState({ searchField: e.target.value }) //updating searchField; setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 20 };
        });
    }


    render() {

        let quotes = <Spinner />
        let moreButton = null
        if (this.state.speakers) {

          
            
            const filteredSpeakers = this.state.speakers.filter(speaker => {
                return speaker.by.toLowerCase().includes(this.state.searchField.toLowerCase())
            })

            const output = this.state.speakers.slice(0, this.state.visible).map(i => {
                return i 
            })

            if (this.state.visible < this.state.speakers.length) {
                moreButton = <button onClick={this.loadMore} type="button" className={styles.LoadMoreBtn}>Load more</button>
            }

            quotes = (
                <QuoteList speakers={this.state.searchField === '' ? output : filteredSpeakers} />
            )
        }
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <section className={styles.BrowseContainer}>
                <p className={styles.Browse}>Browse through speakers:</p>
                <SearchBox onSearch={this.onSearchChange} />
                {quotes}
                {moreButton}
            </section>
            </Animated>
            
        );
    }
}

export default Quotes;