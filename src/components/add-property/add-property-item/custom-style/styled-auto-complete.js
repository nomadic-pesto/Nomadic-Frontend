import { Autocomplete } from "@mui/material";
import { styled } from '@mui/material/styles';

//styling AutoComplete field

const StyledAutoComplete = styled(Autocomplete)`
        
    
        width : 300px;
   
    
   &  .MuiAutocomplete-inputRoot{
        border-radius: 20px;
        padding : 0px 0px 0px 20px;
        font-weight: 500 !important;
        border-color : white !important;
     }
   & .MuiAutocomplete-root:hover{
      border-color : black;

   }
   & .MuiOutlinedInput-notchedOutline{

      border : 2px solid #3C88F1 !important;
   }
   & .MuiOutlinedInput-root {
      color : #3C88F1 !important;
      background-color : white !important;
   }
  
    
  }
`;

export default StyledAutoComplete;