import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Drop from '../assets/Drop.svg'
import { colors } from '../../utils/screenLayout'

function DesktopSideBar(props) {
  const { activeTab: active, setActiveTab: setActive } = props

  const navigation = useNavigation()
  useEffect(() => {
    navigation.addListener('focus', () => {
      setActive(active)
    })
  }, [navigation])
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Smart Solutions</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Water')
          setActive('water')
        }}
        style={[
          active === 'water' ? styles.active : styles.inactive,
          styles.row,
        ]}
      >
        <Image source={Drop} style={{ height: 21, width: 16 }} />
        <Text>Water</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Tanker')
          setActive('tanker')
        }}
        style={[
          active === 'tanker' ? styles.active : styles.inactive,
          styles.row,
        ]}
      >
        <Image source={Drop} style={{ height: 21, width: 16 }} />
        <Text>Tanker</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DesktopSideBar

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 20,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  active: {
    backgroundColor: colors.primary,
  },
  inactive: {
    backgroundColor: 'white',
  },
  wrapper: {
    height: '100vh',
    position: 'absolute',
    left: 0,
    width: '20%',
    backgroundColor: '#FFFFFF',
  },
})
