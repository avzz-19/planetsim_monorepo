import { View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Add from '../../assets/AddSchedule.png'
import SetSchedule from '../water/WaterSchedule'

function AddButton() {
  const [modalVisible, setModalVisible] = useState(false)
  const [prompt, setPrompt] = useState(false)
  return (
    <>
      <View style={{ marginRight: 20 }}>
        <TouchableOpacity
          onPress={() => {
            setPrompt(true)
            setModalVisible(true)
          }}
        >
          <Image source={Add} style={{ height: 32, width: 32 }} />
        </TouchableOpacity>
      </View>
      {prompt && (
        <SetSchedule
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  )
}

export default AddButton
