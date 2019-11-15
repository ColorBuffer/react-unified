
import React from 'react'
import N from 'react-native'
import FontContext from "../font/FontContext";

export default function Text({style, oneLine, ...props}) {

    const fontCtx = React.useContext(FontContext);

    return (
        <N.Text
            numberOfLines={oneLine ? 1 : undefined}
            style={{
                fontFamily: fontCtx.fontFamily,
                fontSize:   fontCtx.fontSize,
                fontWeight: fontCtx.fontWeight,
                color:      fontCtx.color,
                lineHeight: fontCtx.lineHeight,
                
                ...style,
            }}
            {...props}
        />
    )
};

Text.defaultProps = {
    style: {},
};
