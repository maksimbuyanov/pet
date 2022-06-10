const NEXT_STEP = "NEXT_STEP"
const TOGGLE_GAME = "TOGGLE_GAME"
const SET_CASH = "SET_CASH"
const EXPENSE = "EXPENSE" // расходы

const initialState = {
  step: 0,
  isGameReady: false,
  cash: 4000000,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      }
    case TOGGLE_GAME:
      return {
        ...state,
        isGameReady: true,
      }
    case SET_CASH:
      return {
        ...state,
        cash: payload,
      }
    case EXPENSE:
      return {
        ...state,
        cash: state.cash - payload,
      }
    default:
      return state
  }
}

export const newExpense = payload => ({
  type: EXPENSE,
  payload,
})

export const toggleGame = payload => ({
  type: TOGGLE_GAME,
  payload,
})
export const nextStep = payload => ({
  type: NEXT_STEP,
  payload,
})

export const getCash = state => state.initializing.cash
export const getGameStatus = state => state.initializing.isGameReady
export const getStep = state => state.initializing.step
