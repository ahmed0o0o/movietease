import './Download.css';
import { Link } from 'react-router-dom';

const Downlad = (props) => {
    const hideDetails = ()=>{
        props.setClick(false);
        window.scrollTo(0,0);
    }

  return (
    <> 
    <br />
    <br />
        <div className="container D">
            <img src='/images/icons8-close-48.png' alt='close' className='closeicon' onClick={hideDetails}/>
            <div className="row dwonloadRow gy-4">
                <div className="col-12 leftD">
                    <br />    
                    <br />    
                    <div className="img">
                        <img className='downloadImg' src={`https://image.tmdb.org/t/p/w500${props.selectedMovie.backdrop_path}`}></img>
                        <div className='tag'>
                            {props.selectedMovie.adult?<span className="age">18</span>:<></>}
                        </div>
                        <div className='rating'>
                            <img className='rating'  src='/images/star.png'></img>
                            <span className="ratingSpan">{String(props.selectedMovie.vote_average).slice(0,3)}</span>
                        </div>
                    </div>             
                </div>
                {/* props.selectedMovie */}
                <div className="col-12 rightD">
                    <h2 className='donloadH'>{props.selectedMovie.tagline}</h2>
                    <p className='downloadP'>{props.selectedMovie.overview}</p>
                </div>
            </div>
            <div className="button1 Dbuttons">
                <br />
            </div>
            <div className='table-responsive-sm'> 
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>!Important</th>
                            <td className='table-danger'>Install Utorrent Before Downloading</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            {props.selectedMovie.title?<td>{props.selectedMovie.title}</td>:<></>}
                            {props.selectedMovie.name?<td>{props.selectedMovie.name}</td>:<></>}
                        </tr>
                        <tr>
                            <th>Download & Watch</th>
                            <td className='table-success'>
                                {props.selectedMovie.name?<a href={`https://thepiratebay10.org/search/${props.selectedMovie.name}`}>Click here</a>:<></>}
                                {props.selectedMovie.title?<a href={`https://thepiratebay10.org/search/${props.selectedMovie.title}`}>Click here</a>:<></>}
                            </td>
                        </tr>
                        <tr>
                            <th>Home Page</th>
                            {props.selectedMovie.homepage?<td>{props.selectedMovie.homepage}</td>:<td>-</td>}
                        </tr>
                        <tr>
                            <th>Budget</th>
                            {props.selectedMovie.budget?<td>{`${props.selectedMovie.budget}$`}</td>:<td>-</td>}
                        </tr>
                        {/*  revenue  release_date  vote_count*/}
                        <tr>
                            <th>Revenue</th>
                            {props.selectedMovie.revenue?<td>{`${props.selectedMovie.revenue}$`}</td>:<td>-</td>}
                        </tr>
                        <tr>
                            <th>Release Date</th>
                            {props.selectedMovie.release_date?<td>{`${props.selectedMovie.release_date}`}</td>:<></>}
                            {props.selectedMovie.first_air_date?<td>{`${props.selectedMovie.first_air_date}`}</td>:<></>}
                        </tr>
                        <tr>
                            <th>Vote Count</th>
                            {props.selectedMovie.vote_count?<td>{`${props.selectedMovie.vote_count}`}</td>:<td>-</td>}
                        </tr>                       
                    </thead>
                </table>
            </div>
            <br />
            <br />
            {props.click?<Link className="btn2" onClick={hideDetails}> Hide Details</Link>:<></>}
            <br />
            <br />
        </div>
    </>
  )
}

export default Downlad;
