import { agencyData } from '../data/agencyData'

const initialState = {
  agencies: agencyData,
}

// eslint-disable-next-line default-param-last
export default function agencyReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_AGENCY':
      console.log('payload', action.payload)
      return {
        ...state,
        agencies: [...state.agencies, action.payload],
      }
    default:
      return state
  }
}
