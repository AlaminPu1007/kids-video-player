import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import YoutubePlayer, {getYoutubeMeta} from 'react-native-youtube-iframe';
import {calculatePlayerHeight, getVideoId} from '../../../utils/ReusableMethod';

interface Props {
    item: any;
}

const VideoContainer = ({item}: Props) => {
    // get video id from url
    const videoId = getVideoId(item.link);
    // define state for this component
    const [playing] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [metaDataOfVideo, setMetaDataOfVideo] = useState<Object>({});

    const videoRef = useRef<any>();

    // get meta data of video
    useEffect(() => {
        let unmount = false;
        if (!unmount && videoId) {
            getYoutubeMeta(videoId).then(meta => {
                setMetaDataOfVideo(meta);
            });
        }

        return () => {
            unmount = true;
        };
    }, [videoId]);

    // if video id is not valid return error
    if (!videoId) {
        return (
            <View>
                <Text>Invalid video </Text>
            </View>
        );
    }

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
