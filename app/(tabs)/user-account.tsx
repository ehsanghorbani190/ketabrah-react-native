import {useDispatch, useSelector} from 'react-redux';
import {authUserSelector} from '@/core/state/slices/authSlice';
import LoginToContinuePage from '@/pages/LoginToContinuePage';
import UserAccountRow from '@/components/user-account/UserAccountRow';
import ThemedText from '@/components/ThemedText';
import Badge from '@/components/Badge';
import ThemedScrollView from '@/components/ThemedScrollView';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import {Image} from 'expo-image';
import images from '@/constants/Images';
import UserAccountInformationRow from '@/components/user-account/UserAccountInformationRow';
import {setLogoutModalVisibility} from '@/core/state/slices/userAccountSlice';
export default function UserAccountScreen() {
  const theme = useTheme();
  const user = useSelector(authUserSelector);
  //TODO in future, select user profile data and construct the first row based on them
  const dispatch = useDispatch();

  return user === null ? (
    <LoginToContinuePage />
  ) : (
    <ThemedScrollView>
      <UserAccountInformationRow />
      <UserAccountRow
        right="شارژ کیف پول"
        onPress={e => {}}
        icon={style => (
          <MaterialIcons style={style} name={'wallet'} size={25} />
        )}
        left={
          <ThemedText
            style={[{color: theme.colors.primary}, styles.wallet_worth]}
          >
            ۰ تومان
          </ThemedText>
        }
      />
      <UserAccountRow
        right="کلاب کتابراه: تخفیف‌ها و امتیازها"
        onPress={e => {}}
        icon={style => <Feather style={style} name={'award'} size={25} />}
        left={<Badge>۱</Badge>}
      />
      <UserAccountRow
        right="کتاب‌های نشان شده"
        onPress={e => {}}
        icon={style => (
          <MaterialCommunityIcons
            style={style}
            name={'bookmark-multiple-outline'}
            size={25}
          />
        )}
      />
      <UserAccountRow
        right="نظرات من"
        onPress={e => {}}
        icon={style => (
          <MaterialCommunityIcons
            style={style}
            name={'message-reply-outline'}
            size={25}
          />
        )}
        left={<Badge>۹۹</Badge>}
      />
      <UserAccountRow
        right="مدیریت دستگاه‌ها"
        onPress={e => {}}
        icon={style => (
          <MaterialIcons style={style} name={'devices'} size={25} />
        )}
      />
      <UserAccountRow
        right="راهنمایی و پشتیبانی"
        onPress={e => {}}
        icon={style => (
          <FontAwesome6 style={style} name={'circle-question'} size={25} />
        )}
      />
      <UserAccountRow
        right="شرایط استفاده"
        onPress={e => {}}
        icon={style => (
          <MaterialCommunityIcons
            style={style}
            name={'file-document-outline'}
            size={25}
          />
        )}
      />
      <UserAccountRow
        right="درباره‌ی کتابراه"
        onPress={e => {}}
        icon={style => (
          <Image source={images.logo} style={[styles.logo, style]} />
        )}
      />
      <UserAccountRow
        right="خروج از حساب کاربری"
        onPress={e => dispatch(setLogoutModalVisibility(true))}
        icon={style => (
          <MaterialIcons style={style} name={'logout'} size={25} />
        )}
        no_border={true}
      />
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  wallet_worth: {
    fontFamily: 'VazirBold',
  },
  logo: {
    width: 25,
    height: 25,
  },
});
