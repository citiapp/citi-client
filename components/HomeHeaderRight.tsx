/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants';

const HomeHeaderRight = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notificationBtn}>
        <View style={styles.notificationBtnIndicator} />
        <MaterialCommunityIcons
          name="bell"
          size={23}
          color={Colors.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://imageio.forbes.com/specials-images/imageserve/570fdde5e4b045e86b21861e/960x960.jpg?height=400&width=400&fit=bounds',
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
    objectFit: 'cover',
  },
  notificationBtn: {
    position: 'relative',
    height: 40,
    width: 40,
    borderRadius: 100,
    borderColor: Colors.lightgray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBtnIndicator: {
    height: 10,
    width: 10,
    top: 4,
    left: 33,
    position: 'absolute',
    backgroundColor: Colors.tertiary,
    borderRadius: 100,
  },
});

export default HomeHeaderRight;
