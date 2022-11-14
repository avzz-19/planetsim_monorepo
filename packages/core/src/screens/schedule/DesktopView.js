import { View } from 'react-native'
import React from 'react'
import ScheduleCard from '../../components/water/ScheduleCard'
import { scheduleData } from '../../data/scheduleData'

function DesktopView() {
  return (
    <View>
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
    </View>
  )
}

export default DesktopView

// const styles = StyleSheet.create({})
