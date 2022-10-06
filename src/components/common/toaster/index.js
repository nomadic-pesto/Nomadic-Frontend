import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//importing styles
import styles from "./styles.module.css";

const Toast = (props) => {
    
  return (
    <>
      <ToastContainer 
      autoClose={2500}
      hideProgressBar
      />
    </>
  );
};

export default Toast;
