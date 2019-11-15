
import React from 'react';

const NavContext = React.createContext({
    getPathname: () => null,
    getQuery: () => null,
    events: {},
    push: () => null,
    replace: () => null,
    back: () => null,
});

export default NavContext;
