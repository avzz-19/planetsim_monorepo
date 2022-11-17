import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RecordTankerArrival from '../../components/tanker/RecordTankerButton'
import { Body, colors } from '../../../utils/screenLayout'
import AddNewAgencyButton from '../../components/agencycards/AddNewAgencyButton'
import AgencyDetails from '../../components/agencycards/AgencyDetails'
import { agencyData } from '../../data/agencyData'
import { tankerEntries } from '../../data/tankerEntries'
import TankerLog from '../../components/tanker/TankerLog'
import Placeholder from '../../assets/Placeholder.png'
import AgencyPlaceholder from '../../assets/AgencyPlaceholder.png'

function MobileView() {
  const states = ['Tanker Logs', 'Agency Details']
  const [active, setActive] = useState('Tanker Logs')
  const navigation = useNavigation()
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
        <View>
          <Body styleProps={{ marginBottom: Platform.OS === 'web' ? 0 : 250 }}>
            <View style={[styles.row, styles.top]}>
              <Text style={styles.heading}>Today&apos;s tanker entry</Text>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text style={styles.old}>View old entries</Text>
              </TouchableOpacity>
            </View>
            {tankerEntries.length !== 0 && (
              <View style={{ width: '95%', alignSelf: 'center' }}>
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
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={Placeholder}
                  style={{ height: 256, width: 253 }}
                />
                <Text style={{ margin: 20, fontSize: 24, color: 'black' }}>
                  No entries today
                </Text>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                  <RecordTankerArrival RecordTanker />
                </View>
              </View>
            )}
          </Body>
        </View>
      )}
      {active === 'Agency Details' && (
        <Body styleProps={{ marginBottom: Platform.OS === 'web' ? 0 : 150 }}>
          <Text
            style={[styles.heading, { paddingLeft: '5%', paddingBottom: 10 }]}
          >
            List of Agencies
          </Text>
          {agencyData.length !== 0 ? (
            agencyData.map((e) => (
              <AgencyDetails
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
                List of agencies not available.{'\n'}Please add a new agency to
                start ordering.
              </Text>
              <View style={{ width: '90%', alignSelf: 'center' }}>
                <RecordTankerArrival AddAgency />
              </View>
            </View>
          )}
          {agencyData.length !== 0 && (
            <View style={styles.buttonBg}>
              <View
                style={{
                  alignSelf: 'center',
                }}
              >
                <AddNewAgencyButton />
              </View>
            </View>
          )}
        </Body>
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
    color: 'black',
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
  buttonBg: {
    position: 'relative',
    bottom: 0,
    backgroundColor: '#FFF',
    width: '100%',
    padding: 15,
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
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
  },
})
