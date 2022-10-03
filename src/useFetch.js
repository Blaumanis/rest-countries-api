import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    const getData = async() => {
        const response = await fetch(url);
        const countries = await response.json();
        setData(countries.sort((a,b)=> b.population - a.population))
        setLoading(false);
    }

    useEffect(() => {
        let isCancelled = false;
        if(!isCancelled){
            getData();
        }

        // cleanup function
        return () => {
            isCancelled = true;
        }

    }, [url])
    return {loading,data}
}

export default useFetch;