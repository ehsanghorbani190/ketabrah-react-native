import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import ThemedView from '@/components/ThemedView';
import {Image} from 'expo-image';
import images from '@/constants/Images';
import ThemedButton from '@/components/ThemedButton';
import InputWithLabel from '@/components/InputWithLabel';
import {useDispatch, useSelector} from 'react-redux';
import {
  auth_setPassword,
  auth_setUser,
  authPasswordSelector,
} from '@/core/state/slices/authSlice';
import {openURL} from 'expo-linking';
import {router} from 'expo-router';
import {useTheme} from '@react-navigation/native';
export default function PasswordPage() {
  const password = useSelector(authPasswordSelector);
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.inner_view}>
          <Image source={images.logoWithTypography} style={styles.logo} />
          <InputWithLabel
            input_props={{
              value: password,
              onChangeText: text => {
                dispatch(auth_setPassword(text));
              },
              secureTextEntry: true,
            }}
            label={'رمز عبور را وارد کنید:'}
            label_props={{style: styles.label}}
          />
          <ThemedButton
            buttonStyle={[
              {marginTop: 5, marginBottom: 5},
              styles.transparent_button,
            ]}
            textStyle={[
              {color: theme.colors.primary},
              styles.transparent_button_text,
            ]}
            title="ورود با رمز یکبار مصرف >"
          />
          <ThemedButton
            buttonStyle={styles.transparent_button}
            textStyle={[
              {color: theme.colors.primary},
              styles.transparent_button_text,
            ]}
            title="فراموشی رمز عبور >"
          />
          <ThemedButton
            title="ادامه"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={_ => {
              // TODO validate user via sagas and then move to the home page
              dispatch(auth_setUser({}));
              router.replace('/(tabs)/user-account');
            }}
          />
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
  logo: {
    width: 195,
    height: 60,
  },
  button: {width: '100%', marginTop: 25, borderRadius: 10},
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  label: {
    fontFamily: 'VazirBold',
    fontSize: 18,
    marginTop: 40,
    paddingRight: 5,
  },
  transparent_button: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingVertical: 0,
    borderRadius: 0,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  transparent_button_text: {},
});
