import React, { Component } from 'react';
import styles from './Quote.module.css'
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Animated } from "react-animated-css";





class Quote extends Component {


    state = {
        clickedQuote: null,
        sliderSpeakers: null,
        copyBtnClicked: false
    }


    // Will get read after the whole page is rendered
    componentDidMount() {
        // Passing Route parameter
        console.log(this.props.match.params.id)
        if (this.props.match.params.id) {

            // If we didn't have a state before - access data
            if (!this.state.clickedQuote || (this.state.clickedQuote && this.state.clickedQuote.id !== this.props.match.params.id)) {
                axios.get('https://spokenout-dimianni.firebaseio.com/speakers/' + this.props.match.params.id + '.json')
                    .then(response => {
                        this.setState({ clickedQuote: response.data })
                        // Reseting state inside 'componentDidUpdate' creates an infinite loop
                    })

            }

        }
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

                this.setState({ sliderSpeakers: shuffle(response.data).slice(0, 8) })
            })
        console.log('Did mount')
        console.log(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        // Здесь должен пересматривать state
        // Это изменяется
        console.log(this.props.match.params.id)

        if (this.props.match.params.id !== prevProps.match.params.id) {
            console.log('Different')
            axios.get('https://spokenout-dimianni.firebaseio.com/speakers/' + this.props.match.params.id + '.json')
                .then(response => {
                    this.setState({ clickedQuote: response.data })
                    // Reseting state inside 'componentDidUpdate' creates an infinite loop
                })
            this.setState({ copyBtnClicked: false })

            // Smooth scroll to top
            // window.scrollTo(0, 0)
            const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 4);
                    // for slower motion increase 12
                }
            };
            scrollToTop();
        }

        console.log('Did update')
    }

    copyClicked = () => {
        this.setState({ copyBtnClicked: true })
    }


    render() {


        console.log('Did render')

        let slider = null

        if (this.state.sliderSpeakers) {

        
            const sliderSettings = {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                // appendDots: dots => <ul>{dots}</ul>,
                // customPaging: i => <div className={styles.Dots}></div>
                responsive: [
                    {
                        breakpoint: 650,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 450,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            };
            

            slider = (
                <div className={styles.Slider}>
                    <p className={styles.MoreQ}>More quotes:</p>
                    <div className={styles.sliderContainer}>
                        <Slider {...sliderSettings}>
                            {this.state.sliderSpeakers.map(i => {
                                return (
                                    <Link to={`/quote/` + i.id} key={i.imgPath}>
                                        <div className={styles.SliderItem}>
                                            <div className={styles.imgContainer}>
                                                <img src={`images/${i.imgPath}.jpg`} alt={i.by} />
                                            </div>
                                            <p className={styles.SubName}>{i.by}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </Slider>
                    </div>

                </div>

            )
        }


        let content = <Spinner />

        let btnClasses = ['copyButton'];

        if (this.state.copyBtnClicked) {
            btnClasses.push('clicked')
        }

        let shareUrl = '';

        if (this.state.clickedQuote) {

            // shareUrl = `http://www.outspoken.website/#/quote/${this.state.clickedQuote.id}`;
            shareUrl = `http://www.outspoken.website/`;

            content = (
                <div className={styles.Quote}>
                    <h2 className={styles.Name}>{this.state.clickedQuote.by}</h2>

                    <Link to={'/tagname/' + this.state.clickedQuote.category} className={styles.Tag}>
                        <ion-icon name="pricetags-outline"></ion-icon>
                        <p>{this.state.clickedQuote.category}</p>
                    </Link>

                    <div className={styles.SpeakerPictureCont}>
                        <img alt="speaker" src={`images/${this.state.clickedQuote.imgPath}.jpg`} className={styles.SpeakerPicture} />
                    </div>

                    <p className={styles.QuoteStyle}>«{this.state.clickedQuote.quote}»</p>

                    <div className={styles.Finger}>
                        <ion-icon name="finger-print-outline"></ion-icon>
                    </div>


                    <CopyToClipboard text={this.state.clickedQuote.quote} onCopy={() => console.log("Success")}>
                        <button className={btnClasses.join(' ')} onClick={this.copyClicked}>{this.state.copyBtnClicked ? 'Copied!' : 'Copy quote!'}</button>
                    </CopyToClipboard>

                    <div className={styles.Social}>
                        <div className={styles.SocialLink}>
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </div>
                        <div className={styles.SocialLink}>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </div>

                    </div>


                </div>)
        }


        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className={styles.mainContainer}>
                    {content}
                    {slider}
                </div>
            </Animated>


        )
    }

}

export default Quote;