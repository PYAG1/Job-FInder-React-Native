import { useState,useEffect } from "react";
import axios from 'axios'
//import {RAPID_API_KEY} from '@env'

//const apikey = RAPID_API_KEY;

const useFetch = (endpoint,query)=>{
    const [data,setData] = useState([])
    const [isLoading, setISLoading] = useState(false )
    const [error, setError] = useState(null)

 
      

        const options = {
          method: 'GET',
          url: `https://jsearch.p.rapidapi.com/${endpoint}`,
          params: {
          ...query
          },
          headers: {
            'X-RapidAPI-Key': 'f0e9880249msh3388e133d0fea20p1f3580jsna7485c1c5555',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          }
        };

        

        async function fetchData() {
        setISLoading(true);


        try {
            const res = await axios.request(options);
            setData(res.data.data);
            setISLoading(false);

        }
        catch (error) {
            setError(error);
            alert("There is an error");

        } finally {
            setISLoading(false);
        }
    }

        useEffect(()=>{
            fetchData()
        },[]);

        const refetch =  ()=>{
            setISLoading(true)
            fetchData();

        }

        return {data,isLoading,error,refetch};

    }

 export default useFetch;
