import { constants } from "../utils/constants"
import { apiCall } from "./methods"

export const loginUserService = async(email,password) =>{
    return await apiCall(`${constants.BACKEND_URL}/v1/auth/login`,'POST',{},{email,password})
}

