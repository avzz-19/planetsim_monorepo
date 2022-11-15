import { View } from 'react-native'
import React from 'react'
import TankerHistories from '../../components/tanker/TankerHistory'
import { tankerEntries } from '../../data/tankerEntries'

const filterByDeliver = tankerEntries.filter(
  (item) => item?.status === 'Delivered',
)

function TankerHistory() {
  return (
    <View>
      {filterByDeliver.map((e) => (
        <TankerHistories
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
      ))}
    </View>
  )
}

export default TankerHistory
