
import React from 'react'
import N from 'react-native'
import FontContext from "../font/FontContext";

const Input = React.forwardRef(
    function({
    value,
    onValue,
    placeholder,
    keyboard,
    autoComplete,
    autoFocus,
    style,
    multiLine,
    minLines,
    disabled,
    onFocus,
}, ref) {

    const fontCtx = React.useContext(FontContext);

    return (
        <N.TextInput
            ref={ref}
            spellCheck={false}
            autoCorrect={false}
            autoFocus={autoFocus}
            keyboardType={keyboard}
            value={value}
            multiline={multiLine}
            onFocus={onFocus}
            onChangeText={text => {
                onValue && onValue(text);
            }}
            placeholder={placeholder}
            style={{

                fontFamily: fontCtx.fontFamily,
                fontSize:   fontCtx.fontSize,
                fontWeight: fontCtx.fontWeight,
                color:      fontCtx.color,
                lineHeight: fontCtx.lineHeight,
                
                paddingHorizontal: 0,
                paddingVertical: 0,
                ...style
            }}
        />
    );
});

export default Input;

Input.Keyboard = {
    TEXT: 'default',
    NUMBER: 'number-pad', // or numeric
    TEL: 'phone-pad',
    EMAIL: 'email-address',
};

Input.defaultProps = {
    keyboard: Input.Keyboard.TEXT,
    style: {},
    autoComplete: 'off',
};
