import React from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DefaultTextInput from '../../components/DefaultTextInput'
import DefaultText, { TextType } from '../../components/DefaultText'
import DefaultButton from '../../components/DefaultButton'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthenticationStackParamsList } from '../../navigation/types'

type FormData = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

function Login(
  props: StackScreenProps<AuthenticationStackParamsList, 'Login'>,
) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  const onSignUp = () => {
    props.navigation.navigate('Signup')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient style={styles.container} colors={['#42AAD8', '#A8D7F7']}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/icebreakr-logo-icon.png')}
            style={styles.logo}
          />
          <DefaultText style={styles.title} type={TextType.BOLD}>
            Log In
          </DefaultText>
        </View>
        <View style={styles.form}>
          <Controller
            control={control}
            name={'email'}
            render={({ field: { onChange, onBlur, value } }) => (
              <DefaultTextInput
                label={'Email'}
                containerStyle={styles.emailInputContainer}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name={'password'}
            render={({ field: { onChange, onBlur, value } }) => (
              <DefaultTextInput
                label={'Password'}
                containerStyle={styles.emailInputContainer}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={true}
              />
            )}
          />
        </View>

        <DefaultButton
          text={'Login'}
          style={styles.loginButton}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        />
        <View style={styles.signUpContainer}>
          <DefaultText>Don't have an account?</DefaultText>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={onSignUp}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <DefaultText style={styles.signUpButtonText}>Sign Up</DefaultText>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  form: {
    marginHorizontal: '10%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  emailInputContainer: {
    marginBottom: 20,
  },
  loginButton: {
    marginHorizontal: '10%',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signUpButton: {
    marginLeft: 5,
  },
  signUpButtonText: {
    textDecorationLine: 'underline',
  },
})

export default Login
