import { constants } from "../utils/constants"
import { apiCall } from "./methods"

export const getAllPropertiesService = async(skip,limit,filters) =>{
    return await apiCall(`${constants.BACKEND_URL}/v1/property/all`,'POST',{},{skip,limit,...filters})
}

