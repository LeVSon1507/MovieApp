import React, { useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import MovieDetail from '../MovieDetail/MovieDetail';
import './ResultList.css';
import LoadingCommon from '../LoadingCommon';

function ResultList({ url, isSearch }) {
   const { results, isLoading } = useFetch(url);
   const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
   const [movie, setMovie] = useState({});

   const handleShowDetails = movie => {
      setIsShowMovieDetail(!isShowMovieDetail);
      setMovie(movie);
   };

   if (isLoading) return <LoadingCommon />;

   return (
      <div className='resultList'>
         <div className='resultContainer'>
            {isSearch &&
               results?.results?.map(movie => {
                  return (
                     <>
                        <div className='resultItem' key={movie.name}>
                           <img
                              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                              alt={movie.title || movie.name}
                              className='resultPoster'
                              onClick={() => handleShowDetails(movie)}
                           />
                        </div>
                     </>
                  );
               })}
            {
               <MovieDetail
                  isShowMovieDetail={isShowMovieDetail}
                  movieData={movie}
                  isBannerList={false}
               />
            }
         </div>
      </div>
   );
}

export default ResultList;
