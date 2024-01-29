import './GalleryItem.module.css';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
               //Thank you w3school for additional styling help.
    return(
        <Box data-testid="galleryItem"
             sx={{
                marginLeft: "5%",
                marginRight: "5%",
                marginBottom:"5px",
                padding: "10px",
                width: "100px",
                display: "inline-block",
                textAlign: "center",
                //justifyContent: "center",
                boxShadow:"8px 4px 4px #625",
                border: "1px solid #AAA"
             }}>
            <h4>{pic.title}</h4>
            {detail ? <div data-testid="description">{pic.description}</div> : <img src={pic.url} name={pic.id} />} 
            <br />
            <Button data-testid="toggle"
                     //variant='outlined'
                     sx={{
                        width: "100px",
                        marginBottom: "5px",
                        bgcolor:"#928",
                        color: "#EEE",
                        ":hover": {
                            bgcolor: "#E8D"
                        }
                     }}
                    onClick={() => {handleSwap()}}>
                {detail ? 'Image' : 'Details'}
            </Button>
            <Button data-testid="like"
                    sx={{
                    width: "100px",
                    bgcolor:"#928",
                    color: "#EEE",
                    ":hover": {
                        bgcolor: "#E8D"
                    }
                    }} 
                    onClick={() => {handleLike(pic)}}>Like!</Button>
            <br />
            <div>Likes: {pic.likes}</div>
        </Box>
    );
};

export default GalleryItem;