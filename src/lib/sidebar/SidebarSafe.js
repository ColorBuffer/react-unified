
import React from 'react';
import SidebarContext from './SidebarContext';
import {useDimensions, View} from 'react-unified'

export default function SidebarSafe({style, children}) {

    const ctx = React.useContext(SidebarContext);

    const dimensions = useDimensions();
    const minimal = dimensions.width < 768;

    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', ...style}}>
            <View
                style={{
                    width: minimal ? '100%' : (dimensions.width - ctx),
                    ...style,
                }}
            >{children}</View>
        </View>
    );
};
