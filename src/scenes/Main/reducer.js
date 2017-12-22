import {LOAD_EXPENSES, LOAD_COUPLE, DELETE_EXPENSE, DETERMINE_VERDICT} from './actions'
import storage from '@storage'

const initialState = {
    today: new Date(),
    expenses: [],
    diffPrice: 0,
    verdictPerson: {
        name: 'not_calculated'
    },
}

export default (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case LOAD_EXPENSES:
            return Object.assign({}, state, {
                expenses: action.expenses
            })
        case LOAD_COUPLE:
            return Object.assign({}, state, {
                couple: action.couple
            })
        case DETERMINE_VERDICT:
            return Object.assign({}, state, {
                verdictPerson: action.verdictPerson,
                diffPrice: action.diffPrice,
            })
        case DELETE_EXPENSE:
            let toRemove = 0
            state.expenses.map((val, id) => {
                if (val.id === action.id) toRemove = id
            })
            return Object.assign({}, state, {
                expenses: [
                    ...state.expenses.slice(0, toRemove),
                    ...state.expenses.slice(toRemove+1)
                ]
            })
        default:
            return state
    }
}