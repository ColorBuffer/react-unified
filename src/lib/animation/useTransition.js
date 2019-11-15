
import React from 'react';

export default function useTransition({input, output, duration}) {
    let transition = duration + 's';
    let value = input ? output[0] : output[1];
    return {value, transition};
};
