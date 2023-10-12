import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1'; 

export const listMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};

export const getMovie = async (id: any) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  }
};
