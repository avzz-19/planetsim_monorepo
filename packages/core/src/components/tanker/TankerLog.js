import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tick from '../../assets/Tick.png'
import Filling from '../../assets/Filling.png'
import TankerMan from '../../assets/TankerMan.png'

function TankerLog({
  agency,
  tankName,
  beforeFill,
  afterFill,
  estSupply,
  status,
  start,
  end,
  date,
}) {
  return (
    <View style={styles.wrapper}>
      <Image source={TankerMan} style={{ height: 100, width: '100%' }} />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{agency}</Text>
        <View style={styles.row}>
          <Text style={[styles.col1, { marginTop: 10 }]}>Tank Name</Text>
          <Text style={styles.col2}>{tankName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.col1}>Before Fill</Text>
          <Text style={styles.col2}>{beforeFill}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.col1}>After Fill</Text>
          <Text style={styles.col2}>{afterFill}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.col1}>Estimated Supply</Text>
          <Text style={styles.col2}>{estSupply}</Text>
        </View>
        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderColor: '#EEE',
              paddingTop: 10,
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={status === 'Filling now' ? Filling : Tick}
              style={styles.img}
            />
            <Text style={styles.black}>{status}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.black}>{start}</Text>
            <Text style={styles.black}> - {end}</Text>
            <Text style={styles.black}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TankerLog

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 4,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: -35,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginVertical: 2,
  },
  col1: {
    flex: 0.4,
    color: 'grey',
  },
  col2: {
    flex: 0.6,
    color: 'black',
  },
  img: {
    height: 22,
    width: 22,
    marginRight: 5,
  },
  time: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    padding: 8,
    borderRadius: 12,
    width: 200,
  },
  black: {
    color: 'black',
  },
})
