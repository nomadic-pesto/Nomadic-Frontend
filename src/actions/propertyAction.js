import { getAllPropertiesService, getPropertyByIdService, getSearchPropertiesService } from "../services/propertyServices";
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
