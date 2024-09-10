import {useSelector} from 'react-redux';
import {authUserSelector} from '@/core/state/slices/authSlice';
import LoginToContinuePage from '@/pages/LoginToContinuePage';
import {Dropdown} from 'react-native-element-dropdown';
import ThemedView from '@/components/ThemedView';
import {StyleSheet} from 'react-native';
import ThemedText from '@/components/ThemedText';
import {Entypo} from '@expo/vector-icons';

export default function BookShelfScreen() {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const user = useSelector(authUserSelector);
  return user === null ? (
    <LoginToContinuePage />
  ) : (
    <ThemedView style={styles.dropDownContainer}>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        onChange={e => {
          console.warn(e);
        }}
        search={false}
        value="8"
        renderRightIcon={() => null}
        renderLeftIcon={() => <Entypo name={'triangle-down'} />}
        style={{
          width: 120,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        selectedTextStyle={{textAlign: 'right'}}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  dropDownContainer: {
    elevation: 5,
    shadowColor: 'black',
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
});
