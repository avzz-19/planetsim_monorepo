import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import Edit from '../../assets/Edit.png'

function AgencyDetailsDesktop({ title, address, phone1, phone2 }) {
  return (
    <Surface style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Surface style={styles.edit}>
          <Image source={Edit} style={{ height: 16, width: 16 }} />
        </Surface>
      </View>
      <View style={styles.row}>
        <Text style={styles.body}>{address}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={[styles.phone, styles.body]}>Ph: {phone1}</Text>
          {phone2 && (
            <Text style={[styles.phone, styles.body]}>Ph: {phone2}</Text>
          )}
        </View>
      </View>
    </Surface>
  )
}

export default AgencyDetailsDesktop

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
    color: 'black',
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 6,
    color: 'black',
  },
  phone: {
    marginRight: 40,
    backgroundColor: '#ECECEC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 24,
  },
  wrapper: {
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  edit: {
    color: 'white',
    borderRadius: 50,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
