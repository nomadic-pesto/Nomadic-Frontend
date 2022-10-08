import { cancelBookingsService, getAllPropertiesService, getBookingsService, getBookingsServiceAdmin, getPropertiesService, getPropertyByIdService, getSearchPropertiesService, getWishlistService, removeWishlistService } from "../services/propertyServices";
import { constants } from "../utils/constants";
import { types } from "./actionTypes";

export const getAllProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    let properties = await getAllPropertiesService(skip, limit, filters);
    // console.log(properties)
    if(properties.status === "success"){
      dispatch({
        type: types.GET_ALL_PROPERTIES,
        payload: properties.data,
        skip,
        limit,
        loadMore: properties.results >= constants.PRODUCT_LIMIT ? true : false,
        ...filters,
      });
      return properties;
    }
    
  };

  export const getSearchProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    let properties = await getAllPropertiesService(skip, limit, filters);
    // console.log(properties)
    if(properties.status === "success"){
      dispatch({
        type: types.GET_SEARCH_PROPERTIES,
        payload: properties.data,
        skip,
        limit,
        loadMore: properties.data.rentals >= constants.PRODUCT_LIMIT ? true : false,
        ...filters,
      });
      return properties;
    }
    
  };

export const getMoreProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    let properties = await getAllPropertiesService(skip, limit, filters);
    dispatch({
      type: types.GET_MORE_PROPERTIES,
      payload: properties.data,
      skip,
      limit,
      loadMore: properties.results >= constants.PRODUCT_LIMIT ? true : false,
    });
    return properties;
  };

  export const getPropertyById =
  (id) =>
  async (dispatch) => {
    let propertyDetails = await getPropertyByIdService(id);
    return propertyDetails;
  };

  export const getBookings =
  (id) =>
  async (dispatch) => {
    let getBookings = await getBookingsService(id);
    return getBookings;
  };

  export const getBookingsAdmin =
  (id) =>
  async (dispatch) => {
    let getBookings = await getBookingsServiceAdmin(id);
    return getBookings;
  };

  export const getProperties =
  (id) =>
  async (dispatch) => {
    let getBookings = await getPropertiesService(id);
    return getBookings;
  };


  export const getWishlist =
  (id) =>
  async (dispatch) => {
    let wishlist = await getWishlistService(id);
    return wishlist;
  };

  export const removeWishlist =
  (id) =>
  async (dispatch) => {
    let wishlist = await removeWishlistService(id);
    return wishlist;
  };

  export const cancelBookings =
  (id) =>
  async (dispatch) => {
    let cancelBookings = await cancelBookingsService(id);
    return cancelBookings;
  };


