import { useEffect, useState } from 'react';

function useFetch(url) {
   const [results, setResults] = useState({});
   const [isLoading, setIsLoading] = useState(false);

   const handleResponse = async response => {
      if (response.status === 200) {
         const data = await response.json();
         setResults(data);
      }
      setIsLoading(false);
   };

   const fetchData = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(`https://api.themoviedb.org/3${url}`);
         handleResponse(response);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   };

   useEffect(() => {
      fetchData();
      // eslint-disable-next-line
   }, [url]);

   const reLoad = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(`https://api.themoviedb.org/3${url}`);
         handleResponse(response);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   };

   return { results, isLoading, reLoad };
}

export default useFetch;
