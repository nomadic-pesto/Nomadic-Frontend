import StyledCustomPopper  from "../custom-style/styled-popper";
import React from "react"


const CustomPopper = (props)=>{


    return <>
        <StyledCustomPopper  open={true} {...props} placement="bottom" />
    
    </>



}


export default CustomPopper;