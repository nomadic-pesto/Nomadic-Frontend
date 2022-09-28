import React, { useState } from 'react';
import { connect } from "react-redux";

//importing styles
import styles from "./styles.module.css";

//importing images
import search from "../../../../public/images/search-icon.png";
import ButtonComponent from '../../button';

//importing other components
import { getAllProperties } from '../../../../actions/propertyAction';
import { constants } from '../../../../utils/constants';


const Search = ({getAllProperties}) => {

    const [searchInput, setSearchInput] = useState("");

    const setFilters = async (e) =>{
        e.preventDefault();
        await getAllProperties(0, constants.PRODUCT_LIMIT,{search:searchInput});
      }
    
  return (
    <form 
    className={styles['container']}
    onSubmit={setFilters}
    >
        <input 
        onChange={(e=>setSearchInput(e.target.value))}
        value={searchInput}
        />
        <ButtonComponent 
        type="submit"
        className={styles['round']}
        onClick={setFilters}
        >
        <img 
        src={search} 
        className={styles['search-icon']}
        />
        </ButtonComponent>
        
    </form>
  )
}

// export default ;

const mapStateToProps = (state) => ({
    propertyState: state.propertyReducer,
  });
  
  export default connect(mapStateToProps, {getAllProperties})(Search);