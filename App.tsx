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

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <App />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
