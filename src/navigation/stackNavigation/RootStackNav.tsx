import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from '../../screens/home';

export type RootStackParamList = {
    Home: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeComponent} />
        </Stack.Navigator>
    );
};

export default RootStackNav;
