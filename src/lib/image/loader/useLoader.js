
import useFileReader from "./useFileReader";
import useImageLoader from "./useImageLoader";

export default function useLoader(from) {

    const isUrl = (
        !from
        || typeof from === 'string'
        || from instanceof String
    );

    const url = useImageLoader(isUrl ? from : false);
    const file = useFileReader(!isUrl ? from : false);

    return isUrl ? url : file;
};