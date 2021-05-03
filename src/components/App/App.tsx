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
    let store: any = localStorage.getItem('grid');
    store = JSON.parse(store);
    if (store === null) {
      ApiService.getImages()
        .then(imgs => {
          let images = imgs.slice(0, 25);
          images.forEach((img: any) => img.description = '');
          localStorage.setItem('grid', JSON.stringify(images));
          setPhotos(images);
        })
    } else {
      setPhotos(store);
    }
  }, [])

  const handlePhotoClick = async (image: any) => {
    await setMainPhoto(image);
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