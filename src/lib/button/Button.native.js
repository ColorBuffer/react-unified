
import React from 'react';
import N from "react-native";
import FormContext from '../form/FormContext'

const Button = React.forwardRef(
    ({onPress, style, type, children}, ref) => {

        const formCtx = React.useContext(FormContext);

        return (
            <N.TouchableWithoutFeedback
                onPress={() => {
                    onPress && onPress();
                    if (type === 'submit') {
                        formCtx.onSubmitFn();
                    }
                }}
            >
                <N.View style={style} ref={ref}>
                    {children}
                </N.View>
            </N.TouchableWithoutFeedback>
        );
    }
);

export default Button;
