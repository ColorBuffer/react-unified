
import React from 'react';
import useLoader from './loader/useLoader';
import PlaceholderView from '../theme/PlaceholderView';
import Img from "./Img";

export default function Image({source, placeholder, resizeMode, style}) {

    let src = useLoader(source);

    return (
        <Img
            src={src}
            placeholder={placeholder}
            resizeMode={resizeMode}
            style={style}
        />
    )
};

Image.defaultProps = {
    style: {},
    placeholder: ({style}) => <PlaceholderView style={style} />,
};

