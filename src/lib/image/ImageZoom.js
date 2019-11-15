
import React from 'react'
import IM from 'react-medium-image-zoom';

export default function ImageZoom({source, alt, zoomSource, zoomAlt, style}) {

    return (
        <IM
            image={{
                src: source,
                alt: alt,
            }}
            zoomImage={{
                src: zoomSource,
                alt: zoomAlt
            }}
            style={style}
        />
    )
}
