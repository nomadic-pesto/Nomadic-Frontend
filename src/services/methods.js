const axios = require('axios').default;

export const apiCall = async (url, method, headers = {}, data = {}) => {
  try {
    const response = await axios({
      method,
      url,
      headers,
      data,
    });
    if(response.status===200){
        return response.data
    }
    else{
        return response.data
    }
    
  } catch (error) {
    return error;
  }
};
