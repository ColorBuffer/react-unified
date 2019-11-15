
# react unified
A library for unified ui in react.js

## Installation
Run the following command:

`npm i react-unified react-native-gesture-handler`

`react-native link react-native-gesture-handler`

## Examples

CSS example:

```jsx

// before -------------------------------------
import React from 'react';

function WebComponent() {

    return (
        <div id={'selector'}>
            <style>
                #selector {
                    background-color: white;
                }
                #selector:hover {
                    background-color: blue;
                }
                #selector:active {
                    background-color: red;
                }
                #selector:focus {
                    background-color: yellow;
                }
            </style>
        </div>
    );
}

// after ++++++++++++++++++++++++++++++++++
import React, {useRef} from 'react';
import {View, useHover, useActive, useFocus} from 'react-unified';

function UnifiedComponent() {

    const selectorRef = useRef(null);

    const hover  = useHover(selectorRef);
    const active = useActive(selectorRef);
    const focus  = useFocus(selectorRef);

    return (
        <View 
            ref={selectorRef}
            style={{
                backgroundColor: hover ? 'blue' : active ? 'red' : focus ? 'yellow' : 'white',
            }}
        />
    );
}
```

CSS media query example:

```jsx

// before -------------------------------------
import React from 'react';

function WebComponent() {

    return (
        <div id={'selector'}>
            <style>
                #selector {
                    background-color: white;
                }
                @media only screen and (max-width: 768px) {
                    #selector {
                        background-color: blue;
                    }
                }
            </style>
        </div>
    );
}

// after:
import React from 'react';
import {View, useDimensions} from 'react-unified';

function UnifiedComponent() {

    const dimensions = useDimensions();

    return (
        <View 
            ref={selectorRef}
            style={{
                backgroundColor: dimensions.width <= 768 ? 'blue' : 'white',
            }}
        />
    );
}

```