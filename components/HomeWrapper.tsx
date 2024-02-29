/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, StyleSheet} from 'react-native';
import HomeCategoriesList from './HomeCategoriesList';
import HomeMenuList from './HomeMenuList';

const HomeWrapper = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <HomeCategoriesList />
      <HomeMenuList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#FFF',
    height: '100%',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default HomeWrapper;
