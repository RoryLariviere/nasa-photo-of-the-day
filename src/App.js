import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/constants';
import axios from 'axios';
import ApodImg from './components/ApodImg';


function App() {
  const [apodData, setApodData] = useState([])

  useEffect(()=>{
    const fetchApod = () => {
      axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          setApodData(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    };
    fetchApod();
  }, [])

  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>Each day a different image is displayed of the universe, along with a brief explanation written by a professional astronomer.</p>
      <p><strong>Date:</strong> {apodData.date}</p>
      <ApodImg apodData={apodData} />
    </div>
  );
}

export default App;
