import { types } from "../actions/actionTypes";
import { constants } from "../utils/constants";

export default (
  state = {
    properties: [],
    destination: "",
    subDestination: "",
    sortBy: "",
    sortOrder: "",
    skip:0,
    limit:constants.PRODUCT_LIMIT,
    loadMore:true,
    search:""
  },
  action
) => {
  switch (action.type) {
    case types.GET_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload.properties ? action.payload.properties : [],
        destination: action.destination ? action.destination : "",
        subDestination: action.subDestination ? action.subDestination : "",
        search: action.search ? action.search : "",
        sortBy: action.sortBy ? action.sortBy : "",
        sortOrder: action.sortOrder ? action.sortOrder : "",
        skip: action.skip ? action.skip : 0,
        limit: action.limit ? action.limit : constants.PRODUCT_LIMIT,
        loadMore: action.loadMore
      };
      case types.GET_MORE_PROPERTIES:
        return {
          ...state,
          properties: [...state.properties , ...((action.payload.properties && action.payload.properties.length >0) ? (action.payload.properties) : [])],
          skip: action.skip ? action.skip : 0,
          limit: action.limit ? action.limit : constants.PRODUCT_LIMIT,
          loadMore: action.loadMore
        };
    default:
      return state;
  }
};
