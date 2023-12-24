import './Content.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import MostNewContent from './MostNewContent';

const MostNew = () => {
    var [newMovies,setNewMovies] = useState([]);

    const getmovies =  async(api)=>{
        try{
            const response = await fetch(api);
            const responseJson = await response.json();
            setNewMovies(responseJson.results);
        }catch(err){
            console.log(err)
        }
    };
    
    useEffect(() => {
        getmovies(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=c52e8c9749d8e16e1e525525da148b63`);
    },[]);

return (
    <Link to='/New' className='link'>
        <div className="container" id='container'>
        <br/>
<div className='sectionTitle'>
<h3 className='title'>New Movies</h3>
<Link to='/New'>More</Link>
</div>
<br/><br/>
<div id='carousel4' className='carousel slide'>
<div className='carousel-inner'>
        <MostNewContent newMovies={newMovies}/>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel4" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel4" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
    </button>
</div>
        </div>
    </Link>
    )
}

export default MostNew