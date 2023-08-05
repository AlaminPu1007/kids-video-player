/**
 * This component will render as a loading skeleton with text small card
 */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import VideoLoadingSkeleton from '../atoms/VideoLoadingSkeleton';

const VideoCardLoaderSkeleton = () => {
    return (
        <View style={styles.itemContainer}>
            <View>
                <VideoLoadingSkeleton Width={154} Height={88} />
            </View>
            <View style={styles.textContainer}>
                <VideoLoadingSkeleton Width={'50%'} Height={20} />
                <View style={styles.childContainer}>
                    <VideoLoadingSkeleton Width={'40%'} Height={20} />
                </View>
            </View>
        </View>
    );
};

export default VideoCardLoaderSkeleton;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
    },
    textContainer: {
        width: '100%',
        marginHorizontal: 12,
    },
    childContainer: {
        marginTop: 10,
    },
});
