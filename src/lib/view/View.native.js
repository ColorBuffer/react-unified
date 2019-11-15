
import React from 'react'
import N from 'react-native'

const View = React.forwardRef(
    function({style, ...props}, ref) {
        return (
            <N.View
                ref={ref}
                style={{
                    ...style,
                }}
                {...props}
            />
        )
    }
);

export default View;

View.defaultProps = {
    style: {},
};
