import React, { useEffect, useMemo, useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import { requests } from '../../requestsApi';
import './Banner.css';
import LoadingCommon from '../LoadingCommon';
import MovieBannerDetail from './Movie';
import { isEmpty } from 'lodash';

function Banner() {
   const url = requests.fetchNetflixOriginals;
   const { results, isLoading } = useFetch(url);
   const [isOpen, setIsOpen] = useState(false);
   const [randomMovie, setRandomMovie] = useState(null);

   useEffect(() => {
      if (isEmpty(results.results)) {
         return null;
      }

      const randomMovieIndex = Math.floor(Math.random() * results.results.length);
      const selectedMovie = results.results[randomMovieIndex];
      setRandomMovie(selectedMovie);

      return () => {
         // Cleanup function to cancel any ongoing tasks
         // Not sure if you have any subscriptions or asynchronous tasks to cancel, if so, implement here
      };
   }, [results]);

   if (isLoading) return <LoadingCommon />;

   return (
      <div className='container'>
         {randomMovie && (
            <div className='banner-container'>
               <img
                  src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
                  alt={randomMovie.name}
                  className='banner-img'
               />
               <div className='infoGroup'>
                  <h1 className='banner-name'>{randomMovie.name}</h1>
                  <div className='btnGroup'>
                     <button className='buttonBannerPlay' onClick={() => setIsOpen(true)}>
                        Play
                     </button>
                     <button className='buttonBannerMyList'>My List</button>
                  </div>
                  <p className='banner-overview'>{randomMovie.overview}</p>
               </div>
            </div>
         )}
         <MovieBannerDetail isOpen={isOpen} setIsOpen={setIsOpen} movie={randomMovie} />
      </div>
   );
}

export default Banner;
