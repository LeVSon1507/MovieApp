import React from 'react';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';
import NavBar from '../../components/NavBar/NavBar';
import { requests } from '../../requestsApi';
import './Browse.css';
import useFetch from '../../customHooks/useFetch';
import { isEmpty } from 'lodash';
import LoadingCommon from '../../components/LoadingCommon';

function Browse() {
   const { results, isLoading } = useFetch(requests.fetchNetflixOriginals);

   if (isLoading) return <LoadingCommon />;

   return isEmpty(results) ? (
      <LoadingCommon />
   ) : (
      <div className='browseContainer'>
         <NavBar />
         <Banner />
         <MovieList apiEndpoint={requests.fetchNetflixOriginals} isOriginal={true} />

         <div className='container-title'>
            <h3 className='title'>Xu Hướng</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchTrending} />

         <div className='container-title'>
            <h3 className='title'>Xếp hạng cao</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchTopRated} />

         <div className='container-title'>
            <h3 className='title'>Hành động</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchActionMovies} />

         <div className='container-title'>
            <h3 className='title'>Hài</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchComedyMovies} />

         <div className='container-title'>
            <h3 className='title'>Kinh dị</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchHorrorMovies} />

         <div className='container-title'>
            <h3 className='title'>Lãng mạng</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchRomanceMovies} />

         <div className='container-title'>
            <h3 className='title'>Tài liệu</h3>
         </div>
         <MovieList apiEndpoint={requests.fetchDocumentaries} />
      </div>
   );
}

export default Browse;
