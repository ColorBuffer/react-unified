
import React from "react";
import L from 'next/link';

export default function Link({href, as, onClick, style, children}) {

    return (
        <L href={href} as={as}>
            <a onClick={onClick} style={style}>
                {children}
            </a>
        </L>
    );
}
