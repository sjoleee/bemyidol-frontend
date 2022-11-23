import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getMembers = async (query: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/member/page?pageNo=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPageCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/property?key=pageCount`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedMembers = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/member/search?key=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDebutMembers = async (data: number[]) => {
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
