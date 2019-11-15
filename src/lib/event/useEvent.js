
import React from 'react';

// export default function useEvent(ref, eventName, handler) {

//     React.useEffect(
//         () => {
//             const node = ref.current;

//             if (!node) {
//                 return;
//             }

//             node.addEventListener(eventName, handler);

//             return () => node.removeEventListener(eventName, handler);
//         },
//         [ref.current],
//     );

//     return null;
// }

function defaultFilter() {
    return true;
}

export default function useEvent(ref, eventName, options, filter = defaultFilter) {
    const [event, setEvent] = React.useState(null);
    React.useEffect(
        () => {
            
            // this effect should be SSR safe
            if (!ref) return;

            // handler function
            const handler = (event) => filter(event) ? setEvent(event) : null;

            // bind and unbind event
            ref.addEventListener(eventName, handler, options);
            return () => ref.removeEventListener(eventName, handler);
        },
        [eventName],
    );
    return event;
}