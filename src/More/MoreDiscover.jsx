import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Downlad from "../Download/Downlad";
import Nav from "../Nav";
import Footer from "../Footer";

const MoreAnimation = () => {
    const [discover,setDiscover] = useState([]);
    const [pageCount,setPageCount] = useState('1');

    const [selectedMovie, setSelectedMovie] = useState([]);
    const [click , setClick] = useState(false);
    const [movieID,setMovieID] = useState(``);

    const getmovies7 = async (api)=>{
        try{
            const response = await fetch(api);
            const responseJson = await response.json();
            setDiscover(responseJson.results);
        }catch(err){
            console.log(err);
        }
    };

    const selectionResult = async() => {
        try{
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US&api_key=c52e8c9749d8e16e1e525525da148b63`);
          const responseJson = await response.json();
          setSelectedMovie(responseJson);
        }catch{
          console.log(Error);
        }
      }

    useEffect(() => {
        getmovies7(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${pageCount}&sort_by=popularity.desc&api_key=c52e8c9749d8e16e1e525525da148b63`);
    },[pageCount]);

    useEffect(() => {
        selectionResult();
    },[movieID],[]);

    const pickedMovie = (e)=>{
        setMovieID(e.target.id);
        setClick(true);
        window.scrollTo(0,200);
      }

      const handleActivePrev = (e)=>{
        e.target.classList.add("activePageNumber");
        if(pageCount > 0){
            setPageCount(prevPageCount=> Number(prevPageCount) - 1);
        }else{
            e.target.preventDefault();
        }
    }
    const handleActive1 = (e)=>{
        e.target.classList.add("activePageNumber");
        setPageCount("1");
        setClick(false);
    }
    const handleActive2 = (e)=>{
            e.target.classList.add("activePageNumber");
            setPageCount("2");
            setClick(false);
    }
    const handleActive3 = (e)=>{
        e.target.classList.add("activePageNumber");
        setPageCount("3");
        setClick(false);
    }
    const handleActiveNext = (e)=>{
        e.target.classList.add("activePageNumber");
        setPageCount(prevPageCount=> Number(prevPageCount) + 1 );
        setClick(false);
    }

    return (
    <>
    <Nav />
        <div className="container">
        <br/><br/>
            {click?<Downlad selectedMovie={selectedMovie} click={click} setClick={setClick}/>:<></>}
            <br></br>
        <h2 className="title">Discover Our Library Of Movies</h2>
        <br/><br/>
        <div className="row">
          {discover.map((movie)=>
            <div className="col" key='3'>
                <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id} onClick={pickedMovie}/>
                    <div className='rating'>
                    <span className="ratingSpan">{movie.vote_average.toString().slice(0,3)}</span>
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
                <a style={{textAlign:''}} href="http://" id={movie.id} onClick={pickedMovie}>{movie.title}<span> ({movie.release_date.slice(0,4)})</span></a>
            </div>  
            )}
        </div>
        <br />
        <br />
        <div className="pageNumbers">
            <Link onClick={handleActivePrev} className="pageNumber prev">
                Prev
            </Link>
            <Link onClick={handleActive1} className=" pageNumber">
                1
            </Link>
            <Link onClick={handleActive2} to='' className=" pageNumber">
                2
            </Link>
            <Link onClick={handleActive3} to='' className=" pageNumber">
                3
            </Link>
            <Link onClick={handleActiveNext} to='' className=" pageNumber next">
                Next
            </Link>
        </div>
        </div>
    <Footer />
    </>
    )
  }
  
  export default MoreAnimation 