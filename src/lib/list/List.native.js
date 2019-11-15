
import React from "react";
import N from 'react-native';
import {View} from 'react-unified'

export default React.forwardRef(
function List({items, keyExtractor, topper, loadMoreItems, renderItem, getItemHeight, initialNumToRender}, ref) {

    const noItem = !items || !items.length;
    const onlyTopper = noItem && topper;

    let getItemLayout = undefined;
    if (getItemHeight) {
        getItemLayout = (data, index) => {
            const height = getItemHeight(data, index);
            return {
                length: height,
                offset: height * index,
                index,
            };
        }
    }

    return (
        <N.FlatList
            ref={ref}
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'transparent',
            }}
            data={items}
            keyExtractor={keyExtractor}
            renderItem={({item, index}) => {
                return (
                    <View>
                        {(index === 0 && topper) ? topper : null}
                        {onlyTopper ? null : renderItem(item, index)}
                    </View>
                );
            }}
            onEndReachedThreshold={4}
            onEndReached={info => {
                loadMoreItems();
            }}
            getItemLayout={getItemLayout}
            initialNumToRender={initialNumToRender}
        />
    )
}
)
