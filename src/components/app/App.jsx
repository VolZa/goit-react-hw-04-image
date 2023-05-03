// import React from 'react';

import { Component } from 'react';
import { Layout } from 'components/layout/Layout';
import {SearchBar} from 'components/searchbar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import * as API from 'services/api';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

export class App extends Component  {
  state = {
    search: '',
    arrImages: [],
    page: 1,
    isLoading: false, // чи відбувається завантаження
    error: null,
  }

  componentDidUpdate(_, PrevState) {
    const { search, page } = this.state;
    if (PrevState.search!== search || PrevState.page!== page) {
      this.fetchImages(search, page);}
  };

  fetchImages = async (search, page) => {  
    try {
      this.setState({ isLoading: true });
      //галерея завантаження
      const images = await API.fetchImages(search, page);
      this.setState(prevState => ({ arrImages: [...prevState.arrImages, ...images]}))
    } 
    catch (error) { console.log(error); 
    } 
    finally {
      this.setState({ isLoading: false });//індикатор завантаження
    }
  };

  searcWord = ({photoSearch}) => {
    if (photoSearch.trim()) { 
      this.setState({
        arrImages: [],
        search: photoSearch,
        page: 1,
        isLoading: false, // чи відбувається завантаження
      })
    }
  };

  loadNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: false, // чи відбувається завантаження
    }))
  };

  render() {  
    const { arrImages, page,  isLoading, error } = this.state; //total, isEmpty
    return (
      <Layout>
        <SearchBar onSubmit={this.searcWord}>
          {error && (
            <h2 style={{ textAlign: 'center' }}>
              Щось пішло не так: ({error})!
            </h2>
          )}
        </SearchBar>
        {isLoading ? <Loader /> : <ImageGallery items={arrImages} />} 

        {Math.ceil(arrImages?.length / 12) >= page && !isLoading && (
          <Button onClick={this.loadNextPage} />
        )}

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



        // {/* <ImageGallery togleModal={this.openModal} images={images} />
        // {isLoading && <Loader/>} Відображається лоадер */}
        // {/* {isEmpty && (
        //   <h2 style={{ textAlign: 'center' }}>
        //     На жаль таких зображень ще нема...
        //   </h2>
        // )}  
        //  {total / 12 > page && <Button clickLoad={this.clickLoadMore} />} */}

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}