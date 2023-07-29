import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
    Item: {link: string, name: string, id: string};
    index: number;
}

const RenderVideoList = ({Item, index}: Props) => {
    return (
        <View style={styles.container}>
            <Text>
                {Item.link} {index}
            </Text>
        </View>
    );
};

export default RenderVideoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
