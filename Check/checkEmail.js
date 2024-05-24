import axios from 'axios';

const checkEmailExistence = async (email) => {
  // const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.status)
    const { data } = response;

    return data.status === 'Valid';
  } catch (error) {
    console.log('Error checking email existence:', error);
    return false;
  }

};

export default checkEmailExistence;
