import {Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../styles/commonStyles';

const TrendingComponent = () => {
    return (
        <View style={[commonStyles.pageContentCenter]}>
            <Text style={[commonStyles.mediumTextStyles]}>Coming soon...</Text>
        </View>
    );
};

export default TrendingComponent;
