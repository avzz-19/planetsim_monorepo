import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tick from '../../assets/Tick.png'
import Filling from '../../assets/Filling.png'
import DummyImage from '../../assets/DummyImage.png'

function TankerHistories({
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
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{agency}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={DummyImage}
            style={{
              height: 60,
              width: '20%',
              borderRadius: 5,
              margin: 5,
              alignSelf: 'center',
            }}
          />
          <View style={{ width: '80%', height: 100 }}>
            <View style={styles.row}>
              <Text style={[styles.col1]}>Tank Name</Text>
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
          </View>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderColor: '#EEE',
            padding: 10,
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
  )
}

export default TankerHistories

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 4,
    width: '90%',
    alignSelf: 'center',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginVertical: 1,
  },
  col1: {
    flex: 0.5,
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
