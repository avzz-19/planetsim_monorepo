import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, HelperText, useTheme } from 'react-native-paper'
import PropTypes from 'prop-types'

export function EmailTextInput(props) {
  const { colors } = useTheme()
  const [emailValue, setEmailValue] = React.useState('')
  const { disabled = false, onChangeText, onValidate } = props
  const validateEmail = (email) => {
    if (email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
    return true
  }

  return (
    <View style={disabled && styles.disabled}>
      <TextInput
        {...props}
        onChangeText={(text) => {
          setEmailValue(text)
          onValidate(validateEmail(text))
          onChangeText(text)
        }}
        disabled={disabled}
        theme={{
          colors: {
            onSurface: colors.surface,
          },
        }}
      />
      {emailValue && (
        <HelperText type='error' visible={!validateEmail(emailValue)}>
          {props.errorMessage}
        </HelperText>
      )}
    </View>
  )
}

EmailTextInput.defaultProps = {
  errorMessage: 'Email address is invalid!',
}

EmailTextInput.propTypes = {
  onValidate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

const styles = StyleSheet.create({
  disabled: {
    borderColor: '#808080',
    borderWidth: '1px',
    borderRadius: 4,
    marginTop: 5,
    height: 40,
  },
})
