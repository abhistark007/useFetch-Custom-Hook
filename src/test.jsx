import React, { useEffect, useState } from 'react'

export default function useFetch(url,options={}){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);


    async function fetchData(){
        try{
            setLoading(true);
            const res=await fetch(url,options);
            // console.log(res);
            if(!res.ok) throw new Error(res.statusText);

            const result=await res.json();
            setData(result);
            setError(null);
            setLoading(false);

        }catch(e){
            setError(`${e}. Oops lol error occured`);
            setLoading(false);
        }
    }


    useEffect(()=>{
        fetchData();
    },[url])





    return {data,error,loading};
}
