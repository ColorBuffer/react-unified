
import React from 'react'
import NavContext from './NavContext'

export default function useRouter() {

    const nav = React.useContext(NavContext);

    return {

        getPathname: () => nav.getPathname(),

        getQuery: (name, defaultValue) => nav.getQuery(name, defaultValue),

        events: {
            on: () => {

            },
        },

        push: (href) => nav.push(href.pathname, href.query),

        replace: (href) => nav.replace(href.pathname, href.query),

        back: () => nav.back(),
    };
}
