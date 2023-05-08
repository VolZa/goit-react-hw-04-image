import axios from 'axios';
const PIX_URL = 'https://pixabay.com/api/';
const PIX_KEY = '34570673-a928ca7849cd54fe4c6ccdb59';
// const PER_PAGE = 12;

export const fetchImages = async (searchWord, page, per_page) => {
   const params = {
      q: searchWord, 
      key: PIX_KEY,
      page,
      per_page: per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      // editors_choice: 'true'
   };

   // return fetch(`${PIX_URL}?${params}`);
  const response = await axios(PIX_URL, { params });
  return response.data;//.hits
//   return response.json();
};

fetchImages();