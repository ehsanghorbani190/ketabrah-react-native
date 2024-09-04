import UserAccountRow from '@/components/user-account/UserAccountRow';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {authUserSelector} from '@/core/state/slices/authSlice';
import {TUser} from '@/core/types/data';
import {convertToPersianDigits} from '@/core/helpers/numberConverter';

export default function UserAccountInformationRow() {
  const theme = useTheme();
  const user: TUser = useSelector(authUserSelector);
  return (
    <UserAccountRow
      right={
        <ThemedView style={styles.edit_row}>
          <ThemedText style={{fontSize: 16, marginBottom: 3}}>
            {user.first_name} {user.last_name}
          </ThemedText>
          <ThemedText style={styles.edit_row_text}>
            {convertToPersianDigits(user.phone)}
          </ThemedText>
          <ThemedText style={styles.edit_row_text}>{user.email}</ThemedText>
          <ThemedText
            style={[{color: theme.colors.primary}, styles.edit_row_text]}
          >
            ویرایش اطلاعات کاربری
          </ThemedText>
        </ThemedView>
      }
      onPress={e => {}}
    />
  );
}

const styles = StyleSheet.create({
  edit_row: {
    textAlign: 'right',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  edit_row_text: {textAlign: 'right', marginVertical: 3},
});
