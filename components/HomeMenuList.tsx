import {View} from 'react-native';
import HomeWrapperHeaderSection from './HomeWrapperHeaderSection';

const HomeMenuList = () => {
  return (
    <View>
      <HomeWrapperHeaderSection
        btnHandler={() => {}}
        title={'Our Top Recommendations'}
        description={'We choose delicious and close to you.'}
      />
    </View>
  );
};

export default HomeMenuList;
