
import React from 'react';
import Head from 'next/head';

class PageTitle extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.title !== this.props.title || nextProps.meta !== this.props.meta;
    }

    render () {
        let props = this.props;

        let array = [];
        for (let name in (props.meta || {})) {
            array.push([name, props.meta[name]]);
        }

        return (
            <Head>
                <title>{props.title}</title>
                {array.map(([name, content]) =>
                    <meta key={name} name={name} content={content} />
                )}
                {props.authorURL && (
                    <link rel="author" href={props.authorURL} />
                )}
            </Head>
        );
    }
}

export default PageTitle;