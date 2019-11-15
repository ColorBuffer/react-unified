
import React from 'react';
import {View} from 'react-unified';

export default function Center({children, direction, style, ...props}) {
    return (
        <View
            style={{
                flexDirection: direction === 'vertical' ? 'column' : 'row',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...style,
            }}
            {...props}
        >
            {children}
        </View>
    );
}

Center.defaultProps = {
    style: {},
};
