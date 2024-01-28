import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ gallery, setGalleryCallback }){
    console.log(gallery);
    
    return(
      <div data-testid='galleryList'>
        {gallery.map(pic => {
            return(
                <GalleryItem key={pic.id} pic={pic}/>
            )
        })}
      </div>  
    );
};

export default GalleryList;