import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
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
import VideoLoadingSkeleton from '../../../component/atoms/VideoLoadingSkeleton';
// get width from device window
const WIDTH = Dimensions.get('window').width;

type Props = NativeStackScreenProps<RootStackParamList, 'videoPreview'>;

// define type for router
interface routerParams {
    itemId?: number | string;
    videoUrl?: string;
}

const PreviewVideo = ({route}: Props) => {
    // get video data from redux

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
        // loader will be false after video loaded
        if (state === 'unstarted') {
            setLoading(false);
        }

        if (state === 'ended') {
            setPlaying(false);
        }
    }, []);

    /**
     * description :- This method for get video link from callback
     * @author {ALAMIN}
     * @created_by :- {ALAMIN}
     * @created_at :- 30/07/2023 20:41:46
     */
    const getUserSelectAbleVideo = async (link: string) => {
        try {
            setLoading(prv => !prv);
            const getId = getVideoId(link);
            setVideoId(getId);
            //stop loader
            setLoading(prv => !prv);
        } catch (err) {
            setLoading(prv => !prv);
            if (__DEV__) {
                console.log(err);
            }
        }
    };

    // This method will called after video loaded successfully
    const onVideoReadyMethod = () => {
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.videoContainer}>
                {!loading ? (
                    videoId ? (
                        <YoutubePlayer
                            height={calculatePlayerHeight()}
                            play={playing}
                            videoId={videoId}
                            webViewStyle={styles.webViewContainer}
                            ref={videoRef}
                            onReady={onVideoReadyMethod}
                            onChangeState={onStateChange}
                        />
                    ) : (
                        <View style={[commonStyles.pageContentCenter]}>
                            <Text
                                style={[
                                    commonStyles.mediumTextStyles,
                                    styles.noVideoFoundTxt,
                                ]}>
                                Video is not available
                            </Text>
                        </View>
                    )
                ) : (
                    <View
                        style={[
                            commonStyles.pageContentCenter,
                            styles.webViewContainer,
                        ]}>
                        <VideoLoadingSkeleton
                            Width={WIDTH}
                            Height={calculatePlayerHeight()}
                        />
                    </View>
                )}
            </View>
            {/* Video item will be render here */}
            {rootData?.length ? (
                <FlatList
                    data={rootData}
                    // @ts-ignore
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <RenderVideoList
                            // @ts-ignore
                            Item={item}
                            index={index}
                            callBackToGetId={getUserSelectAbleVideo}
                        />
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
        backgroundColor: colors.white,
    },
    videoContainer: {
        padding: 0,
        borderColor: colors.borderColor,
        minHeight: calculatePlayerHeight(),
    },
    noVideoFoundTxt: {
        textAlign: 'center',
    },
    webViewContainer: {
        flex: 1,
    },
});
