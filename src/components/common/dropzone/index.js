import { Grid } from "@mui/material";
import { useDropzone } from 'react-dropzone'
import React, { useEffect, useState } from 'react';

//importing styles

import styles from "../dropzone/style.module.css";


//importing close icons
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';




const CustomReactDropZone = (props) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const handlechange = (event) =>{

        // setFiles(files.s(event.name));
        console.log(files);
        
    


    }

    const thumbs = files.map(file => (
        <div  key={file.name}>
            <div >
                <div className={styles["close2"]} onClick={handlechange}>
                <CancelOutlinedIcon className={styles["close"]}/>
                </div>
                <img
                    src={file.preview}
                    
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
                


            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return <>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center" justifyContent="center" alignContent="space-evenly">
            <section>
                <div {...getRootProps({ className: styles["dropzone"] })}>
                    <input {...getInputProps()} />
                    <p className = {styles["upload-tag"]}>Upload Images</p>
                    <p className = {styles["upload-tag-2"]}>(Max 6 image allowed)</p>
                </div>
                <aside className = {styles["preview"]}>
                    {thumbs}
                </aside>
            </section>
        </Grid>



    </>





}

export default CustomReactDropZone;