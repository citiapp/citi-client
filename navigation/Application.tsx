/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeHeaderLeft from '../components/HomeHeaderLeft';
import HomeHeaderRight from '../components/HomeHeaderRight';
import {Colors, Fonts} from '../constants';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import SubscriptionScreen from '../screens/Subscription/SubscriptionScreen';

const Tab = createBottomTabNavigator();

// @ts-ignore
const CustomTabBarIcon = ({name, focused, color}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        //@ts-ignore
        source={getIconSource(name)}
        resizeMode="contain"
        style={{
          width: 27,
          height: 27,
          tintColor: focused ? color : Colors.gray,
          overflow: 'hidden',
        }}
      />
      <Text
        style={{
          paddingTop: 5,
          fontSize: 12,
          fontFamily: focused ? Fonts.UrbanistBold : Fonts.UrbanistMedium,
          color: focused ? color : Colors.gray,
        }}>
        {name}
      </Text>
    </View>
  );
};

const getIconSource = (name: any) => {
  switch (name) {
    case 'Home':
      return require('../assets/icons/home.png');
    case 'Subscribe':
      return require('../assets/icons/subscribe.png');
    case 'Orders':
      return require('../assets/icons/orders.png');
    case 'Favorites':
      return require('../assets/icons/favorites.png');
    default:
      return null;
  }
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F8FA',
  },
};

const ApplicationNavigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: '',
            headerStyle: styles.homeHeaderStyle,
            headerLeft: () => <HomeHeaderLeft />,
            headerRight: () => <HomeHeaderRight />,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                name="Home"
                focused={focused}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Subscribe"
          component={SubscriptionScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                name="Subscribe"
                focused={focused}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                name="Orders"
                focused={focused}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                name="Favorites"
                focused={focused}
                color={Colors.primary}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#FFF',
    borderRadius: 40,
    height: 80,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: '#EEF1F2',
    borderTopColor: '#EEF1F2',
    borderLeftColor: '#EEF1F2',
    borderBottomColor: '#EEF1F2',
    paddingBottom: 0,
  },
  homeHeaderStyle: {
    backgroundColor: '#FFF',
    height: 120,
    elevation: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ApplicationNavigation;
