import React from 'react';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';
import NavBar from '../../components/NavBar/NavBar';
import { requests } from '../../requestsApi';
import './Browse.css';

function Browse() {
   return (
      <div className='browseContainer'>
         <NavBar />
         <Banner />
         <MovieList apiEndpoint={requests.fetchNetflixOriginals} isOriginal={true} />

         <h3>Xu Hướng</h3>
         <MovieList apiEndpoint={requests.fetchTrending} />

         <h3>Xếp hạng cao</h3>
         <MovieList apiEndpoint={requests.fetchTopRated} />

         <h3>Hành động</h3>
         <MovieList apiEndpoint={requests.fetchActionMovies} />

         <h3>Hài</h3>
         <MovieList apiEndpoint={requests.fetchComedyMovies} />

         <h3>Kinh dị</h3>
         <MovieList apiEndpoint={requests.fetchHorrorMovies} />

         <h3>Lãng mạng</h3>
         <MovieList apiEndpoint={requests.fetchRomanceMovies} />

         <h3>Tài liệu</h3>
         <MovieList apiEndpoint={requests.fetchDocumentaries} />
      </div>
   );
}

export default Browse;
