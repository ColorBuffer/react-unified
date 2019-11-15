
import React from "react";

import {
    Image,
    Input,
    View,
    Avatar,
    Sidebar,
    InfiniteList,
    Icon,
    Modal,
    Cropper,
} from '../lib/index'

export default function App() {

    const [image, setImage] = React.useState('');
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [items, setItems] = React.useState([
        1, 2
    ]);
    const [loading, setLoading] = React.useState(false);

    const ToggleSidebar = () => (
        <button
            onClick={e => {
                setSidebarOpen(!sidebarOpen);
            }}
            children={'toggle sidebar'}
        />
    );

    return (
        <div>
        <Modal.Container>
            <Sidebar
                rtl={false}
                width={400}
                open={sidebarOpen}
                behavior={'MARGIN'}
                side={(
                    <div style={{height: '100%', background: '#ccc'}}>
                        <InfiniteList
                            items={items}
                            isNextPageLoading={loading}
                            hasNextPage={items.length < 1000}
                            loadMoreItems={(startIndex, stopIndex) => {
                                console.log('loadMoreItems', {startIndex, stopIndex});

                                setItems([
                                    ...items,
                                    ...Array(20).fill(0).map((_, i) => i + items.length + 1),
                                ])
                            }}
                            renderItem={item => (
                                <div style={{
                                    padding: '5px 10px',
                                    backgroundColor: ['white', undefined][item % 2],
                                }}>
                                    <div
                                        style={{
                                            paddingTop: (item % 4) * 30,
                                        }}
                                    >{item}</div>
                                </div>
                            )}
                        />
                    </div>
                )}
            >
                <ToggleSidebar />
                <Input
                    value={image}
                    onValue={image => setImage(image)}
                />
                <br />
                <br />
                <Image
                    source={image}
                    style={{
                        width: 60,
                        height: 85,
                    }}
                />
                <br />
                <br />
                <Avatar
                    source={image}
                    letter={'A'}
                    loading={false}
                    color={'#2196F3'}
                    size={60}
                />

                {/*<Icon*/}
                {/*    source={'https://cdn3.iconfinder.com/data/icons/online-marketing-vol-2/72/100-512.png'}*/}
                {/*    tintColor={'#ff0345'}*/}
                {/*/>*/}

                <Cropper
                    aspect={1}
                    minWidth={200}
                    minHeight={200}
                    maxWidth={1200}
                    maxHeight={1200}
                >
                    {crop => (
                        <button
                            onClick={e => {
                                crop(file => {

                                });
                            }}
                            children={'cropper'}
                        />
                    )}
                </Cropper>
            </Sidebar>
        </Modal.Container>
        </div>
    );
}
