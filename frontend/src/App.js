import './css/App.css';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';
import {BsFillBookmarkFill} from "react-icons/bs";
import { Fragment, useEffect, useState } from 'react';
import { getBookmarks } from './utils/requests/bookmarks/getBookmarks';
import Bookmarks from './components/Bookmarks';


function App() {
  const footNoteLink = Math.random()>.5?'https://www.un.org/en/climatechange/what-is-climate-change':'https://www.youtube.com/watch?v=FMvw1kk4_Gc';

  const [searchItem,setSearchItem] = useState();
  const [bookmarks,setBookmarks] = useState([]);
  const [showBookmarks,setShowBookmarks] = useState(false);
  useEffect(()=>{
      const getSavedCities = async ()=>{
        const data = await getBookmarks(setBookmarks);
        // console.log("Bookmarks: ",data);
        setBookmarks(data);
        // return data;
      }
      getSavedCities();
      // setBookmarks(getSavedCities());

  },[]);

  const nextSearchHandler = (event)=>{
    setSearchItem();
  }
  
  return (
    <div className="App">
      <BsFillBookmarkFill className='bookmark-icon-home' onClick={e=> setShowBookmarks(!showBookmarks)}/>
      <div className="App-header">
        <h1 className="primary-heading">
          Weather App
        </h1>
      </div>
      {(!searchItem && !showBookmarks) && <WeatherForm setSearchItem={setSearchItem}/>}
      {(searchItem && !showBookmarks) && <Fragment><WeatherCard setBookmarks={setBookmarks} city={searchItem} setSearchItem={setSearchItem}/><button className="button" onClick={nextSearchHandler}>Next Search</button></Fragment>}
      {showBookmarks && <Bookmarks setBookmarks={setBookmarks} bookmarks={bookmarks}/>}
      <footer className='footer'><a href={footNoteLink} className='footer-note'>Can you believe this weather we're having?</a></footer>
      <p className='tip'>Tip: Click on units to change. You must choose from the search options pop up.</p>
    </div>
  );
}
export default App;
