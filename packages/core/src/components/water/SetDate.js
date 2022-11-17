import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
import DateRangePicker from 'react-native-daterange-picker'

function SetDate() {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    displayedDate: moment(),
  })

  const handleDateChange = (newDates) => {
    setDates({ ...dates, ...newDates })
  }
  console.log('start', dates.startDate)
  console.log('end', dates.endDate)
  console.log('displayed', dates.displayedDate)
  return (
    <View style={styles.container}>
      <DateRangePicker
        onChange={handleDateChange}
        startDate={dates.startDate}
        endDate={dates.endDate}
        displayedDate={dates.displayedDate}
        moment={moment}
        range
      >
        <Text>Set Date</Text>
      </DateRangePicker>
      <Text>{dates.displayedDate.toString().substring(3, 15)}</Text>
    </View>
  )
}

export default SetDate

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    flex: 1,
  },
})
