
import React from 'react';
import {View} from 'react-unified';
import Theme from "./Theme";

export default function PlaceholderView({style}) {

    const themeCtx = React.useContext(Theme);

    return (
        <View
            style={{
                ...style,
                backgroundColor: themeCtx.placeholderViewColor,
            }}
        />
    );
}

PlaceholderView.defaultProps = {
    style: {},
};
