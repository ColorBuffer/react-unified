
import React from 'react';

const Touch = React.forwardRef(({onPress, style, children}, ref) => (
    <div
        ref={ref}
        onClick={onPress}
        style={style}
    >
        {children}
    </div>
));

export default Touch;
