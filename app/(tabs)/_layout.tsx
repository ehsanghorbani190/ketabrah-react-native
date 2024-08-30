import {Tabs} from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import TabBarLabel from '@/components/TabBarLabel';
import {useTheme} from '@react-navigation/native';
import {Text} from 'react-native';
import {Image} from 'expo-image';
import images from '@/constants/Images';
import {IExtendedTheme} from '@/core/types/ui';

export default function TabLayout() {
  const theme: IExtendedTheme = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarInactiveTintColor: theme.other_colors?.inactive_gray,
        headerTitleAlign: 'center',
        headerShadowVisible: true,
        headerStyle: {elevation: 10},
        headerTitle: args =>
          args.children === 'خانه' ? (
            <Image
              source={images.typography}
              style={{
                width: 65,
                height: 25,
              }}
            />
          ) : (
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: 16,
                fontFamily: 'Vazir',
              }}
            >
              {args.children}
            </Text>
          ),
      }}
    >
      <Tabs.Screen
        name="user-account"
        options={{
          title: 'حساب‌کاربری',
          tabBarLabel: ({focused, children, color}) => (
            <TabBarLabel color={color} focused={focused} text={children} />
          ),
          headerRight: _ => (
            <Feather
              name={'refresh-cw'}
              size={20}
              style={{
                marginRight: 20,
                color: theme.colors.primary,
                transform: 'rotate(90deg)',
              }}
            />
          ),
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesome
              name={focused ? 'user-circle' : 'user-circle-o'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="book-shelf"
        options={{
          title: 'کتابخانه‌من',
          tabBarLabel: ({focused, children, color}) => (
            <TabBarLabel color={color} focused={focused} text={children} />
          ),
          headerRight: _ => (
            <Feather
              name={'refresh-cw'}
              size={20}
              style={{
                marginRight: 20,
                color: theme.colors.primary,
                transform: 'rotate(90deg)',
              }}
            />
          ),
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'book' : 'book-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'جستجو',
          tabBarLabel: ({focused, children, color}) => (
            <TabBarLabel color={color} focused={focused} text={children} />
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name={'search'} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: 'دسته‌بندی',
          tabBarLabel: ({focused, children, color}) => (
            <TabBarLabel color={color} focused={focused} text={children} />
          ),
          tabBarIcon: ({color, focused, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'shape' : 'shape-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'خانه',
          tabBarLabel: ({focused, children, color}) => (
            <TabBarLabel color={color} focused={focused} text={children} />
          ),
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
