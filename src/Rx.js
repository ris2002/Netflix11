/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "./axios"
import "./Rx.css";
import {useNavigate} from "react-router"
import { getmoviedata } from "./Movie";
import Movie from './Movie'
 

function Rx({title,fetchURL,isLargeRow=false}){
// eslint-disable-next-line no-unused-vars
const[movies,setMovies]=useState([]);
const[movieID,setMovieID]= useState([""])

const baurl="https://image.tmdb.org/t/p/original/";
 
 //const movieClick=(id)=>{getmoviedata(id)
    //window.open("/movie", "_self")}
 

useEffect(() =>{
// eslint-disable-next-line no-unused-vars
async function FD(){
    const request =await axios.get(fetchURL);
    setMovies(request.data.results);
    return request;

//``
}
FD();
},[fetchURL]);
//console.log(movies);
const getmoviedata=(id)=>{
    //setMovieID(id)
   
    
    
}
    return(
        <div className="row">

<h2>{title}</h2>
<div className="posters">

{movies.map(movie =>(
    
    <img className={`poster ${isLargeRow && "posterLarge"}`}  
    key={movie.id}
   
   onClick={()=>getmoviedata(movie.id)}
     src={`${baurl}${

        isLargeRow ? movie.poster_path: movie.backdrop_path
    }`}  alt={movie.name} test1={movie.id} />
)
)}
<>
{/* <Movie movieID={movieID}/> */}
</>
</div>

        </div>
    );
}

export   default Rx;

