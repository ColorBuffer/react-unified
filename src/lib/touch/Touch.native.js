
import React from 'react';
import N from 'react-native';

const Touch = React.forwardRef(
    function ({onPress, style, children}, ref) {

        const T = N.TouchableWithoutFeedback;

        return (
            <T
                onPress={onPress}
            >
                <N.View style={style} ref={ref}>
                    {children}
                </N.View>
            </T>
        );
    }
);

export default Touch;
