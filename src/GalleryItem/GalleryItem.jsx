import styles from './GalleryItem.module.css';
import { useState } from 'react';
import axios from 'axios';

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
        <div data-testid="galleryItem">
            <h4>{pic.title}</h4>
            {detail ? <p data-testid="description">{pic.description}</p>: <img src={pic.url} name={pic.id} />}
            <br />
            <button datatype-testid="toggle" onClick={() => {handleSwap()}}>Details</button>
            <button datatype-testid="like" onClick={() => {handleLike(pic)}}>Like! {pic.likes}</button>

        </div>
    );
};

export default GalleryItem;