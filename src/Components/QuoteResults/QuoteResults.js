import React, { Component } from 'react';
import QuoteList from '../QuoteList';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import styles from './QuoteResults.module.css';
import { Animated } from "react-animated-css";

class QuoteResults extends Component {
    state = {
        matchingQuotes: null
    }

    componentDidMount() {
        axios.get('https://spokenout-dimianni.firebaseio.com/speakers.json')
            .then(response => {
                this.setState({ matchingQuotes: response.data })
            })
    }


    render() {

        let matchingQuotes = <Spinner />
        if (this.state.matchingQuotes) {
            console.log(this.state.matchingQuotes)
            const filteredSpeakers = this.state.matchingQuotes.filter(speaker => {
                return speaker.by.replace(/\s/g, "").includes(this.props.match.params.id)
            })
            matchingQuotes = <QuoteList speakers={filteredSpeakers} />
        }


        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className={styles.Wrapper}>
                    {matchingQuotes}
                </div>
            </Animated>

        );
    }
}

export default QuoteResults;