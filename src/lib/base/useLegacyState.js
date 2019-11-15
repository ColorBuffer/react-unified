
import React from "react";

export default function useLegacyState(initial) {
    const [state, setState] = React.useState(initial);
    function set(newState) {
        setState({ ...state, ...newState});
    }
    return [state, set];
}