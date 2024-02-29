import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, Styles} from '../constants';

type Props = {
  title: String;
  description?: String;
  btnHandler: Function;
};

const HomeWrapperHeaderSection = ({title, description, btnHandler}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.categoryText}>{title}</Text>
        <Text style={styles.categoryTextDescription}>{description}</Text>
      </View>
      <TouchableOpacity onPress={btnHandler} style={Styles.smSecondaryBtn}>
        <Text style={Styles.smSecondaryBtnText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: Fonts.UrbanistBold,
    color: '#000',
  },
  categoryTextDescription: {
    color: '#787B82',
    paddingTop: 6,
    fontFamily: Fonts.ManropeRegular,
  },
});

export default HomeWrapperHeaderSection;
