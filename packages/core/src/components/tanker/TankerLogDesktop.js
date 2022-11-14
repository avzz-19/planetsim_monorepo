import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tick from '../../assets/Tick.png'
import Filling from '../../assets/Filling.png'
import DummyImage from '../../assets/DummyImage.png'

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
      <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        <Text style={styles.title}>{agency}</Text>
        <View style={styles.row}>
          <Image
            source={DummyImage}
            style={{ height: 60, width: 80, margin: 20 }}
          />
          <View style={styles.col}>
            <Text style={[styles.col1, { marginTop: 10 }]}>Tank Name</Text>
            <Text style={styles.col2}>{tankName}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.col1}>Before Fill</Text>
            <Text style={styles.col2}>{beforeFill}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.col1}>After Fill</Text>
            <Text style={styles.col2}>{afterFill}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.col1}>Estimated Supply</Text>
            <Text style={styles.col2}>{estSupply}</Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderColor: '#EEE',
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
            <Text>{status}</Text>
          </View>
          <View style={styles.time}>
            <Text>{start}</Text>
            <Text> - {end}</Text>
            <Text>{date}</Text>
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
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginVertical: 2,
  },
  col: {
    flex: 0.3,
  },
  col1: {
    flex: 0.4,
    color: 'grey',
  },
  col2: {
    flex: 0.6,
  },
  img: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  time: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    padding: 8,
    borderRadius: 12,
    width: 200,
  },
})
