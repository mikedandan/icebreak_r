import React from 'react'
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'
import DefaultText from './DefaultText'
import AppColors from '../theme/colors'

export type DefaultButtonProps = Omit<TouchableOpacityProps, 'children'> & {
  text: string
  uppercaseText?: boolean
  containerStyle?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
}

function DefaultButton(props: DefaultButtonProps) {
  const {
    style,
    text,
    uppercaseText = true,
    containerStyle,
    textStyle,
    disabled = false,
    ...rest
  } = props
  const uppercaseTextStyle: TextStyle = {
    textTransform: uppercaseText ? 'uppercase' : 'none',
  }
  return (
    <TouchableOpacity
      style={[styles.touchable, style]}
      disabled={disabled}
      {...rest}>
      <View
        style={[
          styles.container,
          containerStyle,
          disabled && styles.disabledContainer,
        ]}>
        <DefaultText
          style={[
            styles.text,
            textStyle,
            uppercaseTextStyle,
            disabled && styles.disabledText,
          ]}>
          {text}
        </DefaultText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {},
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: AppColors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  disabledContainer: {
    backgroundColor: AppColors.silver,
  },
  disabledText: {
    color: AppColors.geyser,
  },
})

export default DefaultButton
