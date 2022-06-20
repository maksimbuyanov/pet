import {
  blackGeese,
  secondStepText,
  startGameText,
  userActions,
} from "../Components/helpers/text"
import { generateNewCash } from "../Components/helpers/mathFunc"
import {
  ARRIVED_GEESE,
  BIG_IN_RED_LINE,
  ECONOMY,
  FILTER_ACTIONS,
  SET_AMORTIZATION,
  SET_GOOSE_TEXT,
  SET_TABLE_DATA,
  SHOW_TABLE,
  SMALL_DISTRICT,
  SMALL_IN_RED_LINE,
  STANDART,
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
  VIP,
} from "../Components/helpers/constansts"
import {
  arrivedGoose,
  filterActions,
  setAmortization,
  setGooseText,
  setTableData,
  updateActionCost,
  updateAvPayment,
  updateAvPrice,
  updateCommissions,
  updateCR,
  updateDialogText,
  updateRent,
  updateRound,
  updateSalary,
  updateVisitors,
} from "./gameActionsCreators"
import { changeCash } from "./initializingActionsCreators"
import { shuffle, toFix2 } from "../Components/helpers/parser"

const initialState = {
  visitors: "",
  round: 1,
  actions: userActions,
  geese: [],
  cr: 0.7,
  avPayment: 3,
  avPrice: 250,
  commissions: 0.55,
  salary: 150000, // зп персонала
  amortization: 0,
  rent: 0,
  cost: 0,
  dialogText: startGameText,
  gooseText: null,
  tableData: [],
  showTable: false,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ROUND:
      return {
        ...state,
        round: state.round + 1,
      }

    case FILTER_ACTIONS:
      return {
        ...state,
        actions: state.actions.filter(item => item.title !== payload),
      }

    case UPDATE_VISITORS:
      return {
        ...state,
        visitors: +state.visitors + payload,
      }

    case SET_AMORTIZATION:
      return {
        ...state,
        amortization: payload,
      }

    case UPDATE_CR:
      return {
        ...state,
        cr: toFix2(state.cr + payload),
      }

    case UPDATE_AVPRICE:
      return {
        ...state,
        avPrice: state.avPrice + payload,
      }

    case UPDATE_AVPAYMENT:
      return {
        ...state,
        avPayment: state.avPayment + payload,
      }

    case UPDATE_ACTION_COST:
      return {
        ...state,
        cost: payload,
      }

    case UPDATE_COMMISSIONS:
      return {
        ...state,
        commissions: toFix2(state.commissions + payload),
      }

    case UPDATE_SALARY:
      return {
        ...state,
        salary: state.salary + payload,
      }

    case UPDATE_DIALOG_TEXT:
      return {
        ...state,
        dialogText: payload,
      }

    case UPDATE_RENT:
      return {
        ...state,
        rent: payload,
      }

    case SET_GOOSE_TEXT:
      return {
        ...state,
        gooseText: payload,
      }
    case ARRIVED_GEESE:
      return {
        ...state,
        geese: [...state.geese, payload],
      }

    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: [...state.tableData, payload],
      }

    case SHOW_TABLE:
      return {
        ...state,
        showTable: payload,
      }

    default:
      return state
  }
}

export const getRounds = state => state.game.round
export const isFirstRound = state => state.game.round === 1
export const getClients = state => state.game.visitors
export const getActionsLength = state => state.game.actions.length
export const getGeese = state => state.game.geese
export const getDialogText = state => state.game.dialogText
export const getGooseText = state => state.game.gooseText
export const getTableData = state => state.game.tableData
export const getGeeseLength = state => state.game.geese.length > 0
export const getShowTable = state => state.game.showTable

export const applyAction = action => (dispatch, getState) => {
  Object.keys(action).forEach(key => {
    switch (key) {
      case "visitors":
        dispatch(updateVisitors(action[key]))
        break
      case "cr":
        dispatch(updateCR(action[key]))
        break
      case "avPrice":
        dispatch(updateAvPrice(action[key]))
        break
      case "avPayment":
        dispatch(updateAvPayment(action[key]))
        break
      case "commissions":
        dispatch(updateCommissions(action[key]))
        break
      case "cost":
        dispatch(updateActionCost(action[key]))
        break
      case "salary":
        dispatch(updateSalary(action[key]))
        break
      case "text":
        dispatch(updateDialogText(action[key]))
        break
      default:
        break
    }
  })
  if (!action.cost) {
    dispatch(updateActionCost(0))
  }
  const state = getState().game
  const [newCash, tableData] = generateNewCash(state)
  dispatch(changeCash(newCash))
  dispatch(filterActions(action.title))
  dispatch(updateRound())
  const { cash } = getState().initializing
  tableData.cash = cash
  tableData.action = action.title
  tableData.goose = ""
  const round = getState().game.round + 2
  if (round % 3 === 0) {
    const goose = shuffle(blackGeese).pop()

    Object.keys(goose).forEach(key => {
      switch (key) {
        case "text":
          dispatch(setGooseText(goose[key]))
          break
        case "title": {
          const { title, enemy, personalClass } = goose
          dispatch(
            arrivedGoose({
              title,
              enemy,
              personalClass,
            })
          )
          tableData.goose = goose.title
          break
        }
        case "visitors":
          dispatch(updateVisitors(goose[key]))
          tableData.visitors += goose.visitors
          break
        case "cr":
          dispatch(updateCR(goose[key]))
          tableData.cr = toFix2(goose.cr + tableData.cr)
          break
        case "avPrice":
          dispatch(updateAvPrice(goose[key]))
          tableData.avPrice += goose.avPrice
          break
        case "commissions":
          dispatch(updateCommissions(goose[key]))
          tableData.commissions = toFix2(
            goose.commissions + tableData.commissions
          )
          break

        default:
          break
      }
    })
  }
  dispatch(setTableData(tableData))
}

export const applySettings = () => (dispatch, getState) => {
  const { settings } = getState().initializing
  settings.forEach(item => {
    switch (item) {
      case SMALL_DISTRICT:
        dispatch(updateRent(150000))
        dispatch(updateVisitors(2000))
        break
      case SMALL_IN_RED_LINE:
        dispatch(updateRent(300000))
        dispatch(updateVisitors(3000))
        break
      case BIG_IN_RED_LINE:
        dispatch(updateRent(450000))
        dispatch(updateVisitors(3500))
        break
      case ECONOMY:
        dispatch(setAmortization(40000))
        break
      case STANDART:
        dispatch(setAmortization(50000))
        break
      case VIP:
        dispatch(setAmortization(65000))
        break
      default:
        break
    }
  })

  const state = getState().game
  const [newCash, tableData] = generateNewCash(state)

  dispatch(changeCash(newCash))
  dispatch(updateDialogText(secondStepText))
  dispatch(updateRound())
  const { cash } = getState().initializing
  tableData.cash = cash
  tableData.action = ""
  tableData.goose = ""
  dispatch(setTableData(tableData))
}
