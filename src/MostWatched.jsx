import { useEffect, useState } from 'react';
import './Content.css';
import { Link } from 'react-router-dom';
import MostWatchedContent from './MostWatchedContent';

const MostWatched = () => {
    const [MostWatchedMovies,setMostWatchedMovies] = useState([]);

    const getmovies2 = async (api)=>{
        try{
            const response = await fetch(api);
            const responseJson = await response.json();
            setMostWatchedMovies(responseJson.results);

        }catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        getmovies2(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=c52e8c9749d8e16e1e525525da148b63`);
    },[]);

    return (
    <Link className='link' to='/MostWatched'>
        <div className="container" id='container'>
                <br/>
        <div className='sectionTitle'>
        <h3 className='title'>Top Rated</h3>
        <Link to='/MostWatched'>More</Link>
        </div>
        <br/><br/>
        <div id='carousel5' className='carousel slide'>
    <div className='carousel-inner'>
        <MostWatchedContent MostWatchedMovies={MostWatchedMovies}/>
    </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel5" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel5" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </Link>
  )
}

export default MostWatched
