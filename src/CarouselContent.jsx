import { Link } from "react-router-dom";
import Downlad from "./Download/Downlad";
import { useState,useEffect } from "react";

function CarouselContent(props){
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [movieID,setMovieID] = useState(``);

  const selectionResult = async(api) => {
    try{
      const response = await fetch(api);
      const responseJson = await response.json();
      setSelectedMovie(responseJson);
    }catch{
      console.log(Error);
    }
  }
  
  const pickedMovie = (e)=>{
    setMovieID(e.target.id);
    props.setClick(true);
    window.scrollTo(0,600);
  }
  useEffect(()=>{
      selectionResult(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US&api_key=c52e8c9749d8e16e1e525525da148b63`);
  },[movieID]);


  return (
  <> 
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item active" key='2'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(0,1)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='3'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(1,2)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='3'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(2,3)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='4'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(3,4)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='4'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(4,5)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='5'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(5,6)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='6'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(6,7)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='7'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(7,8)}
    {props.CarouselMovies.map((movie)=>
      <div className="carousel-item" key='9'>
        <div className="landing">
          <div className="container">
            <div className="slide-row">
              <div className="row g-3">
                <div className="col-md-6 left">
                  <h3 className='hot'>#Hot this weekend 🔥</h3>
                  <h1 className="landing-h" onClick={pickedMovie} id={movie.id}>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                  <p className="landing-p">{movie.overview}</p>
                  <br />
                  <div className="button1"> 
                    {props.click?<></>:<Link onClick={pickedMovie} id={movie.id} className="btn2"> Show Details</Link>}
                  </div>
                </div>
                <div className="col-md-6 right" id='hotImg'>
                  <div className="img">
                    <img onClick={pickedMovie} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} id={movie.id}/>
                    <div className='tagTop'>
                    {movie.media_type?<span className="gonram">{movie.media_type}</span>:<></>}
                    <span className="gonra">
                      <div className="eye">
                        <img style={{width:"17px"}} src='/images/icons8-eye-24.png'/> {`${movie.popularity}`}
                      </div>
                    </span>
                    {movie.adult?<span className="age">18</span>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.click?<Downlad selectedMovie={selectedMovie} click={props.click} setClick={props.setClick}/>:<></>}
          </div>
        </div>
      </div>
    ).slice(8,9)}
  </>
)
}

export default CarouselContent
