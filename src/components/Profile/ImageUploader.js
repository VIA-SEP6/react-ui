import React from 'react';
import { Button } from "@material-ui/core";

export default function ImageUploader(props) {
    const hiddenFileInput = React.useRef(null);


    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    return (
        <>
            <Button color={"primary"} onClick={handleClick}>
                Upload
            </Button>
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    )
}