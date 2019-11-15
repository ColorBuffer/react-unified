
import React from "react";
import Touch from '../touch/Touch.native';
import useRouter from './useRouter.native';

export default function Link({href, as, onClick, style, children}) {

    const router = useRouter();

    return (
        <Touch
            onPress={() => {
                router.push(href);
            }}
            style={style}
        >
            {children}
        </Touch>
    );
}
