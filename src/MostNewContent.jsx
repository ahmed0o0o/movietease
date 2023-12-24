
const MostNewContent = (props) => {
  return (
    <>
        <div className="carousel-item active">
            <div className='row g-3'>
                {props.newMovies.map((movie)=>
                <div className="col" key={movie.id}>
                    <div className='img'>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='rating'>
                            <img className='rating' src='/images/star.png'></img>
                            <span className="ratingSpan">{movie.vote_average.toString().slice(0,3)}</span>
                        </div>
                        <div className='tag'>
                        {movie.media_type?<span className="gonra">{movie.media_type}</span>:<></>}
                            <span className="gonra">
                                <img style={{width:"17px",height:"17px"}} src='/images/icons8-eye-24.png'/>{`${movie.popularity}`}
                            </span>
                            {movie.adult?<span className="age">18</span>:<></>}
                        </div>
                    </div>
                    <a style={{textAlign:''}} href="http://">{movie.title}<span> ({movie.release_date.slice(0,4)})</span></a>
                </div>
                ).slice(9,12)}
            </div>
        </div>
        <div className="carousel-item ">
            <div className='row g-3'>
                {props.newMovies.map((movie)=>
                <div className="col" key={movie.id}>
                    <div className='img'>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='rating'>
                            <img className='rating' src='/images/star.png'></img>
                            <span className="ratingSpan">{movie.vote_average.toString().slice(0,3)}</span>
                        </div>
                        <div className='tag'>
                        {movie.media_type?<span className="gonra">{movie.media_type}</span>:<></>}
                            <span className="gonra">
                                <img style={{width:"17px",height:"17px"}} src='/images/icons8-eye-24.png'/>{`${movie.popularity}`}
                            </span>
                            {movie.adult?<span className="age">18</span>:<></>}
                        </div>
                    </div>
                    <a style={{textAlign:''}} href="http://">{movie.title}<span> ({movie.release_date.slice(0,4)})</span></a>
                </div>
                ).slice(12,15)}
            </div>
        </div>
        <div className="carousel-item ">
            <div className='row g-3'>
                {props.newMovies.map((movie)=>
                <div className="col" key={movie.id}>
                    <div className='img'>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='rating'>
                            <img className='rating' src='/images/star.png'></img>
                            <span className="ratingSpan">{movie.vote_average.toString().slice(0,3)}</span>
                        </div>
                        <div className='tag'>
                        {movie.media_type?<span className="gonra">{movie.media_type}</span>:<></>}
                            <span className="gonra">
                                <img style={{width:"17px",height:"17px"}} src='/images/icons8-eye-24.png'/>{`${movie.popularity}`}
                            </span>
                            {movie.adult?<span className="age">18</span>:<></>}
                        </div>
                    </div>
                    <a style={{textAlign:''}} href="http://">{movie.title}<span> ({movie.release_date.slice(0,4)})</span></a>
                </div>
                ).slice(15,18)}
            </div>
        </div>
        <div className="carousel-item ">
            <div className='row g-3'>
                {props.newMovies.map((movie)=>
                <div className="col" key={movie.id}>
                    <div className='img'>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='rating'>
                            <img className='rating' src='/images/star.png'></img>
                            <span className="ratingSpan">{movie.vote_average.toString().slice(0,3)}</span>
                        </div>
                        <div className='tag'>
                        {movie.media_type?<span className="gonra">{movie.media_type}</span>:<></>}
                            <span className="gonra">
                                <img style={{width:"17px",height:"17px"}} src='/images/icons8-eye-24.png'/>{`${movie.popularity}`}
                            </span>
                            {movie.adult?<span className="age">18</span>:<></>}
                        </div>
                    </div>
                    <a style={{textAlign:''}} href="http://">{movie.title}<span> ({movie.release_date.slice(0,4)})</span></a>
                </div>
                ).slice(6,9)}
            </div>
        </div>
        <div className="carousel-item ">
            <div className='row g-3'>
                {props.newMovies.map((movie)=>
                <div className="col" key={movie.id}>
                    <div className='img'>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='rating'>
                            <img className='rating' src='/images/star.png'></img>
                            <span className="ratingSpan">{movie.vote_average.toString().slice(0,3)}</span>
                        </div>
                        <div className='tag'>
                        {movie.media_type?<span className="gonra">{movie.media_type}</span>:<></>}
                            <span className="gonra">
                                <img style={{width:"17px",height:"17px"}} src='/images/icons8-eye-24.png'/>{`${movie.popularity}`}
                            </span>
                            {movie.adult?<span className="age">18</span>:<></>}
                        </div>
                    </div>
                    <a style={{textAlign:''}} href="http://">{movie.title}<span> ({movie.release_date.slice(0,4)})</span></a>
                </div>
                ).slice(18,21)}
            </div>
        </div>
    </>
  )
}

export default MostNewContent
