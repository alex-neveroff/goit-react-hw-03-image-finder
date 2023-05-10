import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '34787043-b3a92aa7f6b31659862f07be8';
const BASE_URL = 'https://pixabay.com/api/';

const options = {
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const getImagesByName = async (query, page) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=${options.image_type}
      &orientation=${options.orientation}&per_page=${options.per_page}`
    );
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const getPerPage = () => {
  return options.per_page;
};
