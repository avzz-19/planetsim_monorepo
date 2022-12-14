import React from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Platform,
} from 'react-native'
import { Button } from 'react-native-paper'
import { colors } from '../../../utils/screenLayout'
import Close from '../../assets/Close.png'
import SetDate from './SetDate'
// import SetWaterLevels from './WaterLevelSlider'

function SetSchedule({ modalVisible, setModalVisible }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.top}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image source={Close} style={{ height: 24, width: 24 }} />
              </Pressable>
              <Text style={styles.modalText}>Set Schedule for water</Text>
            </View>
            <SetDate />
            {/* <SetWaterLevels /> */}
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Button
                mode='contained'
                buttonColor={colors.primary}
                style={styles.save}
                onPress={() => setModalVisible(!modalVisible)}
              >
                Save
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default SetSchedule

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    elevation: 5,
    height: '102%',
    width: '100%',
  },
  save: {
    width: Platform.OS === 'web' ? '90vw' : 200,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 22,
    paddingLeft: '13%',
    width: Platform.OS === 'web' ? '100vw' : '100%',
    color: 'black',
  },
})
