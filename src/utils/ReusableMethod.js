/**
 * description :- This file is used for some reusable helper function
 * @author {Alamin}
 * @created_by :- {ALAMIN}
 * @created_at :- 16/07/2023 20:47:52
 */

import {Dimensions} from 'react-native';

/** This function return id from youtube video url */
export const getVideoId = url => url.split('v=')[1].split('&')[0] || null;

// Calculate the height based on the aspect ratio of the video
export const calculatePlayerHeight = () => {
    const aspectRatio = 16 / 9; // Assuming a 16:9 aspect ratio
    const screenWidth = Dimensions.get('window').width;
    const playerHeight = screenWidth / aspectRatio;
    return playerHeight;
};

/**
 * description :- This method help us to get an unique id
 * @created_by :- {ALAMIN}
 * @created_at :- 17/07/2023 22:14:53
 */
export const generateUUID = () => {
    // Public Domain/MIT
    let d = new Date().getTime(); //Timestamp
    let d2 =
        (typeof performance !== 'undefined' &&
            // eslint-disable-next-line no-undef
            performance.now &&
            // eslint-disable-next-line no-undef
            performance.now() * 1000) ||
        0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            let r = Math.random() * 16; //random number between 0 and 16
            if (d > 0) {
                //Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                //Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        },
    );
};
