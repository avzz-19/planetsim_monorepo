import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Surface } from 'react-native-paper'
import { Breakpoints, colors } from '../../../utils/screenLayout'
import Tanker from '../../assets/TankerWhite.png'
import Agency from '../../assets/Agency.png'
import Plus from '../../assets/Plus.png'
import AddNewAgency from './AddNewAgency'

function RecordTankerArrival({ AddAgency, RecordTanker }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [prompt, setPrompt] = useState(false)
  return (
    <>
      <Surface style={styles.container}>
        <View
          style={{
            flexDirection:
              useWindowDimensions().width > Breakpoints.sm ? 'row' : 'column',
            alignSelf:
              useWindowDimensions().width > Breakpoints.sm
                ? 'center'
                : 'flex-start',
          }}
        >
          {RecordTanker && (
            <Image
              source={Tanker}
              style={{ height: 22, width: 40, marginRight: 10 }}
            />
          )}

          {AddAgency && (
            <Image
              source={Agency}
              style={{ height: 38, width: 40, marginRight: 10 }}
            />
          )}
          {RecordTanker && (
            <Text style={styles.text}>Record Tanker Arrival</Text>
          )}
          {AddAgency && <Text style={styles.text}>Add New Agency</Text>}
        </View>
        {AddAgency && (
          <TouchableOpacity
            onPress={() => {
              setPrompt(true)
              setModalVisible(true)
            }}
          >
            <Image source={Plus} style={{ height: 32, width: 32 }} />
          </TouchableOpacity>
        )}
        {RecordTanker && (
          <TouchableOpacity onPress={() => {}}>
            <Image source={Plus} style={{ height: 32, width: 32 }} />
          </TouchableOpacity>
        )}
      </Surface>
      {prompt && (
        <AddNewAgency
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  )
}

export default RecordTankerArrival

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    paddingTop: 5,
  },
})
