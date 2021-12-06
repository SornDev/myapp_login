import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {startClock} from 'react-native-reanimated';
import LoginSreen from './LoginSreen';
import RegisterSreen from './RegisterSreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tab1 = {
  //tabBarStyle: {display: 'none'},
  tabBarLabel: 'ແທບທີ່ 1',
  headerShown: false ,
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./img/ic_profile_select.png')
          : require('./img/ic_profile.png')
      }
    />
  ),
};

const tab2 = {
  tabBarLabel: 'ແທບທີ່ 2',
  headerShown: false ,
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./img/ic_card_select.png')
          : require('./img/ic_card.png')
      }
    />
  ),
};

const TabScreen = props => {
  return (
    <Tab.Navigator initialRouteName="Tab1">
      <Stack.Screen name="Tab1" component={Tab1Screen} options={tab1} />
      <Stack.Screen name="Tab2" component={Tab2Screen} options={tab2} />
    </Tab.Navigator>
  );
};

const RootStrack = props => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginSreen} />
      <Stack.Screen name="Register" component={RegisterSreen} />
      <Stack.Screen name="GoTab" component={TabScreen} options={{title: 'ໜ້າແທັບທັງໝົດ'}}/>
    </Stack.Navigator>
  );
};

export default RootStrack;
