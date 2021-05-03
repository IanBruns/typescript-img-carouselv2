import React, { useState, useEffect } from 'react';
import ApiService from '../../services/api-services'
import ImageGrid from '../ImageGrid/ImageGrid';
import Modal from '../Modal/Modal';
import Photo from '../../types/Photo'
import './App.css';

export default function App(props: any) {
  const [mainPhoto, setMainPhoto] = useState({})
  const [show, setShow] = useState(false);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    //pulling item from local storage before calling to the api as to not overlap
    let store: any = localStorage.getItem('grid');
    store = JSON.parse(store);

    if (store === null) {
      ApiService.getImages()
        .then(imgs => {
          let images = imgs.slice(0, 25);
          images.forEach((img: Photo) => img.description = '');
          localStorage.setItem('grid', JSON.stringify(images));
          setPhotos(images);
        })
    } else {
      setPhotos(store);
    }
  }, [])

  const handlePhotoClick = async (image: Photo) => {
    await setMainPhoto(image);
    setShow(true);
  }

  const handleCloseClick = () => {
    setShow(false);
  }

  const updatePhotoDesc = (id: number, desc: string) => {
    let holdPhotos: any = photos;
    holdPhotos[id - 1].description = desc;
    setPhotos(holdPhotos);
    localStorage.setItem('grid', JSON.stringify(holdPhotos));
  }

  return (
    <div className="App">
      <header>
        <h1>Coding Challenge: By Ian</h1>
      </header>
      <main>
        <Modal show={show} photo={mainPhoto} handleCloseClick={handleCloseClick}
          updatePhotoDesc={updatePhotoDesc} />
        <ImageGrid photos={photos} handlePhotoClick={(image: any) => handlePhotoClick(image)} />
      </main>
    </div>
  );
}