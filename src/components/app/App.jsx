import { useState, useEffect } from 'react';
import { Layout } from 'components/layout/Layout';
import {SearchBar} from 'components/searchbar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import * as API from 'services/api';
import { Toaster, toast } from 'react-hot-toast';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

const PER_PAGE = 12;

export const App = () =>  {
  const [search, setSearch] = useState('');
  const [arrImages, setArrImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [condition, setCondition] = useState('passive');

  useEffect(()=> { 
    if (!search) return;

    const fetchGalary = async (search, page, PER_PAGE) => {
      setCondition('active');
      try {       
        setIsLoading(true);
        const dataImages = await API.fetchImages(search, page, PER_PAGE);
        if (dataImages.totalHits === 0) {
          setCondition('empty');}

        setArrImages(prev => [...prev,...dataImages.hits]);
        setTotalPages(dataImages.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGalary(search, page, PER_PAGE);
  }, [search, page, arrImages.totalHits]);

  //обробка рядка пошуку
  const searcWord = ({photoSearch}) => {
    if (photoSearch.trim()) {      
      setArrImages([]);
      setSearch( photoSearch);
      setPage(1);
      setTotalPages(0);
      setIsLoading (false);    
      setError(false);
      
    } else { toast.error("Enter a word to search for")}
  };

  const loadNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Layout>
      <SearchBar onSubmit={searcWord}>
        {error && (
          <h2 style={{ textAlign: 'center' }}>
            Щось пішло не так: ({error})!
          </h2>
        )}
      </SearchBar>
      {condition==='empty' && (
       <h2 style={{ textAlign: 'center' }}> There are no images for your request </h2> 
      )}

      {isLoading ? <Loader /> : <ImageGallery items={arrImages} />}

     
      {Math.ceil(arrImages?.length / 12) >= page && totalPages > arrImages?.length &&(
        <Button onClick={loadNextPage} />
      )}

      {/* Компонент для спливаючих повідомлень з бібліотеки 'react-hot-toast'*/}
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
    </Layout>
  );
}

//{isLoading && <Loader />}
// {arrImages?.length && (<ImageGallery items={arrImages} />)}