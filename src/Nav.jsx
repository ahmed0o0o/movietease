import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import SearchResults from "./SearchResults";

const Nav = () => {
  const [searchedMovies, setsearchedMovies]= useState([]);
  const [searchValue,setSearchValue] = useState("");
  const [click , setClick] = useState(false);

  const [pageCount,setPageCount] = useState('1');

  const searchResults = async(api) => {
    try{
      const response = await fetch(api);
      const responseJson = await response.json();
      setsearchedMovies(responseJson.results);
      console.log(searchedMovies);
    }catch{
      console.log(Error);
    }
  }

  useEffect(()=>{
    searchResults(`https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=true&language=en-US&page=${pageCount}&api_key=c52e8c9749d8e16e1e525525da148b63`);
  },[searchValue]);

  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg" id='navbar'>
          <div className="container">
            <img src='/images/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg' alt="Logo" className="navbar-brand" style={{width:"33px"}}/>
            <span className="navbar-brand"><Link to='/'>MovieTease</Link></span>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="nav">
              <ul className="navbar-nav">
                <li className="nav-item" >
                  <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item" >
                  <Link to='/MostWatched' className="nav-link">Top-Rated</Link>
                </li>
                <li className="nav-item" >
                  <Link to='/Discover' className="nav-link">Discover</Link>
                </li>
                <li className="nav-item" >
                {/* Serch */}
                  <form onSubmit={(e)=>e.preventDefault()} className="">
                    <input type="search" className="search" placeholder="Search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                  </form>
                </li>
              </ul>
            </div>
              {/* <Link to='/SignUp' className="btn btn-success signUptn" style={{fontWeight: 900, color: 'white', fontFamily: 'monospace',backgroundColor:"red",border:"none"}}>SignUp</Link> */}
        </div>
        </nav>
        {/* Search Results */}
        <div className="searchResults">
          <div className="container">
            {searchValue ? <SearchResults click={click} setClick={setClick} searchedMovies={searchedMovies} setPageCount={setPageCount} pageCount={pageCount} searchValue={searchValue}/>:<></>}
          </div>
        </div>
        {/* End of Search results*/}
    </div>
  )
}

export default Nav
