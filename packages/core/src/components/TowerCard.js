import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { towerData } from '../data/towerCardData'
import { WaterColor } from './WaterColor'
import { Breakpoints, colors } from '../../utils/screenLayout'

function TowerCard() {
  const widthBar = useWindowDimensions().width
  return (
    <View style={styles.wrapper}>
      {towerData.map((i) => (
        <View
          style={{
            marginRight: 5,
            marginLeft: 5,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: 4,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 5,
                paddingVertical: 6,
              }}
            >
              {Object.keys(i).map(
                (e) =>
                  e !== 'name' && (
                    <View style={styles.barBg(widthBar)}>
                      <View style={styles.bar(e, i)}>
                        <Svg
                          height={i[e]}
                          width='100%'
                          style={{ alignSelf: 'flex-end' }}
                        >
                          <Path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0 1.56164C0 1.56164 8.75 -1.56164 15.0322 1.56164C21.8223 4.93737 28.8755 8.72653 33.6162 8.72653C45.2621 8.72653 50 1.56164 50 1.56164V114H0V1.56164Z'
                            fill={WaterColor(e)}
                          />
                        </Svg>
                      </View>
                      <Text style={styles.percentage}>{i[e]}%</Text>
                    </View>
                  ),
              )}
            </View>
            <View style={styles.title}>
              <Text style={{ fontSize: 20 }}>{i.name}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default TowerCard

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  bar: (e, i) => ({
    height: i[e],
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -100,
    justifyContent: 'flex-end',
    flex: 1,
  }),
  barBg: (widthBar) => ({
    backgroundColor: '#EEEEEE',
    height: widthBar >= Breakpoints.md ? 112 : 100,
    marginRight: 3,
    marginLeft: 3,
    width: widthBar >= Breakpoints.sm ? 42 : 33,
  }),
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  percentage: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
    alignSelf: 'center',
    color: colors.navy,
    zIndex: 5000,
  },
})
