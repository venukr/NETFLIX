import React, { useState } from 'react'
import './RowPost.css';
import axios from '../../axios';
import {imageURL,API_KEY} from '../../Constants/Constants';
import { useEffect } from 'react';
import YouTube from 'react-youtube';



function RowPost(props) {
    const [movie,setMovie]= useState([])
    const [url,setUrl]=useState()

    useEffect(() => {

        axios.get(props.url).then((response)=>{

            console.log(response.data.results[0])

            setMovie(response.data.results)
        })

        },[])

        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };

          const movieHandle=(id)=>{
              console.log(id)

              axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                  console.log(response.data.results)
                  if(response.data.results.length!==0){
                      setUrl(response.data.results[0])

                  }else{
                      console.log("array empty")
                  }


              })
          }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movie.map((obj,index)=>{
                        return(
                            <img onclick={()=>movieHandle(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL+obj.backdrop_path}`} index={index} alt="poster"/>

                        )

                 
           
                 })
                 
            
            }
            </div>

       { url ? <YouTube opt={opts} videoId={url.key} /> :""}
            
        </div>
    )
}

export default RowPost
