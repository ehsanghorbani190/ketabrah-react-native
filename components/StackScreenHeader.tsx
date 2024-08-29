import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {IStackScreenHeaderProps} from '@/core/types/ui';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function StackScreenHeader(props: IStackScreenHeaderProps) {
  const theme = useTheme();
  return (
    <View style={[{backgroundColor: theme.colors.card}, styles.container]}>
      <Text style={[{color: theme.colors.primary}, styles.text]}>
        {props.title}
      </Text>
      <Pressable
        style={styles.button}
        onPress={e => {
          if (props.resetState) props.resetState();
          props.navigation.goBack();
        }}
      >
        <Ionicons
          name={'arrow-forward'}
          style={{color: theme.colors.primary}}
          size={20}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    shadowColor: '#999',
    shadowOpacity: 1,
    height: 80,
    direction: 'rtl',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    height: 55,
    width: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Vazir',
    paddingRight: 12,
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    verticalAlign: 'middle',
  },
});
