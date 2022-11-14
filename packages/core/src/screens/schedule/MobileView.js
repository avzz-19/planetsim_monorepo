import { Platform, View } from 'react-native'
import React from 'react'
import ScheduleCard from '../../components/water/ScheduleCard'
import { scheduleData } from '../../data/scheduleData'
import BottomBar from '../../components/water/BottomBar'

function MobileView() {
  return (
    <View style={{ height: Platform.OS === 'web' ? '93vh' : '100%' }}>
      {scheduleData.map((e) => (
        <View>
          <ScheduleCard
            title={e.title}
            type={e.scheduleType}
            time1={e?.time1}
            time2={e?.time2}
            onLevel={e?.switchOnLevel}
            offLevel={e?.switchOffLevel}
            startDate={e.startDate}
            endDate={e?.endDate}
          />
        </View>
      ))}
      <BottomBar scheduleButton />
    </View>
  )
}
export default MobileView
