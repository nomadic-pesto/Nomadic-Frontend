import { constants } from "../utils/constants"
import { apiCall } from "./methods"

const serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        if(obj[p]!=''){
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        
      }
    return str.join("&");
  }
  


export const getAllPropertiesService = async(skip,limit,filters) =>{
    const serializedFilter = serialize(filters);
    return await apiCall(`${constants.BACKEND_URL}/v1/rental?page=${skip}&limit=${limit}&${serializedFilter}`,'GET',{})
}

export const getSearchPropertiesService = async(skip,limit,filters) =>{
    const filter = {data:filters.search,...filters}
    const serializedFilter = serialize(filter);
    return await apiCall(`${constants.BACKEND_URL}/v1/rental/search?page=${skip}&limit=${limit}&${serializedFilter}`,'GET',{})
}

export const getPropertyByIdService = async(id) =>{
    return await apiCall(`${constants.BACKEND_URL}/v1/rental/${id}`,'GET',{})
}

export const getBookingsService = async(id) =>{
  return await apiCall(`${constants.BACKEND_URL}/v1/booking/getAllBookingUser/${id}`,'GET',{})
}

export const getBookingsServiceAdmin = async(id) =>{
  return await apiCall(`${constants.BACKEND_URL}/v1/booking/getAllBookingAdmin/${id}`,'GET',{})
}

export const getPropertiesService = async(id) =>{
  return await apiCall(`${constants.BACKEND_URL}/v1/rental/owner/${id}`,'GET',{})
}

export const getWishlistService = async(id) =>{
  return await apiCall(`${constants.BACKEND_URL}/v1/wishlist/getWishlistData/${id}`,'GET',{})
}

export const removeWishlistService = async(id) =>{
  return await apiCall(`${constants.BACKEND_URL}/v1/wishlist/deleteWishlist/${id}`,'DELETE',{})
}

export const cancelBookingsService = async(id) =>{
  return await apiCall(`${constants.BACKEND_URL}/v1/booking/cancelBooking/${id}`,'PATCH',{},{"isCancelled": true})
}




