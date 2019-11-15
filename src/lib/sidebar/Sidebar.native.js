
import React from 'react';


import SidebarContext from './SidebarContext';

export default function Sidebar({open, rtl, side, width, behavior, children}) {

    return (
        <SidebarContext.Provider value={width}>
            {children}
        </SidebarContext.Provider>
    );
};
