import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Galery } from './ImageGallery.styled';

export const ImageGallery = ({images, togleModal}) => {
   return (
      <Galery>
         <ImageGalleryItem images={images} togleModal = {togleModal}/>         
      </Galery>
   )
}

ImageGallery.propTypes = {
   images: PropTypes.arrayOf(PropTypes.object).isRequired, 
   togleModal: PropTypes.func.isRequired 
 };