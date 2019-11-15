
import React from 'react';
import N from 'react-native'
import PlaceholderView from '../theme/PlaceholderView';

export default function Image({source, placeholder, resizeMode, style}) {

    let Placeholder = placeholder;

    return source ? (
        <N.Image
            source={{uri: source}}
            resizeMode={resizeMode}
            style={style}
        />
    ) : (
        <Placeholder
            style={style}
        />
    );
};

Image.defaultProps = {
    style: {},
    placeholder: ({style}) => <PlaceholderView style={style} />,
};

