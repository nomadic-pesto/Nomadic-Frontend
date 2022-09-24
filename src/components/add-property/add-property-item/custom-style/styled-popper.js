import { Popper } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react"


const StyledCustomPopper = styled(Popper)`

        width : 250px !important;
        background-color : grey !important;
        border-radius : 50px !important;
        & .MuiAutocomplete-listbox : {


        border: 50px !important;
        padding : 0px 0px 0px 20px !important;
        
        font-weight: 500 !important;





        }
}
`;


export default StyledCustomPopper;