import React, { useState, useEffect } from 'react';
import Images from './components/images/Images';
import './App.css';
import Header from './components/header/Header';

const APIURL = `http://localhost:3001/api/images`;

function App() {
  const [imagesData, setImagesData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        setImagesData(data.collection.items);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Images images={imagesData} />
    </div>
  );
}

export default App;
