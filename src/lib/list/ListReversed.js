
import React from "react";
import {View} from 'react-unified'
import List from "./List";

export default function ListReversed({renderItem, ...props}) {

    const ref = React.useRef(null);
    const refOut = React.useRef(null);

    function mouseWeel(e) {
        e.preventDefault();

        // TODO make it smoother
        refOut.current.scrollTop += -e.deltaY;
    }

    React.useEffect(() => {
        document.addEventListener('mousewheel', mouseWeel, { passive: false });
        return () => document.removeEventListener('mousewheel', mouseWeel);
    }, []);

    return (
        <View style={{height: '100%', transform: 'scaleY(-1)'}}>
            <List
                outerRef={refOut}
                ref={ref}
                {...props}
                renderItem={(item, index) => (
                    <div style={{transform: 'scaleY(-1)'}}>
                        {renderItem(item, index)}
                    </div>
                )}
            />
        </View>
    );
}
