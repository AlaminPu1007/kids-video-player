import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNav from '../tabNavigation/TabNav';
import PreviewVideo from '../../screens/home/videoPreview';

export type RootStackParamList = {
    Dashboard: undefined,
    videoPreview: {itemId: string, videoUrl: string} | undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={TabNav} />
            {/* The remain navigation will be show without tab-view mode */}
            <Stack.Screen name="videoPreview" component={PreviewVideo} />
        </Stack.Navigator>
    );
};

export default RootStackNav;
