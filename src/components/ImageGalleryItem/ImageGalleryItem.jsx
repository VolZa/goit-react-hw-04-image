import PropTypes from 'prop-types';
import { GaleryImage, GaleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';


export class ImageGalleryItem extends Component {
// ({images, togleModal})
  state = {
   image: null,//false
   isModal: false,
  }

  toggleModal = () => {
    this.setState(({isModal}) => ({ isModal: !isModal }));
    console.log("toggleModal отримав isModal змінив на : "+this.state.isModal )
  }
  setImg = () => {
   // console.log("В ImageGaleryItem спрацював setImg")
   // console.log(this.props.img.largeImageURL)
   this.setState({image: this.props.img.largeImageURL})
  }

   render () {
      const { largeImageURL, webformatURL, tags } = this.props.image;
      // const { item } = this.props;
      const { isModal } = this.state;
      // console.log("ImageGalleryItem render :")
      // console.log(this.props)
      return (
         <> 
            <GaleryItem onClick={() => this.toggleModal(largeImageURL)}>
               <GaleryImage src={webformatURL} alt={tags} width="320" />
            </GaleryItem>
            {isModal && (
               <Modal onClose={this.toggleModal}>
                  <GaleryImage src={largeImageURL} alt={tags} />
               </Modal>
            )}
  
         </>  
      )
   }

}

ImageGalleryItem.propTypes = {
   image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
   // togleModal: PropTypes.func.isRequired 
}

// {images.map(el => (
//    <GaleryItem key={el.id} onClick={e => {togleModal(el.largeImageURL, el.tags)}} >
//       <GaleryImage loading="lazy" 
//          src={el.webformatURL} alt={el.tags} 
//       />
//    </GaleryItem>
// ))}