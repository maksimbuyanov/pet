import {
  blackGeese,
  secondStepText,
  startGameText,
  userActions,
} from "../Components/helpers/text"
import { generateNewCash } from "../Components/helpers/mathFunc"
import {
  ARRIVED_GEESE,
  FILTER_ACTIONS,
  SET_AMORTIZATION,
  SET_GOOSE_TEXT,
  SET_TABLE_DATA,
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
  БОЛ_КР_ЛИНИЯ,
  ВИП,
  МАЛ_КР_ЛИНИЯ,
  МАЛ_СП_РАЙОН,
  СТАНДАРТ,
  ЭКОНОМ,
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
import { shuffle } from "../Components/helpers/parser"

const initialState = {
  visitors: "",
  round: 1,
  actions: userActions,
  geese: [],
  cr: 0.7,
  avPayment: 3,
  avPrice: 250,
  commissions: 0.4,
  salary: 150000, // зп персонала
  amortization: 0,
  rent: 0,
  cost: 0,
  dialogText: startGameText,
  gooseText: null,
  tableData: [],
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
        cr: (state.cr * 10 + payload * 10) / 10,
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
        commissions: state.commissions + payload,
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

    default:
      return state
  }
}

export const getRounds = state => state.game.round
export const isFirstRound = state => state.game.round === 1
export const getClients = state => state.game.visitors
export const getActions = state => state.game.actions
export const getGeese = state => state.game.geese
export const getDialogText = state => state.game.dialogText
export const getGooseText = state => state.game.gooseText
export const getTableData = state => state.game.tableData

export const applyAction = action => (dispatch, getState) => {
  const keys = Object.keys(action)
  keys.forEach(key => {
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
  tableData.action = action.title
  tableData.goose = ""
  const round = getState().game.round + 2
  if (round % 3 === 0) {
    const goose = shuffle(blackGeese).pop()
    tableData.goose = goose.title
    Object.keys(goose).forEach(key => {
      switch (key) {
        case "text":
          dispatch(setGooseText(goose[key]))
          break
        case "title":
          dispatch(arrivedGoose(goose[key]))
          break
        case "visitors":
          dispatch(updateVisitors(goose[key]))
          break
        case "cr":
          dispatch(updateCR(goose[key]))
          break
        case "avPrice":
          dispatch(updateAvPrice(goose[key]))
          break
        case "commissions":
          dispatch(updateCommissions(goose[key]))
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
      case МАЛ_СП_РАЙОН:
        dispatch(updateRent(150000))
        break
      case МАЛ_КР_ЛИНИЯ:
        dispatch(updateRent(300000))
        break
      case БОЛ_КР_ЛИНИЯ:
        dispatch(updateRent(450000))
        break
      case ЭКОНОМ:
        dispatch(setAmortization(40000))
        break
      case СТАНДАРТ:
        dispatch(setAmortization(50000))
        break
      case ВИП:
        dispatch(setAmortization(65000))
        break
      default:
        break
    }
  })
  dispatch(updateVisitors(3000))
  const state = getState().game
  const [newCash] = generateNewCash(state)
  dispatch(changeCash(newCash))
  dispatch(updateDialogText(secondStepText))
  dispatch(updateRound())
}
