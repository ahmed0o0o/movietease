import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import NewShowsContent from './NewShowsContent'
import './Content.css'

const NewShows = () => {
    const [NewShows,setNewShows] = useState([]);

    const getmovies4 = async (api)=>{
        try{
            const response = await fetch(api);
            const responseJson = await response.json();
            setNewShows(responseJson.results);

        }catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        getmovies4(`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=c52e8c9749d8e16e1e525525da148b63`);
    },[]);

return (
    <Link to='/NewShows' className='link'>
        <div className="container" id='container'>
    <br/>
<div className='sectionTitle'>
<h3 className='title'>Shows</h3>
<Link to='/NewShows'>More</Link>
</div>
<br/><br/>
<div id='carousel7' className='carousel slide'>
<div className='carousel-inner'>
        <NewShowsContent NewShows={NewShows}/>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel7" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel7" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
    </button>
</div>
        </div>
    </Link>
    )
  }

export default NewShows ;