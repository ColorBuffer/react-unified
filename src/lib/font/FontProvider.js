
import React from 'react';

import FontContext from './FontContext';

export default function FontProvider({value, children}) {
    const ctx = React.useContext(FontContext);

    return (
        <FontContext.Provider value={{...ctx, ...value}}>
            {children}
        </FontContext.Provider>
    )
};
