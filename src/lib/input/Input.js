
import React from 'react';
import TextArea from 'react-textarea-autosize';
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

        if (multiLine) {

            return (
                <div style={{display: 'flex'}}>
                <TextArea
                    useCacheForDOMMeasurements
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={onFocus}
                    onChange={e => {
                        onValue && onValue(e.target.value)
                    }}
                    minRows={minLines}
                    style={{
                        fontFamily: fontCtx.fontFamily,
                        fontSize:   fontCtx.fontSize,
                        fontWeight: fontCtx.fontWeight,
                        color:      fontCtx.color,
                        lineHeight: fontCtx.lineHeight,

                        resize: 'none',
                        // To prevent TextArea show horizontal zero scroll pan when is not focused.
                        overflowX: 'hidden',
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        ...style,
                    }}
                />
                </div>
            )
        }
        return (
            <input
                ref={ref}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                type={keyboard}
                value={value}
                onChange={(e) => {
                    onValue && onValue(e.target.value);
                }}
                placeholder={placeholder}
                style={{
                    fontFamily: fontCtx.fontFamily,
                    fontSize:   fontCtx.fontSize,
                    fontWeight: fontCtx.fontWeight,
                    color:      fontCtx.color,
                    lineHeight: fontCtx.lineHeight,

                    outline: 'none',
                    boxSizing: 'border-box',
                    ...style
                }}
                formNoValidate
            />
        );
});

export default Input;

Input.Keyboard = {
    TEXT: 'text',
    NUMBER: 'number',
    TEL: 'tel',
    EMAIL: 'email',
};

Input.defaultProps = {
    keyboard: Input.Keyboard.TEXT,
    style: {},
    autoComplete: 'off',
};
