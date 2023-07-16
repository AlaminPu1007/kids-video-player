import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeComponent from '../../screens/home';
import React from 'react';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrendingComponent from '../../screens/trending';

export type RootTabsParamList = {
    Home: undefined,
    Trending: undefined,
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabNavigationContainer = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                    tabBarIconStyle: {
                        color: 'red',
                    },
                }}
                name="Home"
                component={HomeComponent}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Trending',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="trending-up"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarIconStyle: {
                        color: 'red',
                    },
                }}
                name="Trending"
                component={TrendingComponent}
            />
        </Tab.Navigator>
    );
};

export default TabNavigationContainer;
