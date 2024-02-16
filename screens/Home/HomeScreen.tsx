import {SafeAreaView, StatusBar} from 'react-native';
import Promotions from '../../components/Promotions';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeAreaView>
        <Promotions />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
