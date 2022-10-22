//importing react and dropZone
import React from "react";
import { useDropzone } from "react-dropzone";
import Button from "../../common/button";
//importing styles
import styles from "./styles.module.css";

//dropzone component
function Dropzone({ open, onDrop, accept }) {
    const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
        useDropzone({ accept:"image/*", onDrop, maxFiles:5,maxSize:3145728 });


    return (
        <div {...getRootProps({ className: styles.dropzone })}>
            <input className="input-zone" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                    <p className="dropzone-content">
                        Release to drop the files here
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Drag’n’drop some files here, or click to select files (Max 5 file)
                    </p>
                )}
                <Button onClick={open} className="btn">
                    Click here to select files
                </Button>
            </div>
        </div>
    );
}

export default Dropzone;
