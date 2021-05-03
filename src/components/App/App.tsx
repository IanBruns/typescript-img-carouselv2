import React, { useState, useEffect } from 'react';
import ApiService from '../../services/api-services'
import ImageGrid from '../ImageGrid/ImageGrid';
import Modal from '../Modal/Modal';
import './App.css';

export default function App(props: any) {
  const [mainPhoto, setMainPhoto] = useState({})
  const [show, setShow] = useState(false);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ApiService.getImages()
      .then(imgs => {
        let images = imgs.slice(0, 25);
        setPhotos(images);
      })
  }, [])

  const handlePhotoClick = (image: any) => {
    setMainPhoto(image);
    setShow(true);
  }

  const handleCloseClick = () => {
    setShow(false);
  }

  return (
    <div className="App">
      <header>
        <h1>App</h1>
      </header>
      <main>
        <Modal show={show} handleCloseClick={handleCloseClick} photo={mainPhoto} />
        <ImageGrid photos={photos} handlePhotoClick={(image: any) => handlePhotoClick(image)} />
      </main>
    </div>
  );
}