import {
  CHANGE_CASH,
  NEXT_STEP,
  SET_CASH,
  TOGGLE_GAME,
} from "../Components/helpers/constansts"

export const changeCash = payload => ({
  type: CHANGE_CASH,
  payload,
})

export const startGame = payload => ({
  type: TOGGLE_GAME,
  payload,
})
export const nextStep = payload => ({
  type: NEXT_STEP,
  payload,
})
export const setCash = payload => ({
  type: SET_CASH,
  payload,
})
