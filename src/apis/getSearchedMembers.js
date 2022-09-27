import axios from 'axios';

import { BASE_URL } from '@/constants/url';

const getSearchedMembers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/member/search?key=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSearchedMembers;
