
import React from 'react';
import animationStyles from '../animation/animationStyles'

const View = React.forwardRef(
    function ({style, animation, ...props}, ref) {

        if (animation) {
            style = {
                ...style,
                ...animationStyles(animation),
            };
        }
    
        return (
            <div
                ref={ref}
                style={style}
                {...props}
            />
        )
    }
);

export default View;

View.defaultProps = {
    style: {},
};
