import React from 'react';
import QuoteCard from './QuoteCard';
import { Link } from 'react-router-dom';

const FourthCol = ({path, namesFourth, id}) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }


    // Function that zips arrays
    function zip() {
        var args = [].slice.call(arguments);
        var longest = args.reduce(function (a, b) {
            return a.length > b.length ? a : b
        }, []);

        return longest.map(function (_, i) {
            return args.map(function (array) { return array[i] })
        });
    }

    let fourthColArr = zip(path, namesFourth, id); // paths and names together

    return (
        <div style={style}>
            {fourthColArr.map(i => {
                return (

                    // Passing the ID as a Route parameter
                    <Link to={`/quote/` + i[2]} key={i[0]}>
                        <QuoteCard imgPath={i[0]} by={i[1]} />
                    </Link>

                )
            })}
        </div>

    )
}

export default FourthCol;