
import React from 'react';
import ReactDOM from 'react-dom';

function useMounted() {
    const [mounted, setMounted] = React.useState(false);
    // on mount
    React.useEffect(() => setMounted(true), []);
    return mounted;
}

export default function Modal({
    modalState,
    nonClosable,
    children,
    color,
}) {

    const mounted = useMounted();
    
    const [showing, setShowing] = React.useState(false);
    const [showingClassName, setShowingClassName] = React.useState(false);

    // showing: following show
    React.useEffect(() => {
        if (modalState.showing) {
            setShowing(true);
        }
        else {
            setShowingClassName(false);
            const timeout = setTimeout(() => setShowing(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [modalState.showing]);

    // on state show change
    React.useEffect(() => {

        if (showing) {
            const timeout = setTimeout(() => setShowingClassName(true), 20);
            return () => clearTimeout(timeout);
        }
    }, [showing])



    if (typeof window === 'undefined') {
        return null;
    }

    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot || !mounted || !showing) {
        return null;
    }

    const inside = (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                top: 0,
                right: 0,
                left: 0,
                background: showingClassName ? color : 'transparent',
                opacity: showingClassName ? 1 : 0,
                zIndex: 99999,
                transition: 'all .3s',
            }}
            onClick={() => !nonClosable && modalState.close()}
        >
            {children}
        </div>
    );

    return ReactDOM.createPortal(inside, modalRoot);

}

Modal.defaultProps = {
    color: 'rgba(0, 0, 0, 0.5)',
};

Modal.Container = function Container({children}) {
    return (
        <React.Fragment>
            {children}
            <div id={'modal-root'} />
        </React.Fragment>
    );
};
