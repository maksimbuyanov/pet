const NEXT_STEP = "NEXT_STEP"

const initialState = {
  step: 0,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      }
    default:
      return state
  }
}
