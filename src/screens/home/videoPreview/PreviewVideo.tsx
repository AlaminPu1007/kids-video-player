import {StyleSheet, View} from 'react-native';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/stackNavigation/RootStackNav';
import {SafeAreaView} from 'react-native-safe-area-context';
import {calculatePlayerHeight, getVideoId} from '../../../utils/ReusableMethod';
import YoutubePlayer from 'react-native-youtube-iframe';

type Props = NativeStackScreenProps<RootStackParamList, 'videoPreview'>;

// define type for router
interface routerParams {
    itemId?: number | string;
    videoUrl?: string;
}

const PreviewVideo = ({route}: Props) => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>('');
    const videoRef = useRef(null);

    /**
     * description :- This hooks help us to get video id from route
     * @created_by :- {ALAMIN}
     * @created_at :- 29/07/2023 19:21:08
     */
    useEffect(() => {
        // First, assert the correct type for route.params
        const params: routerParams | undefined = route.params;

        const {videoUrl = ''} = params ?? {};
        if (videoUrl) {
            const getId = getVideoId(videoUrl);
            setVideoId(getId);
        }
    }, [route]);

    const onStateChange = useCallback((state: string) => {
        console.log(state, 'state');

        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);

    // const togglePlaying = useCallback(() => {
    //     setPlaying(prev => !prev);
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {videoId ? (
                    <YoutubePlayer
                        height={calculatePlayerHeight()}
                        play={playing}
                        videoId={videoId}
                        webViewStyle={styles.webViewContainer}
                        ref={videoRef}
                        onChangeState={onStateChange}
                    />
                ) : null}
            </View>
        </SafeAreaView>
    );
};

export default PreviewVideo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webViewContainer: {
        flex: 1,
    },
});
