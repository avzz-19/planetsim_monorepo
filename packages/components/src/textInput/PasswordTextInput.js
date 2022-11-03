import React from 'react'
import { View } from 'react-native'
import { TextInput, HelperText, useTheme } from 'react-native-paper'
import PropTypes from 'prop-types'

export function PasswordTextInput(props) {
  const { colors } = useTheme()
  const [passwordValue, setPasswordValue] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(true)

  const validatePassword = (password) => {
    if (password) {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      return re.test(password)
    }
    return true
  }

  return (
    <View>
      <TextInput
        {...props}
        onChangeText={(text) => {
          setPasswordValue(text)
          props.onValidate(validatePassword(text))
          props.onChangeText(text)
        }}
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        theme={{
          colors: {
            onSurface: colors.surface,
          },
        }}
      />
      {passwordValue && (
        <HelperText type='error' visible={!validatePassword(passwordValue)}>
          {props.errorMessage}
        </HelperText>
      )}
    </View>
  )
}

PasswordTextInput.defaultProps = {
  errorMessage: 'Password is invalid',
}

PasswordTextInput.propTypes = {
  onValidate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}
