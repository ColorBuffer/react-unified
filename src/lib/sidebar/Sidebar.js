
import React from 'react';
import {View} from 'react-unified';
import useTransition from '../animation/useTransition';
import SidebarContext from './SidebarContext';

export default function Sidebar({open, rtl, side, width, behavior, children}) {

    const contentDistance = useTransition({
        duration: .3,
        input: open,
        output: [width, 0],
    });

    const sideDistance = useTransition({
        duration: .3,
        input: open,
        output: [0, -width],
    });

    return (
        <SidebarContext.Provider value={width}>
            <View
                style={{
                    height: '100%',
                }}
            >
                <View
                    style={{
                        height: '100%',
                    }}
                    animation={{
                        ...(rtl ? {marginRight: contentDistance} : {marginLeft: contentDistance})
                    }}
                >
                    {children}
                </View>

                <View
                    style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        height: '100%',
                        width: width,
                    }}
                    animation={{
                        ...(rtl ? {right: sideDistance} : {left: sideDistance})
                    }}
                >
                    {side}
                </View>
            </View>
        </SidebarContext.Provider>
    );
};
