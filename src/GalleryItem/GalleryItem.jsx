import styles from './GalleryItem.module.css';
import { useState } from 'react';
import axios from 'axios';

function GalleryItem({pic}){
    const [detail, setDetail] = useState(false)
    
    function handleSwap(){
        if (detail === false){
            setDetail(true);
        } else {
            setDetail(false);
        };
    };

    function handleLike(){
        axios.put(`/like/${pic.id}`)
            .then((response) => {

            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div data-testid="galleryItem">
            <h4>{pic.title}</h4>
            {detail ? <p className='desc'>{pic.description}</p>: <img src={pic.url} name={pic.id} />}
            <br />
            <button datatype-testid="toggle" onClick={() => {handleSwap()}}>Details</button>
            <button onClick={() => {handleLike(pic.id)}}>Like! {pic.likes}</button>

        </div>
    );
};

export default GalleryItem;