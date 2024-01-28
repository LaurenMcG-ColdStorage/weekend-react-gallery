
function GalleryList(gallery, setGalleryCallback){
    console.log(gallery);
    
    return(
      <div>
        {gallery.map(pic => {
            return(
                <GalleryItem key={pic.id} pic={pic}/>
            )
        })}
      </div>  
    );
};

export default GalleryList;