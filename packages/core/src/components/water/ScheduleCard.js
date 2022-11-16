import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Calendar from '../../assets/Calendar.png'
import Edit from '../../assets/EditBlack.png'
import Delete from '../../assets/Delete.png'
import ToggleSwitch from '../common/ToggleSwitch'

function ScheduleCard({
  title,
  type,
  time1,
  time2,
  onLevel,
  offLevel,
  startDate,
  endDate,
}) {
  const [isEnabled, setIsEnabled] = React.useState(false)
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 18,
          marginBottom: 10,
          color: 'black',
        }}
      >
        {title}
      </Text>
      <View style={styles.row}>
        <Text style={styles.col1}>Schedule Type: </Text>
        <Text style={styles.col2}>{type}</Text>
      </View>
      <View style={styles.switch}>
        <Text style={{ marginRight: 5, fontWeight: '500' }}>
          {isEnabled ? 'Enabled' : 'Disabled'}
        </Text>
        <ToggleSwitch
          value={isEnabled}
          buttonWidth={55}
          buttonHeight={25}
          buttonRadius={100}
          sliderWidth={20}
          sliderHeight={20}
          sliderRadius={100}
          onLabel='ON'
          offLabel='OFF'
          labelStyle={{ color: 'FFF' }}
          buttonOnColor='#7ED321'
          buttonOffColor='#C21F2A'
          onToggle={() => setIsEnabled(!isEnabled)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>
          {type === 'by Time' ? 'Start Time: ' : 'Switch on level: '}
        </Text>
        <Text style={styles.col2}>{type === 'by Time' ? time1 : onLevel}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.col1}>
          {type === 'by Time' ? 'End Time: ' : 'Switch off level: '}
        </Text>
        <Text style={styles.col2}>{type === 'by Time' ? time2 : offLevel}</Text>
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
      >
        <Image
          source={Calendar}
          style={{ height: 12, width: 12, marginRight: 5 }}
        />
        <Text style={styles.black}>{startDate} - </Text>
        {endDate ? (
          <Text style={styles.black}>{endDate}</Text>
        ) : (
          <Text style={styles.black}>No End Date</Text>
        )}
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Image
            source={Edit}
            style={{ height: 17, width: 17, marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Delete} style={{ height: 20, width: 18 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScheduleCard

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  col1: {
    color: 'grey',
  },
  col2: {
    color: 'black',
  },
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
  },
  switch: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  black: {
    color: 'black',
  },
})
