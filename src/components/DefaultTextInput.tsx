import React from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import DefaultText, { TextType } from './DefaultText'
import AppFonts from '../theme/fonts'
import AppColors from '../theme/colors'

export interface DefaultTextInputProps extends TextInputProps {
  label?: string
  containerStyle?: ViewStyle
}

function DefaultTextInput(props: DefaultTextInputProps) {
  const { containerStyle, style, label, ...rest } = props

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <DefaultText style={styles.label} type={TextType.LIGHT}>
          {label}
        </DefaultText>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[style, styles.input]}
          {...rest}
          underlineColorAndroid={'transparent'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: AppColors.silver,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  input: {
    color: 'black',
    fontFamily: AppFonts.normal,
    fontSize: 15,
    paddingVertical: 10,
  },
  label: {
    marginBottom: 5,
  },
})

export default DefaultTextInput
