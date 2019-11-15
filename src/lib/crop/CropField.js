
import React from 'react';
import ReactCrop from 'react-image-crop';
import RepositoryCompiledStyle from './RepositoryCompiledStyle';

export default function CropField(props) {    

    return (
        <React.Fragment>
            <RepositoryCompiledStyle />
            <style>
                {`
                .ReactCrop__crop-selection {
                    border-radius: 50%;
                }
                `}
            </style>
            <ReactCrop
                src={props.dataUrl}
                crop={props.crop}
                keepSelection={true}
                minHeight={props.minHeight}
                onImageLoaded={(image) => props.setImage(image)}
                onChange={(crop) => props.setCrop(crop)}
            />
        </React.Fragment>
    );

}
