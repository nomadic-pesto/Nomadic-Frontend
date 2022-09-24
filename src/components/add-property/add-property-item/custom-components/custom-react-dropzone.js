import { Grid } from "@mui/material";
import { useDropzone } from 'react-dropzone'
import React, { useEffect, useState } from 'react';
import styles from "../custom-style/styled.dropzone.css";





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

    const thumbs = files.map(file => (
        <div  key={file.name}>
            <div >
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
            <section className={styles["droparea"]}>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p className = {"upload-tag"}>Upload Images</p>
                    <p className = {"upload-tag-2"}>(Max 6 image allowed)</p>
                </div>
                <aside className = {"preview"}>
                    {thumbs}
                </aside>
            </section>
        </Grid>



    </>





}

export default CustomReactDropZone;