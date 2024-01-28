import './GalleryItem.module.css';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

function GalleryItem({pic, refreshGalleryCallback}){
    const [detail, setDetail] = useState(false)
    
    function handleSwap(){
        if (detail === false){
            setDetail(true);
        } else {
            setDetail(false);
        };
    };

    function handleLike(pic){
        axios({
            method: 'PUT',
            url: `/api/gallery/like/${pic.id}`,
            data: pic
        })
            .then((response) => {
                refreshGalleryCallback()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <Box data-testid="galleryItem">
            <h4>{pic.title}</h4>
            {detail ? <div data-testid="description">{pic.description}</div> : <img src={pic.url} name={pic.id} />} 
            <br />
            <button data-testid="toggle" onClick={() => {handleSwap()}}>Toggle</button>
            <button data-testid="like" onClick={() => {handleLike(pic)}}>Like</button><br />
            <div>Likes: {pic.likes}</div>
        </Box>
    );
};

export default GalleryItem;