import React, { useState, useEffect } from 'react';
import ApiService from '../../services/api-services'
import ImageGrid from '../ImageGrid/ImageGrid';
import './App.css';

export default function App(props: any) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ApiService.getImages()
      .then(imgs => {
        let images = imgs.slice(0, 25);
        setPhotos(images);
      })
  }, [])

  const handlePhotoClick = (image: any) => {
    console.log(image);
  }

  return (
    <div className="App">
      <header>
        <h1>App</h1>
      </header>
      <main>
        <ImageGrid photos={photos} handlePhotoClick={(image: any) => handlePhotoClick(image)} />
      </main>
    </div>
  );
}