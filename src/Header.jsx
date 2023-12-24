import { useEffect, useState } from "react";
import CarouselContent from "./CarouselContent";

const Header = () => {

const [CarouselMovies,setCarouselMovies] = useState([]);
const [click , setClick] = useState(false);

const getMovies1 = async(api)=>{
  const response = await fetch(api);
  const data = await response.json();
  setCarouselMovies(data.results);
}

const hideDetails = ()=>{
  setClick(false);
}


useEffect(()=>{
  getMovies1(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=c52e8c9749d8e16e1e525525da148b63`);
},[]); 

// #########################################

  return (
      <div className='header'>
        <div id="carousel1" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={2} aria-label="Slide 3" />
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={3} aria-label="Slide 4" />
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={4} aria-label="Slide 5" />
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={5} aria-label="Slide 6" />
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to={6} aria-label="Slide 7" />
          </div>
          <br/>
          <div className="carousel-inner">
            <CarouselContent CarouselMovies ={CarouselMovies} click={click} setClick={setClick}/>
            <br />
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev" onClick={hideDetails}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next" onClick={hideDetails}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
);
}

export default Header