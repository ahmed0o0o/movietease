import './SearchResults.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Downlad from './Download/Downlad';

const SearchResults = (props) => {
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [movieID,setMovieID] = useState(``);
    const [mediaType, setMediaType] = useState(``);

    const handleActivePrev = (e)=>{
        e.target.classList.add("activePageNumber");
        if(props.pageCount > 0){
            props.setPageCount(prevPageCount=> Number(prevPageCount) - 1);
        }else{
            e.target.preventDefault();
        }
    }
    const handleActiveNext = (e)=>{
        e.target.classList.add("activePageNumber");
        props.setPageCount(prevPageCount=> Number(prevPageCount) + 1 );
    }
    
    const pickedMovie = (e)=>{
        setMovieID(e.target.id);
        setMediaType(e.target.className);
        props.setClick(true);
        window.scrollTo(0,200);
        console.log(mediaType);
        console.log(movieID);
        console.log(selectedMovie);
    }

    const selectionResult = async() => {
        try{
          const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${movieID}?language=en-US&api_key=c52e8c9749d8e16e1e525525da148b63`);
          const responseJson = await response.json();
          setSelectedMovie(responseJson);
          console.log(selectedMovie);
        }catch{
          console.log(Error);
        }
    }

    useEffect(() => {
        selectionResult();
    },[movieID],[mediaType]);

    return (
        <div className="container">
        {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick} searchValue={props.searchValue}/>:<></>}
        <br/><br/><br/>
        <h2 className="title">Results :</h2>
        <br/><br/>
        <div className="row g-5">
          {props.searchedMovies.map((movie)=>
            <div className="col" key={movie.id}>
                <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id} className={movie.media_type} onClick={pickedMovie}/>
                    <div className='rating'>
                    <span className="ratingSpan">{movie.vote_average?movie.vote_average.toString().slice(0,3):<></>}</span>
                        <img className='rating' src='/images/star.png'></img>
                    </div>
                    <div className='tag'>
                        {movie.media_type?<span className="gonra">{movie.media_type}</span>:<></>}
                        <span className="gonra">
                            <img style={{width:"17px",height:"17px"}} src='/images/icons8-eye-24.png'/>{`${movie.popularity}`}
                        </span>
                        {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                </div>
                {movie.title?<a id={movie.id} placeholder={movie.media_type} onClick={pickedMovie}>{movie.title}<span> ({movie.release_date?(movie.release_date.slice(0,4)):<></>}) </span></a>:<></>}
                {movie.name?<a id={movie.id} placeholder={movie.media_type} onClick={pickedMovie}>{movie.name}<span> ({movie.first_air_date?(movie.first_air_date.slice(0,4)):<></>}) </span></a>:<></>}
            </div>  
            )}
        </div>
        <br />
        <br />
        <br />
        <div className="pageNumbers">
            <Link onClick={handleActivePrev} className="pageNumber prev">
                Prev
            </Link>
            <Link onClick={handleActiveNext} to='' className=" pageNumber next">
                Next
            </Link>
        </div>
    </div>
    )
}

export default SearchResults
