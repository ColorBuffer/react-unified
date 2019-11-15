
import React from "react";

function getDimensions() {
    const w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    return {width, height};
}

export default function useDimensions() {

    let initial = { width: null, height: null };

    if (typeof window !== 'undefined') {
        initial = getDimensions();
    }

    const [dimensions, setDimensions] = React.useState(initial);

    React.useEffect(() => {

        const updateDimensions = () => setDimensions(getDimensions());

        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return dimensions;
}