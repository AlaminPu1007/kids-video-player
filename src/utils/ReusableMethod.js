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
