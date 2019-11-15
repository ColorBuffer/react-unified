
import React from 'react';

export default function useFocus(ref) {

    const [value, setValue] = React.useState(false);

    const h1 = () => setValue(true);
    const h2 = () => setValue(false);

    React.useEffect(
        () => {
            const node = ref.current;

            if (!node) {
                return;
            }

            node.addEventListener('focus', h1);
            node.addEventListener('blur', h2);

            return () => {
                node.removeEventListener('focus', h1);
                node.removeEventListener('blur', h2);
            };
        },
        [ref.current],
    );

    return value;
}
