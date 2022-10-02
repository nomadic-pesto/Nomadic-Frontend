const axios = require("axios").default;

export const apiCall = async (url, method, headers = {}, data = {}) => {
    try {
        const response = await axios({
            method,
            url,
            headers,
            data,
        });
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 201) {
            return response.data;
        } else if (response.status === 204) {
            return response.data;
        } else {
            console.log("No status")
            return response.data;
        }
    } catch (error) {
        if(error.response.data){
            return error.response.data;
        }
        else{
            return error;
        }
        
    }
};
