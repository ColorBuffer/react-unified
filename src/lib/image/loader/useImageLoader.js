
import React from 'react';

const loaded = {};

function alreadyLoaded(from) {
    return from && loaded[from];
}

export default function useImageLoader(from) {

    const defaultData = alreadyLoaded(from) ? from : false;

    // data: contains loaded image url
    const [data, setData] = React.useState(defaultData);

    // on url prop changed
    React.useEffect(() => {

        if (alreadyLoaded(from)) {
            return setData(from);
        }

        // reset
        setData(false);

        // prevent invalid url
        if (!from) return;

        // allow access to loaded url.
        const onLoad = () => {
            loaded[from] = from;
            setData(from);
        }

        // try to load image in background
        const img = new Image();
        img.src = from;
        img.addEventListener('load', onLoad);

        // prevent old url loaded to be set as current.
        return () => img.removeEventListener('load', onLoad);

    }, [from]);

    // pass url prop when was loaded
    return data;
}