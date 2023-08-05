/**
 * This component will render as a loading skeleton with text small card
 */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import VideoLoadingSkeleton from '../atoms/VideoLoadingSkeleton';

const HomeLoaderSkeleton = () => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.categoriesContainer}>
                {Array(4)
                    .fill(0)
                    .map((item, index) => {
                        return (
                            <View key={index} style={styles.singleItem}>
                                <VideoLoadingSkeleton Width={100} Height={30} />
                            </View>
                        );
                    })}
            </View>

            <View style={styles.boxWidget}>
                {Array(4)
                    .fill(0)
                    .map((item, index) => {
                        return (
                            <View key={index} style={styles.singleBoxContainer}>
                                <VideoLoadingSkeleton
                                    Width={'100%'}
                                    Height={280}
                                />
                            </View>
                        );
                    })}
            </View>
        </View>
    );
};

export default HomeLoaderSkeleton;

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 5,
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    singleItem: {
        marginRight: 10,
    },
    boxWidget: {
        marginTop: 10,
    },
    singleBoxContainer: {
        marginBottom: 10,
    },
});
