import {actions} from './actions'
import {goToMain} from "@navigation/Main/actions";

const initialState = {
    couple: [
        {name: 'name1', color: '#000000'},
        {name: 'name2', color: '#000000'}
    ],
    date: new Date(),
    selectedPerson: 0,
    title: '',
    price: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.LOAD_COUPLE: {
            return Object.assign({}, state, {
                couple: action.couple
            })
        }
        case actions.UPDATE_DATE: {
            return Object.assign({}, state, {
                date: new Date(action.dateText)
            })
        }
        case actions.UPDATE_PERSON: {
            return Object.assign({}, state, {
                selectedPerson: action.personId
            })
        }
        case actions.UPDATE_TITLE: {
            return Object.assign({}, state, {
                title: action.text
            })
        }
        case actions.UPDATE_PRICE: {
            return Object.assign({}, state, {
                price: action.text
            })
        }
        case actions.SUBMIT_EXPENSE: {
            return initialState
        }
        default: {
            return state
        }

    }
}