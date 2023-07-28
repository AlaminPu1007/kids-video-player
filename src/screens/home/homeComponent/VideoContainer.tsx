import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getYoutubeMeta} from 'react-native-youtube-iframe';
import {getVideoId} from '../../../utils/ReusableMethod';
// import {useTheme} from '@react-navigation/native';
import commonStyles from '../../../styles/commonStyles';
import colors from '../../../theme/colors';
import VideoPlayButton from '../../../component/atoms/VideoPlayButton';

interface Props {
    item: {link: string, name: string, id: string};
    index: number;
    // callBackMethod: (id: string) => void;
}

const VideoContainer = ({item, index}: Props) => {
    // get colors property form react-navigation theme
    // const {colors} = useTheme();

    // get video id from url
    const videoId = getVideoId(item.link);
    // define state for this component
    // const [playing] = useState(false);

    const [metaDataOfVideo, setMetaDataOfVideo] = useState<Object>({});

    // const videoRef = useRef<any>();

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
            <View style={[commonStyles.pageContentCenter]}>
                <Text style={[commonStyles.mediumTextStyles]}>
                    Invalid video
                </Text>
            </View>
        );
    }

    /**
     * description :- This method for each video item press
     * @author {ALAMIN}
     * @created_by :- {ALAMIN}
     * @created_at :- 28/07/2023 11:34:48
     */
    const eachItemPress = () => {
        // return callBackMethod(item.id);
    };

    return (
        <View
            style={[
                styles.container,
                index === 0 ? styles.firstItemStyles : null,
            ]}>
            <View>
                <Text
                    style={[commonStyles.mediumTextStyles, styles.titleStyle]}>
                    {item?.name}
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={eachItemPress}
                style={styles.imageWrapperWidget}>
                <View
                    style={[styles.boxWrapper, commonStyles.pageContentCenter]}>
                    {/* @ts-ignore */}
                    {metaDataOfVideo?.thumbnail_url && (
                        <Image
                            source={{
                                // @ts-ignore
                                uri: metaDataOfVideo?.thumbnail_url,
                            }}
                            style={styles.imageContainer}
                        />
                    )}
                    <View style={styles.playButtonWrapper}>
                        <VideoPlayButton />
                    </View>
                </View>
            </TouchableOpacity>

            {/* <YoutubePlayer
                height={calculatePlayerHeight() - 5}
                play={playing}
                videoId={videoId}
                webViewStyle={styles.webViewContainer}
                ref={videoRef}
            /> */}
        </View>
    );
};

export default VideoContainer;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 0,
        borderColor: colors.borderColor,
    },
    firstItemStyles: {
        marginTop: 10,
    },
    webViewContainer: {
        flex: 1,
    },
    titleStyle: {
        marginVertical: 10,
        marginHorizontal: 5,
    },
    imageWrapperWidget: {
        height: 360,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        objectFit: 'fill',
    },
    boxWrapper: {
        position: 'relative',
    },
    playButtonWrapper: {
        position: 'absolute',
    },
});
