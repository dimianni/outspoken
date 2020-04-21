import React, { Component } from 'react';
import styles from './Abc.module.css';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Animated } from "react-animated-css";

class Abc extends Component {
    state = {
        names: null
    }

    componentDidMount() {
        axios.get('https://spokenout-dimianni.firebaseio.com/speakers.json')
            .then(response => {
                const names = response.data.map(i => {
                    return i.by
                })
                this.setState({ names: names })
            })
    }


    render() {

        // Filters starting letters of elements
        const firstL = (array, letter) => {
            return array.filter(name => name.startsWith(letter))
        }

        // Removing dublicates
        function removeDuplicates(array) {
            return array.filter((a, b) => array.indexOf(a) === b)
        };



        let namesList = <Spinner />

        if (this.state.names) {
            namesList = (
                <div className={styles.Columns}>
                    <div className={styles.Col}>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="a"> A.</div>

                            {removeDuplicates(firstL(this.state.names, 'A')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="c"> C.</div>

                            {removeDuplicates(firstL(this.state.names, 'C')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="e"> E.</div>

                            {removeDuplicates(firstL(this.state.names, 'E')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="g"> G.</div>

                            {removeDuplicates(firstL(this.state.names, 'G')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="i"> I.</div>

                            {removeDuplicates(firstL(this.state.names, 'I')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="k"> K.</div>

                            {removeDuplicates(firstL(this.state.names, 'K')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="m"> M.</div>

                            {removeDuplicates(firstL(this.state.names, 'M')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="o"> O.</div>

                            {removeDuplicates(firstL(this.state.names, 'O')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="q"> Q.</div>

                            {removeDuplicates(firstL(this.state.names, 'Q')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="s"> S.</div>

                            {removeDuplicates(firstL(this.state.names, 'S')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="u"> U.</div>

                            {removeDuplicates(firstL(this.state.names, 'U')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="w"> W.</div>

                            {removeDuplicates(firstL(this.state.names, 'W')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="y"> Y.</div>

                            {removeDuplicates(firstL(this.state.names, 'Y')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                    </div>
                    <div className={styles.Col}>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="b"> B.</div>

                            {removeDuplicates(firstL(this.state.names, 'B')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="d"> D.</div>

                            {removeDuplicates(firstL(this.state.names, 'D')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="f"> F.</div>

                            {removeDuplicates(firstL(this.state.names, 'F')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="h"> H.</div>

                            {removeDuplicates(firstL(this.state.names, 'H')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="j"> J.</div>

                            {removeDuplicates(firstL(this.state.names, 'J')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="l"> L.</div>

                            {removeDuplicates(firstL(this.state.names, 'L')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="n"> N.</div>

                            {removeDuplicates(firstL(this.state.names, 'N')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="p"> P.</div>

                            {removeDuplicates(firstL(this.state.names, 'P')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="r"> R.</div>

                            {removeDuplicates(firstL(this.state.names, 'R')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="t"> T.</div>

                            {removeDuplicates(firstL(this.state.names, 'T')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="v"> V.</div>

                            {removeDuplicates(firstL(this.state.names, 'V')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="x"> X.</div>

                            {removeDuplicates(firstL(this.state.names, 'X')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                        <div className={styles.LetterList}>
                            <div className={styles.TitleLetter} id="z"> Z.</div>

                            {removeDuplicates(firstL(this.state.names, 'Z')).map(el => {
                                return <Link to={'/tag/' + el.replace(/\s/g, "")} key={el}><div className={styles.Name}>{el}</div></Link>
                            })}

                        </div>
                    </div>
                </div>
            )
        }

        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div className={styles.Wrapper}>
                    <div className={styles.Alphabet}>
                        <AnchorLink href="#a" className={styles.Letter}>A</AnchorLink>
                        <AnchorLink href="#b" className={styles.Letter}>B</AnchorLink>
                        <AnchorLink href="#c" className={styles.Letter}>C</AnchorLink>
                        <AnchorLink href="#d" className={styles.Letter}>D</AnchorLink>
                        <AnchorLink href="#e" className={styles.Letter}>E</AnchorLink>
                        <AnchorLink href="#f" className={styles.Letter}>F</AnchorLink>
                        <AnchorLink href="#g" className={styles.Letter}>G</AnchorLink>
                        <AnchorLink href="#h" className={styles.Letter}>H</AnchorLink>
                        <AnchorLink href="#i" className={styles.Letter}>I</AnchorLink>
                        <AnchorLink href="#j" className={styles.Letter}>J</AnchorLink>
                        <AnchorLink href="#k" className={styles.Letter}>K</AnchorLink>
                        <AnchorLink href="#l" className={styles.Letter}>L</AnchorLink>
                        <AnchorLink href="#m" className={styles.Letter}>M</AnchorLink>
                        <AnchorLink href="#n" className={styles.Letter}>N</AnchorLink>
                        <AnchorLink href="#o" className={styles.Letter}>O</AnchorLink>
                        <AnchorLink href="#p" className={styles.Letter}>P</AnchorLink>
                        <AnchorLink href="#q" className={styles.Letter}>Q</AnchorLink>
                        <AnchorLink href="#r" className={styles.Letter}>R</AnchorLink>
                        <AnchorLink href="#s" className={styles.Letter}>S</AnchorLink>
                        <AnchorLink href="#t" className={styles.Letter}>T</AnchorLink>
                        <AnchorLink href="#u" className={styles.Letter}>U</AnchorLink>
                        <AnchorLink href="#v" className={styles.Letter}>V</AnchorLink>
                        <AnchorLink href="#w" className={styles.Letter}>W</AnchorLink>
                        <AnchorLink href="#x" className={styles.Letter}>X</AnchorLink>
                        <AnchorLink href="#y" className={styles.Letter}>Y</AnchorLink>
                        <AnchorLink href="#z" className={styles.Letter}>Z</AnchorLink>
                    </div>

                    {namesList}

                </div>
            </Animated>

        );
    }
}

export default Abc;