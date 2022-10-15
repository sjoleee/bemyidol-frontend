import axios from 'axios';

import { BASE_URL } from '@/constants/url';

const postDebutMembers = async (data: number[]) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${BASE_URL}/api/member`,
      data: data,
      headers: { contentType: 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postDebutMembers;
