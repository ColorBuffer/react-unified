
import React from "react";
import N from 'react-native';

export default function useDimensionsNative(dim = 'window') {

    let initial = N.Dimensions.get(dim);

    const [dimensions, setDimensions] = React.useState(initial);

    React.useEffect(() => {

        const updateDimensions = (dims) => setDimensions(dims[dim]);

        N.Dimensions.addEventListener('change', updateDimensions);
        return () => N.Dimensions.removeEventListener('change', updateDimensions);
    }, []);

    return dimensions;
}
