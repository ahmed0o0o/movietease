import './App.css';
import './Content.css'
import Header from './Header';
import MostWatched from './MostWatched';
import MostNew from './MostNew';
import NewShows from './NewShows';
import Discover from './Discover';
import Nav from './Nav';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Nav />
        <Header />
        <Discover />
        <MostWatched />
        <MostNew />
        <NewShows />
    <Footer />
    </>
  )
}

export default Home
