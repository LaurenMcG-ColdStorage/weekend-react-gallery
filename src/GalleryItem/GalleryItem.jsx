
function GalleryItem({pic}){
    return(
        <>
            <h4>{pic.title}</h4>
            <img src={pic.url} data-testid='galleryList'/>
        </>
    );
};

export default GalleryItem;