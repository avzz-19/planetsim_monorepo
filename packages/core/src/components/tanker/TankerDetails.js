import React, { useState } from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { colors } from '../../../utils/screenLayout'
import Close from '../../assets/Close.png'
import TankerMan from '../../assets/TankerMan.png'
import PumpButton from '../common/PumpButton'

function TankerDetails({ tankerModalVisible, setTankerModalVisible }) {
  const [text, onChangeText] = useState('')
  const [otherText, onChangeOtherText] = useState('')
  const litres = ['10,000', '15,000', '20,000', 'Other']
  const tanks = [
    'UGT Borewell water abcd',
    'UGT Borewell water efgh',
    'UGT Borewell water hijkl',
  ]
  const [active, setActive] = useState('')
  const [activeTank, setActiveTank] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent
        visible={tankerModalVisible}
        onRequestClose={() => {
          setTankerModalVisible(!tankerModalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.top}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setTankerModalVisible(!tankerModalVisible)}
              >
                <Image source={Close} style={{ height: 24, width: 24 }} />
              </Pressable>
              <Text style={styles.modalText}>Tanker Details</Text>
            </View>
            <Image source={TankerMan} style={styles.img} />
            <View style={styles.main}>
              <Text style={styles.black}>Agency Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <Text style={styles.black}>Water supplied (litres):</Text>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {litres.map((i) => (
                    <TouchableOpacity
                      style={active === i ? styles.activeLtr : styles.box}
                      onPress={() => {
                        setActive(i)
                      }}
                    >
                      <Text style={styles.ltr}>{i}</Text>
                    </TouchableOpacity>
                  ))}
                  {active === 'Other' && (
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeOtherText}
                      value={otherText}
                      placeholder='Enter Liters'
                    />
                  )}
                </View>
              </View>
              <Text style={styles.black}>Underground tank:</Text>
              <View style={{ justifyContent: 'center' }}>
                {tanks.map((i) => (
                  <TouchableOpacity
                    style={activeTank === i ? styles.activeTank : styles.tank}
                    onPress={() => {
                      setActiveTank(i)
                    }}
                  >
                    <Text style={styles.ltr}>{i}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={{ marginBottom: 30 }}>
              <PumpButton
                isEnabled={isEnabled}
                handleClick={() => {
                  setIsEnabled(!isEnabled)
                }}
                label='filling'
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default TankerDetails

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    alignItems: 'center',
    elevation: 5,
    height: '102%',
    width: '100%',
    backgroundColor: '#F2F2F2',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  black: {
    color: 'black',
    marginBottom: 5,
    marginTop: 10,
  },
  top: {
    position: 'absolute',
    top: 20,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  modalText: {
    fontSize: 22,
    paddingLeft: '13%',
    width: Platform.OS === 'web' ? '100vw' : '100%',
    color: 'black',
  },
  img: {
    height: 134,
    width: 242,
    marginTop: 100,
    borderRadius: 4,
  },
  main: { marginTop: 20, flex: 1, alignSelf: 'center', marginLeft: 10 },
  input: {
    height: 40,
    marginBottom: 12,
    marginTop: 5,
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 4,
    color: 'black',
    width: 350,
  },
  box: {
    width: '45%',
    backgroundColor: 'white',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    height: 50,
  },
  ltr: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
  },
  activeLtr: {
    borderColor: colors.primary,
    borderWidth: 1,
    width: '45%',
    padding: 15,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
  },
  tank: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    height: 50,
  },
  activeTank: {
    borderColor: colors.primary,
    borderWidth: 1,
    width: '90%',
    padding: 15,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
  },
})
