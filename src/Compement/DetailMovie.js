import React from 'react';
import { Link } from 'react-router-dom';

const DetailMovie = (props) => {
    return (
        <div>
            <div>
                <h1>{props.film.title}</h1>
                <p>Titre Original: {props.film.original_title}</p>
                <p>Date de Sorti: {props.film.release_date}</p>

                <img src={"https://image.tmdb.org/t/p/w500" + props.film.backdrop_path} alt={"Image du film " + props.film.title} />
            </div>
            <div>
                Synopsis: {props.film.overview}
            </div>
            <Link to={"/movie/" + props.film.id + "/videos"}><button> Bande annonce </button></Link>
        </div>
    );
};

export default DetailMovie;