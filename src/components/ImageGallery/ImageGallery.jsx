import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Galery } from './ImageGallery.styled';

export const ImageGallery = ({items}) => {
   return (
      <Galery>
         {items.map(image => (
            <li key={image.id}>
              <ImageGalleryItem image={image}/> 
            </li>
         ))}
      </Galery>
   )
};

ImageGallery.propTypes = {
   items: PropTypes.arrayOf(PropTypes.object).isRequired, 
 };