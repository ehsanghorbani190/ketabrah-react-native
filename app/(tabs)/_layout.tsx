import {Tabs} from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import TabBarLabel from '@/components/TabBarLabel';
import {useTheme} from '@react-navigation/native';
import {Share, Text} from 'react-native';
import {Image} from 'expo-image';
import images from '@/constants/Images';
import {IExtendedTheme} from '@/core/types/ui';
import {openURL} from 'expo-linking';

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
        headerStyle: {
          elevation: 4,
          shadowColor: 'black',
        },
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
          headerRight: () => (
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
          headerRight: () => (
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
          headerLeft: props => {
            return (
              <MaterialCommunityIcons
                name={'bookmark-multiple-outline'}
                size={25}
                style={{marginLeft: 20, color: theme.colors.primary}}
              />
            );
          },
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
          headerRight: () => (
            <Octicons
              style={{
                paddingLeft: 10,
                paddingRight: 20,
                paddingVertical: 15,
                color: theme.colors.primary,
              }}
              name={'question'}
              size={20}
              onPress={() => {
                openURL('https://ketabrah.ir/page/help');
              }}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name={'share-social'}
              size={25}
              style={{
                color: theme.colors.primary,
                paddingLeft: 20,
                paddingRight: 10,
                paddingVertical: 15,
              }}
              onPress={() => {
                Share.share(
                  {
                    message:
                      'من کتابراه را روی موبایلم نصب کردم. اپلیکیشن کتابراه امکان دسترسی به هزاران کتاب، رمان و مجله را از طریق موبایل و تبلت برای شما فراهم می‌کند. شما با استفاده از اپلیکیشن کتابراه همیشه و همه جا به کتابخانه خود دسترسی دارید و می توانید به سادگی از هر فرصتی برای مطالعه استفاده کنید. در کتابراه برای همه سلیقه‌ها از داستان و رمان تا روانشناسی و علمی و... کتاب‌هایی پیدا می‌شود.\n' +
                      'دانلود رایگان:\n' +
                      'https://ketabrah.ir/go/37',
                    title: 'اشتراک‌گذاری',
                  },
                  {dialogTitle: 'اشتراک‌گذاری'}
                );
              }}
            />
          ),
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
