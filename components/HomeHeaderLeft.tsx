/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../constants';

const HomeHeaderLeft = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Your Location</Text>
      <TouchableOpacity style={styles.locationBtn}>
        <Text style={styles.locationBtnText}>UTC,MTN Rwanda</Text>
        <FontAwesomeIcon name="chevron-down" size={12} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  subTitle: {
    color: '#74777D',
    fontSize: 15,
    paddingBottom: 3,
    fontFamily: Fonts.ManropeSemiBold,
  },
  locationBtnText: {
    color: '#000',
    fontSize: 17,
    fontFamily: Fonts.ManropeBold,
  },
  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
});

export default HomeHeaderLeft;
