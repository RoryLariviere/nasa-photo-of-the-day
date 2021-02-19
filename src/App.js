import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/constants';
import axios from 'axios';
import ApodImg from './components/ApodImg';
import styled from 'styled-components';
import space from './themes/space.jpg';
import Footer from './components/footer';

const AppBackground = styled.div`
  background-image: url(${space});
`
const StyledHeader = styled.div`
  background-color: #212121;
  color: yellow;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 2px 2px black;
  text-shadow: 5px 5px black;
`
const StyledSyn = styled.div`
  font-weight: bold;
  color: yellow;
  font-size: 1.2rem;
  text-shadow: 2px 2px black;
`

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
    <AppBackground className="App">
      <StyledHeader>
      <h1>NASA Astronomy Photo of the Day</h1>
      </StyledHeader>
      <StyledSyn>
      <p>Each day a different image  of the universe is displayed, along with a brief explanation written by a professional astronomer.</p>
      </StyledSyn>
      <ApodImg apodData={apodData} />
      <Footer />
    </AppBackground>
  );
}

export default App;
