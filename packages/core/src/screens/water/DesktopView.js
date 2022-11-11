import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/screenLayout'
import DesktopSideBar from '../../components/desktopOnly/DesktopSideBar'
import UgtCard from '../../components/water/UgtCard'
import OhtCard from '../../components/water/OhtCard'
import { ugtCardData as ugt, Mode } from '../../data/ugtCardData'
import { ohtCardData as oht } from '../../data/ohtCardData'
import PumpButton from '../../components/common/PumpButton'
import BottomBar from '../../components/water/BottomBar'
import TowerCard from '../../components/water/TowerCard'
import ColorCoding from '../../components/water/ColorCoding'

function DesktopView(props) {
  const states = ["UGT's", "OHT's", 'Towers']
  const [active, setActive] = useState("UGT's")
  const [isEnabled, setIsEnabled] = useState(false)
  const [mode, setMode] = useState(0)
  return (
    <>
      <DesktopSideBar {...props} />
      <View style={{ marginLeft: '20%' }}>
        <View style={[styles.row, styles.container]}>
          <View style={styles.row}>
            <Text>Mode: </Text>
            <Text>{Mode[mode]}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMode(mode === 0 ? 1 : 0)
              }}
            >
              <Text style={styles.blue}>Change</Text>
            </TouchableOpacity>
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
        {active === "UGT's" && (
          <>
            <Text style={styles.heading}>Underground Tanks (UGT&apos;s)</Text>
            <View style={styles.ugt}>
              {ugt.map((i) => (
                <UgtCard
                  title={i.title}
                  waterType={i.waterType}
                  ltr={i.ltr}
                  ft={i.ft}
                  percentage={i.percentage}
                  towers={i.towers}
                  valveState={i.valveState}
                  mode={Mode[mode]}
                />
              ))}
            </View>
            <View style={{ marginTop: 68, marginLeft: '-25%' }}>
              <BottomBar />
            </View>
          </>
        )}
        {active === "OHT's" && (
          <>
            <Text style={styles.heading}>Overhead Tanks (OHT&apos;s)</Text>
            <View style={styles.oht}>
              {oht.map((i) => (
                <OhtCard
                  title={i.title}
                  waterType={i.waterType}
                  ltr={i.ltr}
                  ft={i.ft}
                  percentage={i.percentage}
                  towers={i.towers}
                  valveState={i.valveState}
                  mode={Mode[mode]}
                />
              ))}
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <PumpButton
                isEnabled={isEnabled}
                handleClick={() => {
                  setIsEnabled(!isEnabled)
                }}
              />
            </View>
          </>
        )}
        {active === 'Towers' && (
          <View>
            <View style={styles.row}>
              <Text style={styles.heading}>Towers</Text>
              <ColorCoding />
            </View>
            <TowerCard />
            <View style={{ marginTop: 68, marginLeft: '-25%' }}>
              <BottomBar />
            </View>
          </View>
        )}
      </View>
    </>
  )
}

export default DesktopView

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
  oht: {
    marginBottom: 20,
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    marginLeft: 50,
  },
  ugt: {
    marginLeft: 20,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 40,
    marginBottom: 20,
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
  heading: {
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 18,
  },
})
