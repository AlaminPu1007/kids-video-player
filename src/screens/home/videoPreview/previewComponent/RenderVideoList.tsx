import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getVideoId} from '../../../../utils/ReusableMethod';
import {getYoutubeMeta} from 'react-native-youtube-iframe';
import commonStyles from '../../../../styles/commonStyles';
import colors from '../../../../theme/colors';
import {useAppSelector} from '../../../../store/storeHook';
import VideoCardLoaderSkeleton from '../../../../component/molecules/VideoCardLoaderSkeleton';

interface Props {
    Item: {link: string, name: string, id: string, type: string};
    index: number;
    callBackToGetId: (link: string) => void;
}

const RenderVideoList = ({Item, index, callBackToGetId}: Props) => {
    // get rootData from
    const {rootData} = useAppSelector(state => state.home);

    // get colors property form react-navigation theme
    // const {colors} = useTheme();

    // get video id from url
    const videoId = getVideoId(Item.link);
    // define state for this component
    // const [playing] = useState(false);

    const [metaDataOfVideo, setMetaDataOfVideo] = useState<Object>({});
    const [imageLoader, setImageLoader] = useState<boolean>(true);

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

    // each item press method
    const onItemPress = () => {
        const {link} = Item;
        // @ts-ignore
        return callBackToGetId(link);
    };

    // This method will help us to detect if image loaded successfully
    const onLoadOfImage = () => {
        if (imageLoader) {
            setImageLoader(prv => !prv);
        }
    };

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.itemContainer,
                    rootData?.length - 1 === index
                        ? styles.lastItemStyles
                        : null,
                ]}>
                {imageLoader ? (
                    <View style={styles.loaderContainer}>
                        <VideoCardLoaderSkeleton />
                    </View>
                ) : null}
                <TouchableOpacity
                    onPress={onItemPress}
                    activeOpacity={0.8}
                    style={[
                        styles.imgContainer,
                        imageLoader ? styles.imgIsLoading : null,
                    ]}>
                    {
                        // @ts-ignore
                        metaDataOfVideo?.thumbnail_url ? (
                            <Image
                                source={{
                                    // @ts-ignore
                                    uri: metaDataOfVideo?.thumbnail_url,
                                }}
                                style={styles.thumbnailImageStyles}
                                onLoad={onLoadOfImage}
                            />
                        ) : null
                    }
                </TouchableOpacity>
                {!imageLoader ? (
                    <View style={styles.textContainer}>
                        <Text style={[commonStyles.mediumTextStyles]}>
                            {Item?.name}
                        </Text>
                        <Text
                            style={[
                                commonStyles.smallTextStyles,
                                styles.typeTextStyles,
                            ]}>
                            {Item.type}
                        </Text>
                    </View>
                ) : null}
            </View>
        </View>
    );
};

export default RenderVideoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
    },
    loaderContainer: {flex: 1},
    itemContainer: {
        flexDirection: 'row',
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        borderRadius: 4,
    },

    lastItemStyles: {
        marginBottom: 15,
    },
    imgContainer: {
        width: 154,
        height: 88,
    },
    imgIsLoading: {
        width: 0,
        height: 0,
    },
    thumbnailImageStyles: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    textContainer: {
        overflow: 'hidden',
        marginHorizontal: 12,
        paddingTop: 5,
    },
    typeTextStyles: {
        paddingTop: 4,
    },
});
