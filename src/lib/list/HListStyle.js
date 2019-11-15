
import React from 'react'

const Style = () => <style>{`
.h-list {
    display: flex;
    height: 100%;
    overflow-x: scroll;
}

.h-list > div {
    height: 100%;
}

@media (min-width: 768px) {
    .h-list {
        overflow-x: hidden;
    }
    .h-list > div {
        flex-grow: 1;
    }
}
`}</style>;

export default Style;