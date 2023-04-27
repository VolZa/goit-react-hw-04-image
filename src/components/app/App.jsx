import { Component } from 'react';
import { Layout } from 'components/layout/Layout';
import {Searchbar} from 'components/searchbar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {getSearch} from 'api';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

export class App extends Component  {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    isLoading: false, // чи відбувається завантаження
    error: null,
    isShowModal: false,
    isEmpty: false, // чи є результати пошуку порожніми
  }

  componentDidUpdate(_, PrevState) {
    if (PrevState.search!== this.state.search ||
        PrevState.page!== this.state.page)  
    {
      this.getImages(this.state.search, this.state.page);
    }
  }

  getImages = (search, page) => {   
    this.setState({ isLoading: true });//індикатор завантаження

    getSearch(search, page)
      .then(response => response.json())
        .then(data => {
          this.setState({ images: data.hits, total: data.totalHits, isLoading: false, isEmpty: data.totalHits === 0 });
        })        
    .catch(error => {
        this.setState({ isLoading: false, error: error.message, images: [], total: 0, isEmpty: false });
      });
  }

  clickLoadMore = () => {
    this.setState(PrevState => ({
      page: PrevState.page + 1, // збільшуємо номер сторінки на +1
    }));
  };

  openModal = (largeImageURL, alt) => {
    this.setState(({ isShowModal }) => {
      return { isShowModal: !isShowModal, largeImageURL, alt };
    });
  };

  closeModal = () => {
    this.setState(({isShowModal}) => {
      return { isShowModal: !isShowModal };
    });
  };

  // keyWordSearch - тут так назвав те що прийшло пропсом з компонента Searchbar = (propSearch)=> {...
  handleSearchBarForm = (search) => {
    this.setState({
      search,
      images:[],
      page: 1,
      total: 1,
      isLoading: false,
      error: null,
      isEmpty: false,});
  }
  render() {  
    const { images, page, total, isLoading, error, isEmpty } = this.state;
    return (
      <Layout>

        {/* serchTheme -пропс - передає посилання на стрілочну (щоб був this функцію */}
        <Searchbar keyWordSearch={this.handleSearchBarForm} />
        {error && (
          <h2 style={{ textAlign: 'center' }}>
            Щось пішло не так: ({error})!
          </h2>
        )}
        <ImageGallery togleModal={this.openModal} images={images} />
        {isLoading && <Loader/>} {/*Відображається лоадер */}
        {isEmpty && (
          <h2 style={{ textAlign: 'center' }}>
            На жаль таких зображень ще нема...
          </h2>
        )}  
         {total / 12 > page && <Button clickLoad={this.clickLoadMore} />}
        {/* Компонент для спливаючих повідомлень з бібліотеки 'react-hot-toast'*/}
        <Toaster
          toastOptions={{
            duration: 1500,
          }}
        />
      </Layout>
    );
  };
}

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}