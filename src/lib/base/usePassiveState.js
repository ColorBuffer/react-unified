
import React from "react";

export default function usePassiveState(fromValue, {defaultValue, delay, activation}) {

    const [value, setValue] = React.useState(defaultValue);
    const [passing, setPassing] = React.useState(false);

    React.useEffect(() => {

        // ignore deactive changes
        if (!activation) {
            return;
        }

        setPassing(true);

        const timeout = setTimeout(
            () => setValue(fromValue) | setPassing(false),
            delay,
        );

        return () => clearTimeout(timeout);
    }, [fromValue, activation]);

    return [value, passing, setValue];
}