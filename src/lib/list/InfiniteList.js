
import React from "react";

import {DynamicSizeList} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';

const InfiniteList = ({
    items,
    isNextPageLoading,
    hasNextPage,
    renderItem,
    loadMoreItems,
    setListRef,
    outerRef,
    innerRef,
}) => {

    const RefForwarder = React.forwardRef(({style, index}, ref) => (
        <div ref={ref} style={style}>
            {renderItem(items[index], index)}
        </div>
    ));

    return (
        <AutoSizer>
            {({height, width}) => (
                <InfiniteLoader
                    isItemLoaded={index => !hasNextPage || index < items.length}
                    itemCount={hasNextPage ? items.length + 1 : items.length}
                    loadMoreItems={!isNextPageLoading ? loadMoreItems : () => {}}
                >
                    {({ onItemsRendered, ref }) => (
                        <DynamicSizeList
                            ref={el => {
                                ref(el);
                                setListRef && setListRef(el);
                            }}
                            onItemsRendered={onItemsRendered}
                            width={width}
                            height={height}
                            itemCount={items.length}
                            outerRef={outerRef}
                            innerRef={innerRef}
                        >
                            {RefForwarder}
                        </DynamicSizeList>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
};

export default InfiniteList;