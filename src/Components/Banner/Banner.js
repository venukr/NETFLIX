
import React, { useState } from 'react'
import './Banner.css';
import { useEffect } from 'react';
import axios from'../../axios';
import { API_KEY,imageURL } from '../../Constants/Constants';

function Banner() {
    const [movie,setMovie] = useState()

    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${API_KEY}&Language=en-US`).then((Response)=>{
            console.log(Response.data.results[0])
            
            const results=Response.data.results;
            const index=Math.floor(Math.random()*Response.data.results.length)
            setMovie(results[index])


             })

    },[])
    

    
    return (        
    
       <div style={{backgroundImage:`url(${movie? imageURL+movie.backdrop_path:""})`}} 
        
       className="banner">

        
        <div className="content" >

            <h1 className="title">{movie ? movie.title :""}</h1>
           <div className="banner_buttons">
           <button className="button"> Play</button>
           <button className="button">My List </button>

        </div>
  <h1 className="description">
{movie ? movie.overview :""}
  </h1>

        </div>
        
       <div className="fade_bottom">
           
       </div>

            
        </div>
        
    )
}

export default Banner
