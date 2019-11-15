
import React from 'react';

export default function Svg({...props}) {
    return <svg {...props} />
}

Svg.Path = function ({...props}) {
    return <path {...props} />
};

Svg.G = function ({...props}) {
    return <g {...props} />
};

Svg.Polygon = function ({...props}) {
    return <polygon {...props} />
};
