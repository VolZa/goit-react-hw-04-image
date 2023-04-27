import PropTypes from 'prop-types';
import { GaleryImage, GaleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({images, togleModal}) => {
   return (
      <> 
         {images.map(el => (
            <GaleryItem key={el.id} onClick={e => {togleModal(el.largeImageURL, el.tags)}} >
               <GaleryImage loading="lazy" 
                  src={el.webformatURL} alt={el.tags} 
               />
            </GaleryItem>
         ))}
      </>  // видалю
   )
}

ImageGalleryItem.propTypes = {
   images: PropTypes.arrayOf(PropTypes.object).isRequired
   // togleModal: PropTypes.func.isRequired 
}