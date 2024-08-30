import UserAccountRow from '@/components/user-account/UserAccountRow';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function UserAccountInformationRow() {
  const theme = useTheme();
  return (
    <UserAccountRow
      right={
        <ThemedView style={styles.edit_row}>
          <ThemedText style={{fontSize: 16, marginBottom: 3}}>
            احسان قربانی
          </ThemedText>
          <ThemedText style={styles.edit_row_text}>۰۹۱۵۶۶۴۶۹۳۶</ThemedText>
          <ThemedText style={styles.edit_row_text}>
            ehsanghorbani190@gmail.com
          </ThemedText>
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
