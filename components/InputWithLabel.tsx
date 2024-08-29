import {IExtendedTheme, IInputWithLabelProps} from '@/core/types/ui';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TextInput} from 'react-native';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import {useState} from 'react';

export default function InputWithLabel(props: IInputWithLabelProps) {
  const theme: IExtendedTheme = useTheme();
  const [focused, setIsFocused] = useState(false);

  const {label, error, error_props, container_props, label_props, input_props} =
    props;
  const {style: container_styles, ...rest_container_props} =
    container_props || {};
  const {style: label_styles, ...rest_label_props} = label_props || {};
  const {style: error_styles, ...rest_error_props} = error_props || {};
  const {
    style: input_styles,
    onFocus,
    onBlur,
    ...rest_input_props
  } = input_props;
  return (
    <ThemedView
      style={[styles.container, container_props ? container_styles : {}]}
      {...(container_props ? rest_container_props : {})}
    >
      {label ? (
        <ThemedText
          style={[styles.label, label_props ? label_styles : {}]}
          {...(label_props ? rest_label_props : {})}
        >
          {label}
        </ThemedText>
      ) : null}
      <TextInput
        style={[
          {
            backgroundColor: theme.other_colors.input_background,
            borderColor: error
              ? theme.other_colors?.error
              : theme.colors.primary,
            borderWidth: focused ? 2 : 0,
          },
          styles.input,
          input_styles,
        ]}
        onFocus={e => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={e => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
        cursorColor={theme.colors.primary}
        selectionColor={theme.colors.primary}
        {...rest_input_props}
      />
      {error ? (
        <ThemedText
          style={[
            {
              color: theme.other_colors?.error,
            },
            styles.error,
            error_props ? error_styles : {},
          ]}
          {...(error_props ? rest_error_props : {})}
        >
          {error}
        </ThemedText>
      ) : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    paddingRight: 5,
    fontSize: 14,
  },
  input: {
    width: '100%',
    paddingVertical: 3,
    fontFamily: 'Vazir',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    height: 50,
  },
  error: {
    paddingRight: 5,
    fontSize: 12,
    marginTop: 10,
  },
});
