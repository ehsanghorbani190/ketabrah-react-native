import Modal from 'react-native-modal';
import ThemedText from '@/components/ThemedText';
import {useDispatch, useSelector} from 'react-redux';
import {
  logoutModalVisibilitySelector,
  setLogoutModalVisibility,
} from '@/core/state/slices/userAccountSlice';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ThemedButton from '@/components/ThemedButton';
import {auth_setUser} from '@/core/state/slices/authSlice';
export default function LogoutConfirmationModal() {
  const isVisible = useSelector(logoutModalVisibilitySelector);
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Modal
      style={{margin: 0}}
      animationIn="fadeIn"
      animationOut="fadeOut"
      coverScreen={false}
      isVisible={isVisible}
      onBackButtonPress={() => dispatch(setLogoutModalVisibility(false))}
      // Fixing the animation flicker
      backdropTransitionOutTiming={0}
      customBackdrop={
        <TouchableWithoutFeedback
          onPress={e => dispatch(setLogoutModalVisibility(false))}
        >
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={[{backgroundColor: theme.colors.card}, styles.container]}>
        <ThemedText style={styles.title}>آیا مطمئن هستید؟</ThemedText>
        <ThemedText style={styles.description}>
          با خروج از حساب کاربری همه‌ی فایل‌های دانلود شده، حذف خواهند شد.
        </ThemedText>
        <View style={[styles.buttonsContainer]}>
          <ThemedButton
            title={'خیر'}
            buttonStyle={styles.button}
            textStyle={{color: theme.colors.primary}}
            onPress={_ => {
              dispatch(setLogoutModalVisibility(false));
            }}
          />
          <ThemedButton
            title={'بله'}
            buttonStyle={styles.button}
            textStyle={{color: theme.colors.primary}}
            onPress={_ => {
              dispatch(setLogoutModalVisibility(false));
              dispatch(auth_setUser(null));
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#000',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '115%',
  },
  container: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    borderRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {fontSize: 16, marginBottom: 10},
  description: {marginBottom: 20},
  button: {marginLeft: 15, backgroundColor: 'transparent', width: 50},
  buttonsContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
