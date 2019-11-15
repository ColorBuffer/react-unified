
import React from 'react';

class FilePicker extends React.PureComponent {

    render() {
        const {children, multiple} = this.props;
        return (
            <React.Fragment>
                <input
                    multiple={multiple}
                    type={'file'}
                    ref={(ref) => { this.inputRef = ref; }}
                    hidden
                    onChange={e => {
                        const files = e.target.files;
                        this._onPick(Array.from(files));
                        e.target.value = '';
                    }}
                />
                {children(onPick => {
                    this._onPick = onPick;
                    this.inputRef.click();
                })}
            </React.Fragment>
        );
    }
}

export default FilePicker;