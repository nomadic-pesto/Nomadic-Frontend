import { types } from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
     case types.GET_ALL_PROPERTIES:
      return {
       properties: action.payload
      }
     default:
      return state
    }
   }