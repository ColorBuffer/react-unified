
import React from 'react';

class Fade extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: props.index,
            opacity: 0,
        }
    }

    render() {
        const {items, style, index} = this.props;

        let s = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transition: 'opacity ' + this.props.duration + 's',
        };

        let Current = items[this.state.current];
        let Next = items[index];

        return (
            <div
                style={{
                    ...style,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Current
                    style={{
                        ...s,
                    }}
                />
                {index !== this.state.current ? (
                    <Next
                        style={{
                            ...s,
                            opacity: this.state.opacity,
                        }}
                    />
                ) : null}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // on index prop change
        if (prevProps.index !== this.props.index) {
            clearTimeout(this.t1);
            clearTimeout(this.t2);
            this.t1 = setTimeout(e => {
                this.setState({
                    opacity: 1,
                });
                this.t2 = setTimeout(e => {
                    this.setState({
                        current: this.props.index,
                        opacity: 0,
                    });
                }, this.props.duration * 1000);
            }, 10);

        }
    }
    componentWillUnmount() {
        clearTimeout(this.t1);
        clearTimeout(this.t2);
    }
}

Fade.defaultProps = {
    duration: .3,
};

export default Fade;