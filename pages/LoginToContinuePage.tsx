import ThemedView from '@/components/ThemedView';
import {Image} from 'expo-image';
import images from '@/constants/Images';
import ThemedText from '@/components/ThemedText';
import ThemedButton from '@/components/ThemedButton';
import {router} from 'expo-router';
import {StyleSheet} from 'react-native';

export default function LoginToContinuePage() {
  return (
    <ThemedView style={styles.container}>
      <Image source={images.logoWithTypography} style={styles.logo} />
      <ThemedText style={styles.text}>
        برای ادامه‌ی کار، وارد حساب کاربری خود شوید یا ثبت نام کنید.
      </ThemedText>
      <ThemedButton
        title="ورود | ثبت‌نام"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={e => {
          router.push('/authentication/username-page');
        }}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 190,
    paddingHorizontal: 25,
  },
  logo: {
    width: 195,
    height: 60,
  },
  text: {
    flexWrap: 'wrap',
    display: 'flex',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 14,
    lineHeight: 34,
  },
  button: {width: '100%', marginTop: 75, borderRadius: 10},
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
