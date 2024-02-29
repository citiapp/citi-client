/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts} from '../constants';

type Props = {
  name: String;
  image: ImageSourcePropType;
  bgColor: ColorValue;
};

const CategoryItem = ({name, image, bgColor}: Props) => {
  return (
    <TouchableOpacity
      style={{...styles.categoryCard, backgroundColor: bgColor}}>
      <Text style={styles.categoryCardText}>{name}</Text>
      <View style={styles.categoryCardImgWrapper}>
        <Image style={styles.categoryCardImg} source={image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 130,
    position: 'relative',
    height: 100,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryCardText: {
    fontSize: 14,
    fontFamily: Fonts.UrbanistSemiBold,
    color: '#000',
  },
  categoryCardImgWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  categoryCardImg: {
    width: 80,
    height: 80,
  },
});

export default CategoryItem;
