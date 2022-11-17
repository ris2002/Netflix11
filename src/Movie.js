import React , { useEffect, useState }from "react";
import axios from './axios';
import requests from './Request';
import { Link ,useHistory} from "react-router-dom";
let ID ;




function Movie(MovieID){
    const history = useHistory();
    history.push("/movie")
  const [movie,setmovie ]=useState([]);
  const [video ,setvideo ]=useState([]);
 

  const FX=async()=>{ const {data}=await axios.get( `https://api.themoviedb.org/3/movie/${MovieID}?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US`);

  
  setmovie(data);
  console.log("data",data);
  //if(data){
   // 
  //}
 
 }
const FV=async()=>{const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${MovieID}/videos?api_key=acc7209cb745b158aed71a3a6f719a49&language=en-US`)


setvideo(data.results[0]?.key)
}


useEffect(()=>{
    FX();
    FV();
},[])

  
    return(
       
        <div className='ban' style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
            backgroundPosition:"center center"



        }}>
            <div className='Banner_contents'>
                <h1 className='Banner_titles'>{movie?.title||movie?.name||movie?.original_name}</h1>
                <div className='buttons'>
                <Link to="/MovPage1">
                    <button className='banner_button'>Play</button>
                    </Link>
                    <button className='banner_button'>My List</button>

                </div>
                <h1 className='banner_description'>{movie?.overview}</h1>
            </div>
            <div className='banner--fadebottom'/>
           
       

        </div>
        

        
    )
}
export default Movie;