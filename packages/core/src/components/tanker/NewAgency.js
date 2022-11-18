import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
// import CheckBox from '@react-native-community/checkbox'
import { useDispatch } from 'react-redux'
import { colors } from '../../../utils/screenLayout'

function NewAgency() {
  const [text, onChangeText] = React.useState('')
  const [number, onChangeNumber] = React.useState(null)
  const [number2, onChangeNumber2] = React.useState(null)
  const [address, onChangeAddress] = React.useState('')
  const [address2, onChangeAddress2] = React.useState('')
  const [pin, onChangePin] = React.useState(null)
  const [city, onChangeCity] = React.useState('')
  const [state, onChangeState] = React.useState('')
  const [country, onChangeCountry] = React.useState('')
  //   const [checked, setChecked] = React.useState(false)
  //   const [checked2, setChecked2] = React.useState(false)
  const dispatch = useDispatch()
  const dispatchObj = {
    name: text,
    Phone1: number,
    Phone2: number2,
    address: `${address} ${address2} ${city} ${pin} ${state} ${country}`,
  }
  const handleAdd = () => {
    dispatch({ type: 'ADD_AGENCY', payload: dispatchObj })
  }
  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={{
          minWidth: '90%',
        }}
      >
        <Text style={styles.label}>Enter tank agency name*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.label}>Phone 1*</Text>
        {/* <CheckBox
        value={checked}
        onPress={() => {
          setChecked(!checked)
        }}
        animationDuration={0}
        boxType='square'
        onFillColor={colors.primary}
        onCheckColor='#FFF'
        onTintColor='#FFF'
      /> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType='numeric'
          maxLength={10}
        />
        <Text style={styles.label}>Phone 2</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          keyboardType='numeric'
          maxLength={10}
        />
        <Text style={styles.label}>Address line 1*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        <Text style={styles.label}>Address line 2*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress2}
          value={address2}
        />
        <Text style={styles.label}>Pin code*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePin}
          value={pin}
          keyboardType='numeric'
          maxLength={6}
        />
        <Text style={styles.label}>City*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCity}
          value={city}
        />
        <Text style={styles.label}>State*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeState}
          value={state}
        />
        <Text style={styles.label}>Country*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCountry}
          value={country}
        />
        <Button
          mode='contained'
          buttonColor={colors.primary}
          onPress={handleAdd}
          style={{
            width: Platform.OS === 'web' ? '90vw' : 200,
            marginVertical: 10,
            alignSelf: 'center',
          }}
        >
          Save
        </Button>
      </ScrollView>
    </View>
  )
}

export default NewAgency

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    marginTop: 5,
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    color: 'black',
  },
  wrapper: {
    marginTop: 80,
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    color: 'black',
  },
})
