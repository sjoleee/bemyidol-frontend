import axios from 'axios';

import { BASE_URL } from '@/constants/url';

const getMembers = async (query: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/member/page?pageNo=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getMembers;
