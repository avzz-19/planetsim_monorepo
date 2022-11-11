import { Text, Image } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import { colors } from '../../../utils/screenLayout'
import Add from '../../assets/Add.png'

function AddNewAgencyButton() {
  return (
    <Surface
      style={{
        flexDirection: 'row',
        backgroundColor: '#F1F7F9',
        borderRadius: 20,
        padding: 10,
        width: 200,
        justifyContent: 'space-around',
        alignSelf: 'center',
      }}
    >
      <Image source={Add} style={{ height: 15, width: 15 }} />
      <Text style={{ color: colors.primary }}>Add a new agency</Text>
    </Surface>
  )
}

export default AddNewAgencyButton
