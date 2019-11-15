
import React from 'react';

export default function useActive(ref) {

    const [value, setValue] = React.useState(false);

    const h1 = () => setValue(true);
    const h2 = () => setValue(false);

    React.useEffect(
        () => {
            const node = ref.current;

            if (!node) {
                return;
            }

            node.addEventListener('activate', h1);
            node.addEventListener('deactivate', h2);

            return () => {
                node.removeEventListener('activate', h1);
                node.removeEventListener('deactivate', h2);
            };
        },
        [ref.current],
    );

    return value;
}
