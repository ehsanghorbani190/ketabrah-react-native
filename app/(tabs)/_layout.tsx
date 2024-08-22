import {Tabs} from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {FontAwesome} from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 55},
      }}
    >
      <Tabs.Screen
        name="user-account"
        options={{
          title: 'حساب کاربری',
          tabBarLabelStyle: {fontFamily: 'Vazir', marginBottom: 3},
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesome
              name={focused ? 'user' : 'user-o'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'صفحه‌ی اصلی',
          tabBarLabelStyle: {fontFamily: 'Vazir', marginBottom: 3},
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
