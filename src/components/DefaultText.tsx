import React, { FC } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import AppFonts from '../theme/fonts'
import AppColors from '../theme/colors'

export enum TextType {
  NORMAL,
  BOLD,
  LIGHT,
  ITALIC,
}

export interface DefaultTextProps extends TextProps {
  type?: TextType
}

const getStyleFromType = (type: TextType) => {
  switch (type) {
    case TextType.BOLD:
      return {
        fontFamily: AppFonts.bold,
      }
    case TextType.ITALIC:
      return {
        fontFamily: AppFonts.italic,
      }
    case TextType.LIGHT:
      return {
        fontFamily: AppFonts.light,
      }
    default:
      return {
        fontFamily: AppFonts.normal,
      }
  }
}

const DefaultText: FC<DefaultTextProps> = (props) => {
  const { style, type = TextType.NORMAL, children, ...rest } = props
  return (
    <Text style={[getStyleFromType(type), styles.default, style]} {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 15,
    color: AppColors.primaryText,
  },
})

export default DefaultText
