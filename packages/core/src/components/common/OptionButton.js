import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Modal, Portal, Provider, Divider } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import Options from '../../assets/Options.png'

function OptionButton() {
  const [visible, setVisible] = useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const navigation = useNavigation()
  const route = useRoute()
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}
          style={styles.wrapper}
          dismissable
          theme={{
            colors: {
              backdrop: 'transparent',
            },
          }}
        >
          {route.name === 'Water' && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Schedule')
                }}
              >
                <Text style={styles.item}>Schedule</Text>
              </TouchableOpacity>
              <Divider bold style={{ backgroundColor: '#EEE', width: 120 }} />
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.item}>Reports</Text>
              </TouchableOpacity>
            </View>
          )}
          {route.name === 'Tanker' && (
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.item}>Reports</Text>
              </TouchableOpacity>
            </View>
          )}
        </Modal>
      </Portal>
      <TouchableOpacity
        style={{ marginRight: 20, marginTop: Platform.OS === 'web' ? 23 : 15 }}
        onPress={visible ? hideModal : showModal}
      >
        <Image source={Options} style={{ width: 4, height: 18 }} />
      </TouchableOpacity>
    </Provider>
  )
}

export default OptionButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 150,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 0 : '100%',
    right: 0,
    alignItems: 'center',
    paddingVertical: 5,
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  item: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
})
