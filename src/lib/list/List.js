
import {View} from 'react-unified'
import React from "react";
import InfiniteList from "./InfiniteList";

export default React.forwardRef(
function List({items, keyExtractor, topper, loadMoreItems, renderItem, getItemHeight, outerRef, innerRef}, ref) {

    const noItem = !items || !items.length;
    const onlyTopper = noItem && topper;

    return (
        <View style={{height: '100%', direction: 'ltr'}}>
            <InfiniteList
                setListRef={r => {
                    if (ref) {
                        ref.current = r;
                    }
                }}
                items={onlyTopper ? [1] : items}
                isNextPageLoading={false}
                hasNextPage={onlyTopper ? false : (items.length < 1000)}
                loadMoreItems={(startIndex, stopIndex) => {
                    // console.log('loadMoreItems', {startIndex, stopIndex});
                    if (onlyTopper) {
                        return null;
                    }
                    loadMoreItems(10);
                }}
                renderItem={(item, index) => {
                    return (
                        <View style={{direction: 'rtl'}}>
                            {(index === 0 && topper) ? topper : null}
                            {onlyTopper ? null : renderItem(item, index)}
                        </View>
                    );
                }}

                outerRef={outerRef}
                innerRef={innerRef}
            />
        </View>
    );
}
)
