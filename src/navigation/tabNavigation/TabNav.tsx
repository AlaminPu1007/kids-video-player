import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeComponent from '../../screens/home';
import React from 'react';

export type RootTabsParamList = {
    Home: undefined,
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeComponent} />
        </Tab.Navigator>
    );
};

export default TabNav;
