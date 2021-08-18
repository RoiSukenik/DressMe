/**
 * This custom hook is used to get the data from the remote api.
 */
import {useEffect, useState} from 'react';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL= 'http://www.mocky.io/v2/';



const useAxios = ({ url , method , data = null, headers = null }:AxiosRequestConfig ) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = async () => {
        let response = await axios({
            method:method,
            url:url,
            headers:JSON.parse(headers),
            data: JSON.parse(data)})
        if(response.status !== 200) {setError(response.statusText)}
        setResponse(response.data);
        setloading(false);

    };

    useEffect(() => {
        fetchData();
    }, [method, url, data, headers]);

    return { response, error, loading };
};

export default useAxios;
