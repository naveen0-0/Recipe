import React, { useState, useEffect } from 'react';
import style from '../fullwebsite.module.css';
import Axios from 'axios';
import Recipe from './Recipe';

export default function FullWebsite() {
   const [query, setQuery] = useState("");
   const [results, setResults] = useState([]);

   const queryChange = (e) => setQuery(e.target.value);

   const appId = "de22fa06";
   const appKey = "8184ea24c554ab912339801cdf1152f0";
   const request = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;


   const submithandler = async (e) => {
      e.preventDefault();
      let { data } = await Axios.get(request);
      setResults(data.hits)
   }

   useEffect(()=>{
      async function IntialData(){
         let { data } = await Axios.get(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
         console.log(data.hits)
         setResults(data.hits)
      }
      IntialData()
   },[])

   return (
      <div>
         <div className={style.navbar}>
            <div className={style.title}>
               <img src={require('../images/food.png')} alt="Food" />
            </div>
            <form onSubmit={submithandler}>
               <input type="search" placeholder="Search for a Recepi" value={query} onChange={queryChange} required />
               <input type="submit" value="Search" />
            </form>
         </div>

         <div className={style.container}>
            {results.map((recipe, index) => <Recipe key={index} info={recipe} />)}
         </div>
      </div>
   )
}


