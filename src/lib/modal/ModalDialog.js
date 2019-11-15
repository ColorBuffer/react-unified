
import React from 'react';

export default function ModalDialog({children}) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
            onClick={e => e.stopPropagation()}
            children={children}
        />
    );
};
