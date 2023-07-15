import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';

interface Props {
    item: any;
}

const VideoContainer = ({item}: Props) => {
    const [playing] = useState(false);
    const videoId = item.link.split('v=')[1].split('&')[0];
    const videoRef = useRef<any>();

    // Calculate the height based on the aspect ratio of the video
    const calculatePlayerHeight = () => {
        const aspectRatio = 16 / 9; // Assuming a 16:9 aspect ratio
        const screenWidth = Dimensions.get('window').width;
        const playerHeight = screenWidth / aspectRatio;
        return playerHeight;
    };

    getYoutubeMeta(videoId).then(meta => {
        console.log(meta);
    });

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{item?.name}</Text>
            <YoutubePlayer
                height={calculatePlayerHeight()}
                play={playing}
                videoId={videoId}
                webViewStyle={styles.webViewContainer}
                ref={videoRef}
            />
        </View>
    );
};

export default VideoContainer;

const styles = StyleSheet.create({
    container: {
        elevation: 0.5,
        margin: 10,
    },
    webViewContainer: {
        flex: 1,
    },
    titleStyle: {
        fontSize: 25,
        paddingVertical: 10,
        marginLeft: 10,
        color: '#001',
    },
});
