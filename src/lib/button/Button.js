
import React from 'react';



const Button = React.forwardRef(
    ({onPress, style, type, children}, ref) => {

        return (
            <button
                ref={ref}
                onClick={onPress}
                style={{
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    border: 'none',
                    boxShadow: 'none',
                    ...style,
                }}
                type={type}
            >
                {children}
            </button>
        );
    }
);

export default Button;
