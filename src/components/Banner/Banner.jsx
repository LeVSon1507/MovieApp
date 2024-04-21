import React from 'react';
import useFetch from '../../customHooks/useFetch';
import { requests } from '../../requestsApi';
import './Banner.css';
import LoadingCommon from '../LoadingCommon';

function Banner() {
   const url = requests.fetchNetflixOriginals;
   const { results, isLoading } = useFetch(url);

   if (!results || !results.results || results.results.length === 0) {
      return null;
   }

   // Lấy ngẫu nhiên một phim từ danh sách các phim trả về
   const randomMovie = results.results[Math.floor(Math.random() * results.results.length)];

   if (isLoading) return <LoadingCommon />;

   return (
      <div className='container'>
         {
            <div className='banner-container'>
               <img
                  src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
                  alt={randomMovie.name}
                  className='banner-img'
               />
               <div className='infoGroup'>
                  <h1 className='banner-name'>{randomMovie.name}</h1>
                  <div className='btnGroup'>
                     <button className='buttonBannerPlay'>Play</button>
                     <button className='buttonBannerMyList'>My List</button>
                  </div>
                  <p className='banner-overview'>{randomMovie.overview}</p>
               </div>
            </div>
         }
      </div>
   );
}

export default Banner;
