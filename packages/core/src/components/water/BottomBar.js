import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Tanker from '../../assets/Taker.png'
import { colors } from '../../../utils/screenLayout'
import SetSchedule from './WaterSchedule'

function BottomBar({ tankerButton, scheduleButton }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [prompt, setPrompt] = useState(false)
  return (
    <>
      {tankerButton && (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[
              styles.bottomContainerElement,
              { backgroundColor: '#F1F7F9', alignItems: 'center' },
            ]}
          >
            <Image source={Tanker} style={{ height: 16.55, width: 30 }} />
            <Text style={styles.bottomElementText}>Call Tanker</Text>
          </TouchableOpacity>
        </View>
      )}
      {scheduleButton && (
        <View style={styles.bottomContainer}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPrompt(true)
                setModalVisible(true)
              }}
            >
              <Text style={styles.bottomElementText}>Create new schedule</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {prompt && (
        <SetSchedule
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  )
}

export default BottomBar

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: colors.white,
    width: '100%',
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '1%',
    position: 'absolute',
    bottom: 0,
  },
  bottomContainerElement: {
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '40%',
    height: '60%',
    borderRadius: 16,
  },
  bottomElementText: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.primary,
  },
  button: {
    borderColor: colors.primary,
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
  },
})
