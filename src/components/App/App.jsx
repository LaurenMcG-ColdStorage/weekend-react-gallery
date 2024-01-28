import react from 'react';
import axios from 'axios';
import GalleryItem from '../../GalleryItem/GalleryItem';
import GalleryList from '../../GalleryList/GalleryList';
import { useState, useEffect } from 'react';

function App() {
  const [gallery, setGallery] = useState([]);

  const refreshGallery = () => {
    axios.get('/api/gallery')
      .then((response) => {
        setGallery(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    refreshGallery()
  }, [])

    return (
      <div data-testid='app galleryList'>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList gallery={gallery} 
                     setGalleryCallback={setGallery}/>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
