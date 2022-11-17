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
import Close from '../../assets/Close.png'
import NewAgency from './NewAgency'

function AddNewAgency({ modalVisible, setModalVisible }) {
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
              <Text style={styles.modalText}>Add New Agency</Text>
            </View>
            <NewAgency />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddNewAgency

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
    backgroundColor: '#FFF',
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
  modalText: {
    fontSize: 22,
    paddingLeft: '13%',
    width: Platform.OS === 'web' ? '100vw' : '100%',
    color: 'black',
  },
})
