import react from 'react'
import GalleryItem from '../../GalleryItem/GalleryItem';
import GalleryList from '../../GalleryList/GalleryList';
import { useState, useEffect } from 'react';

function App() {
  const [gallery, setGallery] = useState([]);

    return (
      <div data-testid='app'>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
