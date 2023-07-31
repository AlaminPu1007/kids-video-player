import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSpring,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
import {useEffect} from 'react';
import colors from '../../theme/colors';

interface Props {
    Width: string | number;
    Height: string | number;
}

const VideoLoadingSkeleton = ({Width = '100%', Height = 120}: Props) => {
    const offset = useSharedValue(1);

    useEffect(() => {
        offset.value = withRepeat(
            withSpring(0.45, {
                duration: 1600,
            }),
            -1,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: offset.value,
        };
    });

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <View>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Animated.View
                style={[
                    styles.box,
                    animatedStyles,
                    // @ts-ignore
                    {width: Width, height: Height},
                ]}
            />
        </View>
    );
};

export default VideoLoadingSkeleton;

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 120,
        backgroundColor: colors.skeletonBg,
    },
});
