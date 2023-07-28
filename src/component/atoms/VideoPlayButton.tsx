import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const VideoPlayButton = () => {
    return (
        <View>
            <Image
                source={require('../../assets/images/youtubeIcon.png')}
                style={styles.iconStyles}
            />
        </View>
    );
};

export default VideoPlayButton;

const styles = StyleSheet.create({
    iconStyles: {
        width: 80,
        height: 56,
    },
});
