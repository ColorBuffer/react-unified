
import React from 'react';

export default function NoUserSelect({children, style, ...props}) {
    return (
        <div
            {...props}
            style={{
                userSelect: 'none',
                ...style,
            }}
        >{children}</div>
    )
};

NoUserSelect.defaultProps = {
    style: {},
}