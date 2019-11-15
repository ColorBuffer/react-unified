
import React from 'react';

const ScrollView = React.forwardRef(
    function ({style, horizontal, ...props}, ref) {
    
        style = {
            width: '100%',
            height: '100%',
            ...style,
            [horizontal ? 'overflowX' : 'overflowY']: 'scroll',
        };

        return (
            <div
                ref={ref}
                style={style}
                {...props}
            />
        )
    }
);

export default ScrollView;

ScrollView.defaultProps = {
    style: {},
};
