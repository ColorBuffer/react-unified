
const Storage = {
    loadString: (name) => {
        return null;
    },
    saveString: (name, value) => {
        return null;
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
