/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {Colors, Fonts} from '../constants';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import SubscriptionScreen from '../screens/Subscription/SubscriptionScreen';

const Tab = createBottomTabNavigator();

// @ts-ignore
const CustomTabBarIcon = ({name, focused, color}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        //@ts-ignore
        source={getIconSource(name)}
        style={{
          width: 28,
          height: 28,
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

const ApplicationNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
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
            borderColor: '#EEF1F2',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: '',
            headerTransparent: true,
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

export default ApplicationNavigation;
