import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

function GalleryList(){
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
    //console.log(gallery);
    
    return(
      <div data-testid="galleryList">
        {gallery.map(pic => {
            return(
                <GalleryItem key={pic.id} pic={pic} refreshGalleryCallback={refreshGallery}/>
            )
        })}
      </div>  
    );
};

export default GalleryList;