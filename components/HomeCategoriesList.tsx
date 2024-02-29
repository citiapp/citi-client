/* eslint-disable react/react-in-jsx-scope */
import {FlatList, StyleSheet, View} from 'react-native';
import {categories} from '../constants/data';
import CategoryItem from './CategoryItem';
import HomeWrapperHeaderSection from './HomeWrapperHeaderSection';

const HomeCategoriesList = () => {
  return (
    <View style={styles.container}>
      <HomeWrapperHeaderSection btnHandler={() => {}} title={'Categories'} />

      <FlatList
        data={categories}
        horizontal
        renderItem={({item}) => (
          <CategoryItem
            name={item.name}
            image={item.image}
            bgColor={item.color}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{columnGap: 10}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
});

export default HomeCategoriesList;
