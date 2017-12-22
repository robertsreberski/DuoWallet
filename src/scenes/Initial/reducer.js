import {ADD_PERSON, FINISH_INIT} from "./actions"
import color from '@assets/colors'
import realm from '@storage'

const initialState = {
    persons: [
        {id: 0, color: color.maleBlue, summarize: 0},
        {id: 1, color: color.femalePink, summarize: 0}]
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON: {
            return Object.assign({}, state, {
                persons: state.persons.map(person => person.id === action.personId ?
                    {...person, name: action.personName} : person)
            })
        }
        case FINISH_INIT: {
            return initialState
        }
        default: {
            return state
        }
    }
}