import { useEffect, useState } from 'react';

function useFetch(url) {
   const [results, setResults] = useState({});
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(`https://api.themoviedb.org/3${url}`);
         if (response.ok) {
            const data = await response.json();
            setResults(data);
         } else {
            throw new Error(`Error fetching data from ${url}: ${response.status}`);
         }
      } catch (error) {
         console.error(error);
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      fetchData();
   }, [url]);

   const reLoad = () => {
      fetchData();
   };

   return { results, isLoading, reLoad };
}

export default useFetch;
