import {
  CHANGE_CASH,
  NEXT_STEP,
  SET_CASH,
  TOGGLE_GAME,
} from "../Components/helpers/constansts"

const initialState = {
  step: 0,
  isGameReady: false,
  cash: 4000000,
  settings: [],
  cafeName: "Бариста, скажи 300",
}

// eslint-disable-next-line default-param-last
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEXT_STEP:
      return {
        ...state,
        settings: [...state.settings, payload.title],
        step: state.step + 1,
        cash: state.cash - payload.cost,
      }
    case TOGGLE_GAME:
      return {
        ...state,
        isGameReady: true,
        cafeName: payload,
      }
    case SET_CASH:
      return {
        ...state,
        cash: payload,
      }
    case CHANGE_CASH:
      return {
        ...state,
        cash: state.cash + payload,
      }
    default:
      return state
  }
}

export const getCash = state => state.initializing.cash
export const getGameStatus = state => state.initializing.isGameReady
export const getStep = state => state.initializing.step
export const getCafeName = state => state.initializing.cafeName
