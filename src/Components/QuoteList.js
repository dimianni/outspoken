import React from 'react';
import './QuoteList.css';
import FirstCol from './FirstCol';
import SecondCol from './SecondCol';
import ThirdCol from './ThirdCol';
import FourthCol from './FourthCol';

const QuoteList = ({ speakers }) => {


    const every = (arr, interval, start) => {
        var result = [];
        for (var i = start || 0; i < arr.length; i += interval || 1) {
            result.push(arr[i]);
        }
        return result;
    }

    // every([0, 1, 2, 3, 4]) -- [0,1,2,3,4]
    // every([0, 1, 2, 3, 4], 1) -- [0,1,2,3,4]
    // every([0, 1, 2, 3, 4], 2) -- [0,2,4]
    // every([0, 1, 2, 3, 4], 3) -- [0,3]
    // every([0, 1, 2, 3, 4], 3, 1) -- [1,4]


    // Shuffling the original data
    const randomize = speakers;

    // Getting arrays of 'bys' and paths from the shuffled array
    let bys = randomize.map(i => i.by)
    let paths = randomize.map(i => i.imgPath)
    let ids = randomize.map(i => i.id)

    // Getting the array of 'bys' sorted
    const namesFirst = every(bys, 4)
    const namesSecond = every(bys, 4, 1)
    const namesThird = every(bys, 4, 2)
    const namesFourth = every(bys, 4, 3)

    // Getting the array of paths sorted
    const firstColPaths = every(paths, 4)
    const secondColPaths = every(paths, 4, 1)
    const thirdColPaths = every(paths, 4, 2)
    const fourthColPaths = every(paths, 4, 3)

    // Getting the array of ids sorted
    const firstColIds = every(ids, 4)
    const secondColIds = every(ids, 4, 1)
    const thirdColIds = every(ids, 4, 2)
    const fourthColIds = every(ids, 4, 3)

    return (
        <div className="quoteList">
            <div className="quoteListIndivid">
                <FirstCol path={firstColPaths} namesFirst={namesFirst} id={firstColIds} />
                <SecondCol path={secondColPaths} namesSecond={namesSecond} id={secondColIds} />
            </div>
            <div className="quoteListIndivid">
                <ThirdCol path={thirdColPaths} namesThird={namesThird} id={thirdColIds} />
                <FourthCol path={fourthColPaths} namesFourth={namesFourth} id={fourthColIds} />
            </div>

        </div>
    );
}

export default QuoteList;