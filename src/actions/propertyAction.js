import { getAllPropertiesService } from "../services/propertyServices";
import { types } from "./actionTypes";

export const getAllProperties = () => async dispatch => {
    let properties = await getAllPropertiesService();
    dispatch({
     type: types.GET_ALL_PROPERTIES,
     payload: properties.data
    })
    return { error: false, errorData: null, responseData: null };
   }