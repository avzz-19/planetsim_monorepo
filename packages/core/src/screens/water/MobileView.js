import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Body, colors } from '../../../utils/screenLayout'
import UgtCard from '../../components/UgtCard'
import { ugtCardData as ugt } from '../../data/ugtCardData'
import { Mode } from '../../data/ugtCardData'

function MobileView() {
  const states = ["UGT's", "OHT's", 'Towers']
  const [active, setActive] = useState("UGT's")

  return (
    <Body>
      <View style={[styles.row, styles.container]}>
        <View style={styles.row}>
          <Text>Mode: </Text>
          <Text>{Mode.auto}</Text>
        </View>
        <View>
          <Text style={styles.blue}>Change</Text>
        </View>
      </View>
      <View style={[styles.tabContainer, { alignSelf: 'center' }]}>
        <View style={[styles.row]}>
          {states.map((i) => (
            <Pressable
              style={styles.borderRight(i)}
              onPress={() => {
                setActive(i)
              }}
            >
              <Text style={active === i ? styles.activeTab : styles.tabs}>
                {i}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      {active === "UGT's" &&
        ugt.map((i) => (
          <View style={{ marginBottom: 20 }}>
            <UgtCard
              title={i.title}
              waterType={i.waterType}
              ltr={i.ltr}
              ft={i.ft}
              percentage={i.percentage}
              towers={i.towers}
              valveState={i.valveState}
              mode={Mode.auto}
            />
          </View>
        ))}
    </Body>
  )
}

export default MobileView

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  blue: {
    color: colors.primary,
  },
  tabs: {
    paddingHorizontal: 37,
    paddingVertical: 7,
  },
  tabContainer: {
    borderRadius: 4,
    borderColor: colors.primary,
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: 20,
  },
  borderRight: (i) => ({
    borderRightColor: colors.primary,
    borderRightWidth: i === 'Towers' ? 0 : 1,
  }),
  activeTab: {
    paddingHorizontal: 37,
    paddingVertical: 7,
    backgroundColor: colors.primary,
    color: colors.white,
  },
})
