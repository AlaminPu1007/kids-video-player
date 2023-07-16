import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNav from '../tabNavigation/TabNav';

export type RootStackParamList = {
    Dashboard: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={TabNav} />
        </Stack.Navigator>
    );
};

export default RootStackNav;
