import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RecordTankerArrival from '../../components/tanker/RecordTankerArrival'
import { Body, colors } from '../../../utils/screenLayout'
import DesktopSideBar from '../../components/desktopOnly/DesktopSideBar'
import AgencyDetailsDesktop from '../../components/agencycards/AgencyDetailsDesktop'
import { agencyData } from '../../data/agencyData'
import { tankerEntries } from '../../data/tankerEntries'
import TankerLog from '../../components/tanker/TankerLogDesktop'
import Placeholder from '../../assets/Placeholder.png'
import AgencyPlaceholder from '../../assets/AgencyPlaceholder.png'

function DesktopView(props) {
  const states = ['Tanker Logs', 'Agency Details']
  const [active, setActive] = useState('Tanker Logs')
  const navigation = useNavigation()
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
            <View style={[styles.row, styles.top]}>
              <Text style={styles.heading}>Today&apos;s tanker entry</Text>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text style={styles.old}>View old entries</Text>
              </TouchableOpacity>
            </View>
            {tankerEntries.length !== 0 && (
              <View style={{ width: '91.5%', alignSelf: 'center' }}>
                <RecordTankerArrival RecordTanker />
              </View>
            )}
            {tankerEntries.length !== 0 ? (
              tankerEntries.map((e) => (
                <TankerLog
                  agency={e.agency}
                  tankName={e.tankName}
                  beforeFill={e.beforeFill}
                  afterFill={e.afterFill}
                  estSupply={e.estSupply}
                  status={e.status}
                  start={e.start}
                  end={e.end}
                  date={e.date}
                />
              ))
            ) : (
              <>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                  <Image
                    source={Placeholder}
                    style={{ height: 256, width: 253 }}
                  />
                  <Text style={{ margin: 20, fontSize: 24 }}>
                    No entries today
                  </Text>
                </View>
                <View style={{ width: '80%', alignSelf: 'center' }}>
                  <RecordTankerArrival RecordTanker />
                </View>
              </>
            )}
          </View>
        )}
        {active === 'Agency Details' && (
          <Body styleProps={{ marginBottom: 60 }}>
            <Text
              style={[styles.heading, { paddingLeft: '5%', paddingBottom: 10 }]}
            >
              List of Agencies
            </Text>
            {agencyData.length !== 0 && (
              <View style={{ width: '91.5%', alignSelf: 'center' }}>
                <RecordTankerArrival AddAgency />
              </View>
            )}
            {agencyData.length !== 0 ? (
              agencyData.map((e) => (
                <AgencyDetailsDesktop
                  title={e.name}
                  address={e.address}
                  phone1={e.Phone1}
                  phone2={e.Phone2}
                />
              ))
            ) : (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={AgencyPlaceholder}
                  style={{ height: 270, width: 281 }}
                />
                <Text style={{ margin: 20, fontSize: 18, marginTop: 30 }}>
                  List of agencies not available.{'\n'}Please add a new agency
                  to start ordering.
                </Text>
                <View style={{ width: '80%', alignSelf: 'center' }}>
                  <RecordTankerArrival AddAgency />
                </View>
              </View>
            )}
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
  old: {
    color: colors.primary,
    textDecorationLine: 'underline',
    textDecorationColor: colors.primary,
    fontWeight: '500',
  },
  top: {
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: 24,
  },
})
