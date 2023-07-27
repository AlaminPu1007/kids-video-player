import {View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

const VideoPlayButton = () => {
    return (
        <View>
            <AntDesign name="youtube" size={80} color="rgb(255, 0, 0)" />
        </View>
    );
};

export default VideoPlayButton;
