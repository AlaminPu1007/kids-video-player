import {StyleSheet, View, Text, FlatList} from 'react-native';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/stackNavigation/RootStackNav';
import {SafeAreaView} from 'react-native-safe-area-context';
import {calculatePlayerHeight, getVideoId} from '../../../utils/ReusableMethod';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useAppSelector} from '../../../store/storeHook';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../theme/colors';
import RenderVideoList from './previewComponent/RenderVideoList';

type Props = NativeStackScreenProps<RootStackParamList, 'videoPreview'>;

// define type for router
interface routerParams {
    itemId?: number | string;
    videoUrl?: string;
}

const PreviewVideo = ({route}: Props) => {
    // get video data from redux

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {rootData = []} = useAppSelector(state => state.home);

    const [playing, setPlaying] = useState<boolean>(true);
    const [videoId, setVideoId] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
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
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => {
            clearInterval(timeOut);
        };
    }, [route]);

    const onStateChange = useCallback((state: string) => {
        if (__DEV__) {
            console.log(state, 'state');
        }

        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);

    // const togglePlaying = useCallback(() => {
    //     setPlaying(prev => !prev);
    // }, []);

    // initial  loader
    if (loading) {
        return (
            <View style={[commonStyles.pageContentCenter]}>
                <Text style={[commonStyles.mediumTextStyles]}>loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.videoContainer}>
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
            {/* Video item will be render here */}
            {rootData?.length ? (
                <FlatList
                    data={rootData}
                    // @ts-ignore
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        // @ts-ignore
                        <RenderVideoList Item={item} index={index} />
                    )}
                />
            ) : null}
        </SafeAreaView>
    );
};

export default PreviewVideo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    videoContainer: {
        // marginBottom: 10,
        padding: 0,
        borderColor: colors.borderColor,
    },
    webViewContainer: {
        flex: 1,
    },
});
