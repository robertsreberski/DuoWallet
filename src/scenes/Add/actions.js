import storage from '@storage'
import {goToMain} from "@navigation/Main/actions";
import {loadPastExpenses} from '@scenes/Main/actions'
import UUIDGenerator from 'react-native-uuid-generator'
export const LOAD_COUPLE = 'ADD_LOAD_COUPLE'
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const UPDATE_PRICE = 'UPDATE_PRICE'
export const UPDATE_PERSON = 'UPDATE_PERSON'
export const UPDATE_DATE = 'UPDATE_DATE'
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE'

export const actions = {
    LOAD_COUPLE, UPDATE_TITLE, UPDATE_PRICE, UPDATE_PERSON, UPDATE_DATE, SUBMIT_EXPENSE
}

export const loadCouple = () => {
    return (dispatch) => {
        return storage.then(realm => {
            let couple = realm.objects('Group').slice(0, 1)[0]
            dispatch({
                type: LOAD_COUPLE,
                couple: [couple.persons[0], couple.persons[1]]
            })
        })
    }
}

export const updateTitle = (text) => {
    return {
        type: UPDATE_TITLE,
        text: text
    }
}

export const updatePrice = (text) => {
    return {
        type: UPDATE_PRICE,
        text: text.split(' ')[1].split(',')[0]
    }
}

export const updatePerson = (id) => {
    return {
        type: UPDATE_PERSON,
        personId: id
    }
}

export const updateDate = (dateText) => {
    return {
        type: UPDATE_DATE,
        dateText: dateText
    }
}

export const submitExpense = (nav) => {
    return (dispatch, getState) => {
        let state = getState().add

        return storage.then((realm) => {
            UUIDGenerator.getRandomUUID((uuid) => {
                let expenseObj = {
                    id: uuid,
                    createdAt: state.date,
                    name: state.title,
                    price: parseFloat(state.price),
                    person: state.couple[state.selectedPerson],
                }
                realm.write(() => {
                    const expense = realm.create('Expense', expenseObj)
                    realm.objects('Profile').slice(0,1)[0].historyOfExpenses.push(expense)
                    dispatch(loadPastExpenses())
                    nav.dispatch(goToMain())
                    dispatch({
                        type: SUBMIT_EXPENSE
                    })
                })
            })

        })
    }
}

