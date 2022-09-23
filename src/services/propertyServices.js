import { constants } from "../utils/constants"
import { apiCall } from "./methods"

export const getAllPropertiesService = async() =>{
    return await apiCall(`${constants.BACKEND_URL}/api/v1/products/detail/808004835`,'GET')
}

