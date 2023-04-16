import React from "react";
import { API_KEY } from "../../config";
import useFetch from "../../customHooks/useFetch";
import moment from 'moment';
import YouTube from 'react-youtube';
import './MovieDetail.css';

function MovieDetail({ movieData, isShowMovieDetail, isBannerList }) {
    const { id, title, release_date, vote_average, backdrop_path, overview, poster_path, name } = movieData;
    const url = `/movie/${id}/videos?api_key=${API_KEY}`;
    const { results, isLoading } = useFetch(url);

    const trailerMovie = results?.results?.find(movie => {
        return movie.site === "YouTube" && (movie.type === "Trailer" || movie.type === "Teaser");
    });

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        isShowMovieDetail && <div className="movieDetails">
            <div className="movieDetailContainer">
                <h1 className='title'>{isBannerList ? name : title}</h1>
                <div className="line"></div>
                <h4>Release Date: {moment(release_date).format("YYYY-MM-DD")}</h4>
                <h4 className='vote'>Vote: {vote_average}/10</h4>
                <p >{overview}</p>
            </div>
            {isLoading && <h1>Loading...</h1>}
            {
                !isLoading && trailerMovie && (
                    <div className="trailer">
                        <YouTube videoId={trailerMovie.key} opts={opts} />
                    </div>
                )
            }
            {
                !isLoading && !trailerMovie && (
                    <img src={
                        isBannerList ?
                            `https://image.tmdb.org/t/p/original${poster_path}`
                            : `https://image.tmdb.org/t/p/original${backdrop_path}`
                    } alt="Backdrop" style={{ width: "100%" }} />
                )
            }
        </div>
    );
}

export default MovieDetail;