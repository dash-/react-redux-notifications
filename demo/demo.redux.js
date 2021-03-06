export const API_CALL = 'demo/API_CALL'
export const API_CALL_SUCCESS = 'demo/API_CALL_SUCCESS'
export const API_CALL_FAILED = 'demo/API_CALL_FAILED'
export const API_CALL2 = 'demo/API_CALL2'
export const API_CALL2_SUCCESS = 'demo/API_CALL2_SUCCESS'
export const API_CALL2_FAILED = 'demo/API_CALL2_FAILED'
export const API_CALL3 = 'demo/API_CALL3'
export const API_CALL3_SUCCESS = 'demo/API_CALL3_SUCCESS'
export const API_CALL3_FAILED = 'demo/API_CALL3_FAILED'


export function apiCall() {
  return dispatch => {
    dispatch({
      type: API_CALL
    })

    setTimeout(() => {
      dispatch({
        type: API_CALL_SUCCESS
      })
    }, 1000)
  }
}
export function apiCall2() {
  return dispatch => {
    dispatch({
      type: API_CALL2
    })

    setTimeout(() => {
      dispatch({
        type: API_CALL2_SUCCESS
      })
    }, 1000)
  }
}
export function apiCall3() {
  return dispatch => {
    dispatch({
      type: API_CALL3
    })

    setTimeout(() => {
      dispatch({
        type: API_CALL3_SUCCESS
      })
    }, 1000)
  }
}

export default function(state = { }) {
  return state
}
