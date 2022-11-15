import { Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Surface } from 'react-native-paper'
import { colors } from '../../../utils/screenLayout'
import Add from '../../assets/Add.png'
import AddNewAgency from '../tanker/AddNewAgency'

function AddNewAgencyButton() {
  const [modalVisible, setModalVisible] = useState(false)
  const [prompt, setPrompt] = useState(false)
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setPrompt(true)
          setModalVisible(true)
        }}
      >
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
      </TouchableOpacity>
      {prompt && (
        <AddNewAgency
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  )
}

export default AddNewAgencyButton
