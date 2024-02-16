import {StyleSheet, View} from 'react-native';
import ApplicationNavigation from './navigation/Application';

const App = () => {
  return (
    <View style={styles.container}>
      <ApplicationNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
