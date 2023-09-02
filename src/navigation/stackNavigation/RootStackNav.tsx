import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNav from '../tabNavigation/TabNav';
import PreviewVideo from '../../screens/home/videoPreview';
import CatagoriesWisePreview from '../../screens/home/preview-of-categories';

export type RootStackParamList = {
    Dashboard: undefined;
    videoPreview: {itemId: string; videoUrl: string} | undefined;
    categoryPreview: {categoryName: string} | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={TabNav} />
            {/* The remain navigation will be show without tab-view mode */}
            <Stack.Screen name="videoPreview" component={PreviewVideo} />
            {/* This component will render category-wise-video list */}
            <Stack.Screen
                name="categoryPreview"
                component={CatagoriesWisePreview}
            />
        </Stack.Navigator>
    );
};

export default RootStackNav;
