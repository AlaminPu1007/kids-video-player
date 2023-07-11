/**
 * description :-This Component is for to detect user device orientation screen
 * @return {device-rotate-mode}
 * @author {ALAMIN}
 * @created_by :- {ALAMIN}
 * @created_at :- 02/05/2023 20:56:56
 * @references :- https://adrianhall.github.io/react%20native/2017/07/26/handling-orientation-changes-in-react-native/
 */

import {Dimensions} from 'react-native';

/**
 *
 * @param {ScaledSize} dim the dimensions object
 * @param {*} limit the limit on the scaled dimension
 */
const msp = (dim: any, limit: number) => {
    return dim.scale * dim.width >= limit || dim.scale * dim.height >= limit;
};

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};

/**
 * Returns true if the device is a tablet
 */
const isTablet = () => {
    const dim = Dimensions.get('screen');
    return (
        (dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900))
    );
};

/**
 * Returns true if the device is a phone
 */
const isPhone = () => {
    return !isTablet();
};

export default {
    isPortrait,
    isLandscape,
    isTablet,
    isPhone,
};
