
const Storage = {
    loadString: (name) => {
        if (typeof window === 'undefined') {
            return null;
        }
        const value = window.localStorage.getItem(name);
        return value ? value : null;
    },
    saveString: (name, value) => {
        if (typeof window === 'undefined') {
            return null;
        }
        return window.localStorage.setItem(name, value);
    },

    loadJSON: (name) => {
        const value = Storage.loadString(name);
        if (!value) {
            return null;
        }
        return JSON.parse(value);
    },
    saveJSON: (name, value) => {
        return Storage.saveString(name, JSON.stringify(value));
    },
};

export default Storage;
