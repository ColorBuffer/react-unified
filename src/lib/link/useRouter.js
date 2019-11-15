
import React from 'react'
import {useRouter as useR} from 'next/router';


export default function useRouter() {

    const router = useR();

    return {

        getPathname: () => router.route,

        getQuery: (name, defaultValue) => {
            if (router.query[name] === undefined) {
                return defaultValue;
            }
            return router.query[name];
        },

        events: router.events,

        push: router.push,

        replace: router.replace,

        back: router.back,
    };
}
