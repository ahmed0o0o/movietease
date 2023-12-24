
const NewShowsContent = (props) => {
  return (
    <>
    <div className="carousel-item active">
        <div className='row g-3'>
            {props.NewShows.map((movie)=>
            <div className="col" key={movie.id}>
                <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
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
                <a style={{textAlign:''}} href="http://">{movie.name}<span> ({movie.original_language})</span></a>
            </div>
            ).slice(0,3)}
        </div>
    </div>
    <div className="carousel-item ">
        <div className='row g-3'>
            {props.NewShows.map((movie)=>
            <div className="col" key={movie.id}>
                <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
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
                <a style={{textAlign:''}} href="http://">{movie.name}<span> ({movie.original_language})</span></a>
            </div>
            ).slice(3,6)}
        </div>
    </div>
    <div className="carousel-item ">
        <div className='row g-3'>
            {props.NewShows.map((movie)=>
            <div className="col" key={movie.id}>
                <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
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
                <a style={{textAlign:''}} href="http://">{movie.name}<span> ({movie.original_language})</span></a>
            </div>
            ).slice(6,9)}
        </div>
    </div>
    <div className="carousel-item ">
        <div className='row g-3'>
            {props.NewShows.map((movie)=>
            <div className="col" key={movie.id}>
                <div className='img'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
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
                <a style={{textAlign:''}} href="http://">{movie.name}<span> ({movie.original_language})</span></a>
            </div>
            ).slice(9,12)}
        </div>
    </div>
</>
  )
}

export default NewShowsContent
