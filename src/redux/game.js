import { userActions } from "../Components/helpers/text"

const UPDATE_ROUND = "UPDATE_ROUND"
const FILTER_ACTIONS = "FILTER_ACTIONS"

const initialState = {
  clients: 10000,
  round: 1,
  actions: userActions,
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

    default:
      return state
  }
}

export const updateRound = payload => ({
  type: UPDATE_ROUND,
  payload,
})

export const filterActions = payload => ({
  type: FILTER_ACTIONS,
  payload,
})

export const getRounds = state => state.game.round
export const getClients = state => state.game.clients
export const getActions = state => state.game.actions
