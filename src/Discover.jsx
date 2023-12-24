import { Link } from 'react-router-dom';
import DiscoverContent from './DiscoverContent';
import { useEffect,useState } from 'react';

const Discover = () => {
    const [discover,setDiscover] = useState([]);

    const getmovies6 = async (api)=>{
        try{
            const response = await fetch(api);
            const responseJson = await response.json();
            setDiscover(responseJson.results);

        }catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        getmovies6(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=c52e8c9749d8e16e1e525525da148b63`);
    },[]);

  return (
    <Link className='link' to='/Discover'>
        <div className="container" id='container'>
                <br/>
        <div className='sectionTitle'>
        <h3 className='title'>Discover</h3>
        <Link to='/Discover'>More</Link>
        </div>
        <br/><br/>
        <div id='carousel3' className='carousel slide'>
        <div className='carousel-inner'>
            <DiscoverContent discover={discover}/>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </Link>
  )
}

export default Discover
