
import {Platform} from 'react-native';

export default function usePlatform() {

    return {
        os: Platform.OS,
        version: Platform.Version,
    }
}
