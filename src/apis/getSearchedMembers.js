import axios from 'axios';

const getSearchedMembers = async (query) => {
  try {
    const response = await axios.get(`http://52.78.53.206:8080/api/member/search?key=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSearchedMembers;
