const API_KEY = '34570673-a928ca7849cd54fe4c6ccdb59';
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

// Функція для отримання пошуку
export const getSearch = (searchText, page) => {

  // Параметри для запиту
  const params = new URLSearchParams({
    q: searchText,
    key: API_KEY,
    page: page,
    per_page: PICS_ON_PAGE,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  return fetch(`${BASE_URL}?${params}`);
};
