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
    per_page: 12,
    totalPages: 0,
    isLoading: false, // чи відбувається завантаження
    error: null,
  }
  

  componentDidUpdate(_, PrevState) {
    const { search, page, per_page } = this.state;
    if (PrevState.search!== search || PrevState.page!== page) {
      this.fetchGalary(search, page, per_page);}
  };

  
//=========================================================
  fetchGalary = async (search, page, per_page) => {  
    try { 
      this.setState({ isLoading: true });
      //галерея завантаження
      const images = await API.fetchImages(search, page, per_page);
      this.setState(prevState => ({ arrImages: [...prevState.arrImages, ...images]}))
      this.setState({ isLoading: false });//індикатор завантаження
    } 
    catch (error) { console.log(error); 
      this.setState({ isLoading: false });//індикатор завантаження
    } 
  };
  //================================================

  searcWord = ({photoSearch}) => {
    if (photoSearch.trim()) { 
      this.setState({
        arrImages: [],
        search: photoSearch,
        page: 1,
        totalPages: 0,
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
    // const buttonVisible = isHits && page < totalPages && ! loading;

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

