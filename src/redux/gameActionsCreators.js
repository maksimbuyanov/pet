import {
  ARRIVED_GEESE,
  FILTER_ACTIONS,
  SET_AMORTIZATION,
  SET_GOOSE_TEXT,
  SET_TABLE_DATA,
  SHOW_TABLE,
  UPDATE_ACTION_COST,
  UPDATE_AVPAYMENT,
  UPDATE_AVPRICE,
  UPDATE_COMMISSIONS,
  UPDATE_CR,
  UPDATE_DIALOG_TEXT,
  UPDATE_RENT,
  UPDATE_ROUND,
  UPDATE_SALARY,
  UPDATE_VISITORS,
} from "../Components/helpers/constansts"

export const updateRound = payload => ({
  type: UPDATE_ROUND,
  payload,
})

export const filterActions = payload => ({
  type: FILTER_ACTIONS,
  payload,
})

export const updateVisitors = payload => ({
  type: UPDATE_VISITORS,
  payload,
})

export const updateCR = payload => ({
  type: UPDATE_CR,
  payload,
})

export const updateAvPrice = payload => ({
  type: UPDATE_AVPRICE,
  payload,
})

export const updateAvPayment = payload => ({
  type: UPDATE_AVPAYMENT,
  payload,
})

export const updateActionCost = payload => ({
  type: UPDATE_ACTION_COST,
  payload,
})

export const updateCommissions = payload => ({
  type: UPDATE_COMMISSIONS,
  payload,
})

export const updateSalary = payload => ({
  type: UPDATE_SALARY,
  payload,
})

export const updateDialogText = payload => ({
  type: UPDATE_DIALOG_TEXT,
  payload,
})

export const updateRent = payload => ({
  type: UPDATE_RENT,
  payload,
})

export const setAmortization = payload => ({
  type: SET_AMORTIZATION,
  payload,
})

export const setGooseText = payload => ({
  type: SET_GOOSE_TEXT,
  payload,
})

export const arrivedGoose = payload => ({
  type: ARRIVED_GEESE,
  payload,
})

export const setTableData = payload => ({
  type: SET_TABLE_DATA,
  payload,
})

export const showTable = payload => ({
  type: SHOW_TABLE,
  payload,
})
