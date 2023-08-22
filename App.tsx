/**
 * Usage with modals on Android
 * On Android RNGH does not work by default because modals are not located under
 * React Native Root view in native hierarchy. To fix that, components need to be wrapped
 * with gestureHandlerRootHOC (it's no-op on iOS and web).
 * https://docs.swmansion.com/react-native-gesture-handler/docs/installation#android
 * @author {Alamin}
 * @created_by :- {ALAMIN}
 * @created_at :- 09/07/2023 21:02:09
 */

import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNav from './src/navigation/stackNavigation/RootStackNav';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/index';
import {navigationRef} from './src/navigation/RootNavigation';

const App = () => {
    const scheme = useColorScheme();
    return (
        <SafeAreaProvider style={styles.container}>
            <NavigationContainer
                ref={navigationRef}
                theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <RootStackNav />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
