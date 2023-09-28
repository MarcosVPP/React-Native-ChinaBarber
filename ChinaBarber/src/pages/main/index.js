import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Home';
import NotificationsScreen from '../Notifications';
import ProfileScreen from '../Profile';
import SearchScreen from '../Search';
import SettingsScreen from '../Settings';

const Tab = createBottomTabNavigator();

export default function Main(){
    const showTabName = false;

    return(

      <Tab.Navigator
        initialRouteName="Home"
        /*tabBarOptions={{*/
        screenOptions={{
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black'
          },
          
        }}
      >
        <Tab.Screen
          name="a"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({}) => (
                <Image
                  source={require('../../icons/icon-home.png')}
                  style={{ width: 30, height: 30}}
                />
              ),
          }}
        />
        
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarLabel: 'Notifications',
            headerShown: false,
            tabBarIcon: ({}) => (
                <Image
                  source={require('../../icons/icon-notification.png')}
                  style={{ width: 35, height: 35}}
                />
              ),
          }}
        />

        {/* <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            headerShown: false,
            tabBarIcon: ({}) => (
                <Image
                  source={require('../../icons/icon-search.png')}
                  style={{ width: 30, height: 30}}
                />
              ),
          }}
        /> */}

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({}) => (
                <Image
                  source={require('../../icons/icon-profile.png')}
                  style={{ width: 30, height: 30}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            headerShown: false,
            tabBarIcon: ({}) => (
                <Image
                  source={require('../../icons/icon-settings.png')}
                  style={{ width: 30, height: 30}}
                />
              ),
          }}
        />
      </Tab.Navigator>
    )
}