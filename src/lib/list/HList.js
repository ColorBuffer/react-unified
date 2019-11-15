
import React from 'react';
import HListStyle from './HListStyle';

class HList extends React.Component {

    render() {
        let {title, items, itemRenderer} = this.props;

        return (
            <div>
                <HListStyle />
                <div>
                    <h3>{title}</h3>
                    <div className={'h-list'}>
                        {items.map((item, i) => <div key={i}>{itemRenderer(item)}</div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default HList;
