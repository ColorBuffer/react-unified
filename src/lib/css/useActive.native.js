
import React from 'react';

export default function useActive(ref) {

    const [value, setValue] = React.useState(false);

    return value;
}
