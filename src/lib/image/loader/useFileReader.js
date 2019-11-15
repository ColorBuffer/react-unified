
import React from 'react';

export default function useFileReader(from, readAs = 'readAsDataURL') {

    // data: contains loaded image url
    const [data, setData] = React.useState(false);

    // on url prop changed
    React.useEffect(() => {

        // reset
        setData(false);

        // prevent invalid url
        if (!from) return;

        // allow access to loaded url.
        const onLoad = (event) => setData(event.target.result);

        // try to load image in background
        const reader = new FileReader();
        reader.addEventListener('load', onLoad);
        reader[readAs](from);

        // prevent old url loaded to be set as current.
        return () => reader.removeEventListener('load', onLoad);

    }, [from, readAs]);

    // pass url prop when was loaded
    return data;
}

useFileReader.AS_ARRAY_BUFFER  = 'readAsArrayBuffer';
useFileReader.AS_BINARY_STRING = 'readAsBinaryString';
useFileReader.AS_DATA_URL      = 'readAsDataURL';
useFileReader.AS_TEXT          = 'readAsText';
