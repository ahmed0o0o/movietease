import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoreDiscover from './More/MoreDiscover';
import MoreMostWatched from './More/MoreMostWatched';
import MoreNew from './More/MoreNew';
import MoreNewShows from './More/MoreNewShows';
import Downlad from './Download/Downlad';
import SignUp from './SignUp';
import { useEffect, useState } from 'react';

// import MoreMostWatched from './MoreMostWatched'

function App() {
  
  const [scrollBtn,setScrollBtn] = useState(false);
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 500){
        setScrollBtn(true);
      }else{
        setScrollBtn(false);
      }
    })
  },[]);
  
  const scrolPageUp = function(){
      window.scrollTo(0,0);
  };
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} index/>
            <Route path='/MostWatched' element={<MoreMostWatched />}/>
            <Route path='/New' element={<MoreNew />}/>
            <Route path='/NewShows' element={<MoreNewShows />}/>
            <Route path='/Discover' element={<MoreDiscover />}/>
            <Route path='/Download' element={<Downlad />}/>
            <Route path='/SignUp' element={<SignUp />}/>
        </Routes>
        {scrollBtn?<button onClick={scrolPageUp} id="scrolUp"><img style={{width:'24px'}} src="/images/arrowUp2.png" alt="up" /></button>:<></>}
    </>
  )
}

export default App

// "homepage": "https://ahmed0o0o.github.io/movietease"

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",