/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {Fonts} from '../constants';

const Promotions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.promoBtn}>
        <Image
          source={require('../assets/images/promo_bubble.png')}
          style={styles.promoImg}
          resizeMode="contain"
        />
        <Text style={styles.promoBtnText}>Its Buy One Get One Free Day!</Text>
        <FeatherIcon name="arrow-right" size={22} color={'#787B82'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoImg: {
    width: 40,
    height: 40,
  },
  promoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderColor: '#DCDFE5',
    borderWidth: 1,
    borderRadius: 100,
  },
  promoBtnText: {
    fontSize: 16,
    color: '#1E232E',
    fontFamily: Fonts.ManropeBold,
  },
});

export default Promotions;
