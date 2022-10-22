import axios from 'axios';

import { BASE_URL } from '@/constants/url';

const getPageCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/property?key=pageCount`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getPageCount;
