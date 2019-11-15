
import React from 'react';

const FontContext = React.createContext({
    fontFamily: undefined,
    fontSize:   undefined,
    fontWeight: undefined,
    color:      undefined,
    lineHeight: undefined,
});

export default FontContext;
