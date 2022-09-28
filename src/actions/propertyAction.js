<<<<<<< HEAD
import { getAllPropertiesService } from "../services/propertyServices";
import { types } from "./actionTypes";

export const getAllProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    let properties = await getAllPropertiesService(skip, limit, filters);
    dispatch({
      type: types.GET_ALL_PROPERTIES,
      payload: properties.data,
      skip,
      limit,
      loadMore: properties.data.length > 0 ? true : false,
      ...filters,
    });
    return { error: false, errorData: null, responseData: null };
  };

export const getMoreProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    console.log(filters)
    let properties = await getAllPropertiesService(skip, limit, filters);
    dispatch({
      type: types.GET_MORE_PROPERTIES,
      payload: properties.data,
      skip,
      limit,
      loadMore: properties.data.length > 0 ? true : false,
    });
    return { error: false, errorData: null, responseData: null };
  };
=======
import { getAllPropertiesService } from "../services/propertyServices";
import { types } from "./actionTypes";

export const getAllProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    let properties = await getAllPropertiesService(skip, limit, filters);
    dispatch({
      type: types.GET_ALL_PROPERTIES,
      payload: properties.data,
      skip,
      limit,
      loadMore: properties.data.length > 0 ? true : false,
      ...filters,
    });
    return { error: false, errorData: null, responseData: null };
  };

export const getMoreProperties =
  (skip, limit, filters = {}) =>
  async (dispatch) => {
    console.log(filters)
    let properties = await getAllPropertiesService(skip, limit, filters);
    dispatch({
      type: types.GET_MORE_PROPERTIES,
      payload: properties.data,
      skip,
      limit,
      loadMore: properties.data.length > 0 ? true : false,
    });
    return { error: false, errorData: null, responseData: null };
  };
>>>>>>> 176447a (login integration done)
