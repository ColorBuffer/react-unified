
import React from 'react'
import N from 'react-native'

export default function StatusBar({backgroundColor, barStyle}) {

    return (
        <N.StatusBar
            backgroundColor={backgroundColor}
            barStyle={barStyle}
        />
    )
}
