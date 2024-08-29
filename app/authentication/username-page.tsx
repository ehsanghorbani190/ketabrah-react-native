import ThemedText from '@/components/ThemedText';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ThemedView from '@/components/ThemedView';
import {Image} from 'expo-image';
import images from '@/constants/Images';
import ThemedButton from '@/components/ThemedButton';
import InputWithLabel from '@/components/InputWithLabel';
import {useDispatch, useSelector} from 'react-redux';
import {
  auth_setUsername,
  authUsernameSelector,
} from '@/core/state/slices/authSlice';
import {openURL} from 'expo-linking';
import {useTheme} from '@react-navigation/native';
import usernameValidator from '@/core/helpers/usernameValidator';
import {router} from 'expo-router';
import {useState} from 'react';
export default function UsernamePage() {
  const username = useSelector(authUsernameSelector);
  const dispatch = useDispatch();
  const [error, setError] = useState<null | string>(null);
  const theme = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.inner_view}>
          <Image source={images.logoWithTypography} style={styles.logo} />
          <ThemedText style={styles.heading}>ورود | ثبت‌نام</ThemedText>
          <InputWithLabel
            input_props={{
              value: username,
              onChangeText: text => {
                dispatch(auth_setUsername(text));
                setError(null);
              },
            }}
            error={error}
            label={'شماره موبایل یا ایمیل خود را وارد کنید:'}
          />
          <ThemedButton
            title="ورود به کتابراه"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={_ => {
              if (usernameValidator(username))
                router.replace('/authentication/password-page');
              else {
                setError('لطفا شماره موبایل یا ایمیل معتبر وارد کنید.');
              }
            }}
          />
          <ThemedText style={styles.text}>
            با ورود به کتابراه،{' '}
            <TouchableOpacity
              onPress={_ => {
                openURL('https://ketabrah.ir/page/terms');
              }}
            >
              <ThemedText
                style={[{color: theme.colors.primary}, styles.policy]}
              >
                شرایط و قوانین
              </ThemedText>
            </TouchableOpacity>{' '}
            استفاده از خدمات را می‌پذیرید.
          </ThemedText>
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    flex: 1,
  },
  inner_view: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    width: '100%',
    paddingRight: 5,
    fontFamily: 'VazirBold',
    fontSize: 18,
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    width: 195,
    height: 60,
  },
  text: {
    fontSize: 14,
    marginTop: 25,
  },
  policy: {marginBottom: -7},
  button: {width: '100%', marginTop: 25, borderRadius: 10},
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
