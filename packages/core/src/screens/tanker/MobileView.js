import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RecordTankerArrival from '../../components/RecordTankerArrival'
import { colors } from '../../../utils/screenLayout'
import AddNewAgencyButton from '../../components/common/AddNewAgencyButton'

function MobileView() {
  const states = ['Tanker Logs', 'Agency Details']
  const [active, setActive] = useState('Tanker Logs')
  return (
    <View>
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
      {active === 'Tanker Logs' && (
        <View style={{ height: '100%' }}>
          <RecordTankerArrival />
          <View style={{ position: 'fixed', bottom: 3, alignSelf: 'center' }}>
            <AddNewAgencyButton />
          </View>
        </View>
      )}
    </View>
  )
}

export default MobileView

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderRightWidth: i === 'Agency Details' ? 0 : 1,
  }),
  activeTab: {
    paddingHorizontal: 37,
    paddingVertical: 7,
    backgroundColor: colors.primary,
    color: colors.white,
  },
})
