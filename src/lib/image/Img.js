
import React from 'react';
import Fade from '../animation/Fade';
import useLegacyState from "../base/useLegacyState";
import usePrevious from "../base/usePrevious";

const Img = (props) => {

    // const [state, setState] = useLegacyState({
    //     index: props.src ? 1 : 0,
    //     prev: props.src,
    //     current: props.src,
    // });

    // const prevSrc = usePrevious(props.src);

    // React.useEffect(() => {

    //     let src = props.src;

    //     // console.log('componentWillUpdate', prevSrc + ' -> ' + src);

    //     // on src prop change
    //     if (src !== prevSrc) {

    //         // image -> placeholder
    //         if (!src) {
    //             // console.log('i -> p');
    //             return setState({
    //                 index: 0,
    //             });
    //         }

    //         // placeholder -> image
    //         if (!prevSrc) {
    //             // console.log('p -> i');
    //             return setState({
    //                 index: 1,
    //                 prev: src,
    //             });
    //         }

    //         // console.log('i -> i');

    //         // image -> image
    //         return setState({
    //             index: state.index === 1 ? 2 : 1,
    //             prev: state.index === 1 ? prevSrc : src,
    //             current: state.index === 1 ? src : prevSrc,
    //         });
    //     }
    // }, [props.src]);

    if (props.src) {
        return (
            <img
                src={props.src}
                style={{
                    ...props.style,
                    objectFit: props.resizeMode,
                    objectPosition: 'center center',
                }}
            />
        );
    }
    let Placeholder = props.placeholder;
    return (
        <Placeholder
            style={props.style}
        />
    );
    // return (
    //     <Fade
    //         duration={1}
    //         index={state.index}
    //         style={props.style}
    //         items={[
    //             ({style}) => {
    //                 let Placeholder = props.placeholder;
    //                 return (
    //                     <Placeholder
    //                         style={style}
    //                     />
    //                 );
    //             },
    //             ({style}) => (
    //                 <img
    //                     src={state.prev ? state.prev : undefined}
    //                     style={{
    //                         ...style,
    //                         objectFit: props.resizeMode,
    //                         objectPosition: 'center center',
    //                     }}
    //                 />
    //             ),
    //             ({style}) => (
    //                 <img
    //                     src={state.current ? state.current : undefined}
    //                     style={{
    //                         ...style,
    //                         objectFit: props.resizeMode,
    //                         objectPosition: 'center center',
    //                     }}
    //                 />
    //             ),
    //         ]}
    //     />
    // );

};

export default Img;
