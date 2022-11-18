import React from 'react'
import { connect, useSelector } from 'react-redux'
import AgencyDetails from '../agencycards/AgencyDetails'

function AgencyList() {
  const agency = useSelector((data) => data?.agency?.agencies)
  return (
    <>
      {agency.map((e) => (
        <AgencyDetails
          title={e.name}
          address={e.address}
          phone1={e.Phone1}
          phone2={e.Phone2}
        />
      ))}
    </>
  )
}
const mapState = (state) => ({ agencies: state.agency })

export default connect(mapState)(AgencyList)
