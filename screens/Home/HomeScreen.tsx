import {SafeAreaView, StatusBar} from 'react-native';
import HomeWrapper from '../../components/HomeWrapper';
import Promotions from '../../components/Promotions';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeAreaView>
        <Promotions />
        <HomeWrapper />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
