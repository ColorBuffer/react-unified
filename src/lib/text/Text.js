
import React from 'react';
import FontContext from "../font/FontContext";

const Text = ({children, textRole, oneLine, style}) => {
    const TR = textRole;

    const fontCtx = React.useContext(FontContext);

    if (oneLine) {
        style = {
            ...(style),
            display: "inline-block",
            width: "100%",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
        };
    }
    return (
        <TR
            style={{
                fontFamily: fontCtx.fontFamily,
                fontSize:   fontCtx.fontSize,
                fontWeight: fontCtx.fontWeight,
                color:      fontCtx.color,
                lineHeight: fontCtx.lineHeight,
                
                display: 'block',
                ...style,
            }}
            children={children}
        />
    );
};

Text.defaultProps = {
    textRole: 'p',
    style: {},
};

export default Text;
