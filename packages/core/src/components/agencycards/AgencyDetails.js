import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import { colors } from '../../../utils/screenLayout'

function AgencyDetails({ title, address, phone1, phone2 }) {
  return (
    <Surface style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.body}>{address}</Text>
      <Text style={styles.body}>Ph: {phone1}</Text>
      {phone2 && <Text style={styles.body}>Ph: {phone2}</Text>}
    </Surface>
  )
}

export default AgencyDetails

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 6,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 6,
  },
  wrapper: {
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: Platform.OS === 'ios' ? '100%' : '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  edit: {
    color: colors.primary,
  },
})
