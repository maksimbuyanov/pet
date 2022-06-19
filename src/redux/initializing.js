import {
  CHANGE_CASH,
  NEXT_STEP,
  SET_CASH,
  SET_NAME,
  TOGGLE_GAME,
} from "../Components/helpers/constansts"
import { startGame } from "./initializingActionsCreators"
import { updateDialogText } from "./gameActionsCreators"
import { negativeStart } from "../Components/helpers/text"

const initialState = {
  step: 0,
  isGameReady: false,
  cash: null,
  settings: [],
  cafeName: "",
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
    case SET_NAME:
      return {
        ...state,
        cafeName: payload,
      }
    default:
      return state
  }
}

export const getCash = state => state.initializing.cash
export const getGameStatus = state => state.initializing.isGameReady
export const getStep = state => state.initializing.step
export const getCafeName = state => state.initializing.cafeName
export const getSettings = state => state.initializing.settings

export const negativeCash = () => dispatch => {
  dispatch(startGame())
  dispatch(updateDialogText(negativeStart))
}
