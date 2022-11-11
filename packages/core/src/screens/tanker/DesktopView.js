import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RecordTankerArrival from '../../components/tanker/RecordTankerArrival'
import { Body, colors } from '../../../utils/screenLayout'
import DesktopSideBar from '../../components/desktopOnly/DesktopSideBar'
import AgencyDetailsDesktop from '../../components/agencycards/AgencyDetailsDesktop'
import { agencyData } from '../../data/agencyData'

function DesktopView(props) {
  const states = ['Tanker Logs', 'Agency Details']
  const [active, setActive] = useState('Tanker Logs')
  return (
    <View>
      <DesktopSideBar {...props} />
      <View style={{ marginLeft: '20%' }}>
        <View
          style={[
            styles.tabContainer,
            {
              alignSelf: 'flex-start',
              paddingLeft: '5%',
              backgroundColor: '#FFF',
              width: '100%',
            },
          ]}
        >
          <View style={[styles.row]}>
            {states.map((i) => (
              <Pressable
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
          <View style={{ width: '91.5%', alignSelf: 'center' }}>
            <RecordTankerArrival RecordTanker />
          </View>
        )}
        {active === 'Agency Details' && (
          <Body styleProps={{ marginBottom: 60 }}>
            <View style={{ width: '91.5%', alignSelf: 'center' }}>
              <RecordTankerArrival AddAgency />
            </View>
            {agencyData.map((e) => (
              <AgencyDetailsDesktop
                title={e.name}
                address={e.address}
                phone1={e.Phone1}
                phone2={e.Phone2}
              />
            ))}
          </Body>
        )}
      </View>
    </View>
  )
}

export default DesktopView

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
    marginBottom: 20,
    paddingTop: 10,
  },
  activeTab: {
    borderColor: colors.primary,
    borderBottomWidth: 1,
    paddingHorizontal: 37,
    paddingVertical: 7,
    backgroundColor: colors.white,
    color: colors.primary,
  },
})
