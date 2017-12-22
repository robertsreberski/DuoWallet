import storage from '@storage'
// Defined actions that will be used in MainScreen
export const LOAD_EXPENSES = 'LOAD_EXPENSES'
export const LOAD_COUPLE = 'LOAD_COUPLE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const DETERMINE_VERDICT = 'DETERMINE_VERDICT'

const calculatePrice = (couple, expenses=[]) => {
    if (expenses.length === 0) return {
        person: couple.persons[0],
        diffPrice: 0
    }
    let accounts = [0, 0];
    expenses.forEach((it) => {
        if (it.person.name === couple.persons[0].name) accounts[0] += it.price
        else accounts[1] += it.price
    })

    let verdict = {
        person: undefined,
        diffPrice: Math.abs(accounts[0] - accounts[1])
    }

    if (verdict.diffPrice < 10) {
        if (expenses[0].person.name === couple.persons[0].name) verdict.person = couple.persons[1]
        else verdict.person = couple.persons[0]
    } else if (accounts[0] < accounts[1]) verdict.person = couple.persons[0]
    else verdict.person = couple.persons[1]

    return verdict
}

export const loadPastExpenses = (id='0') => {
    return (dispatch) => {
        return storage.then(realm=>{
            let profile = realm.objects('Profile').slice(0,1)[0]
            let realmExpenses = profile.historyOfExpenses
            if (id !== '0') realmExpenses = expenses.filtered('id != $0', id)
            realmExpenses = realmExpenses.sorted('createdAt', true)
            let expenses = realmExpenses.slice(0, realmExpenses.length)
            let action = {
                type: LOAD_EXPENSES,
                expenses: expenses
            }
            dispatch(action)
            dispatch(determineVerdict(
                calculatePrice(profile.group, expenses)
            ))
        })
    }
}

export const loadCouple = () => {
    return (dispatch) => {
        return storage.then(realm=>{
            let action = {
                type: LOAD_COUPLE,
                couple: realm.objects('Profile')[0].group
            }
            dispatch(action)
        })
    }
}

export const deleteExpense = (id) => {
    return (dispatch) => {
        return storage.then(realm=>{
            dispatch({
                type: DELETE_EXPENSE,
                id: id
            })
            realm.write(()=> {
                let objects = realm.objects('Profile')[0].historyOfExpenses.filtered('id == $0', id)
                let object = objects[0]
                realm.delete(object)
            })
        })
    }
}

export const determineVerdict = ({diffPrice, person}) => {
    return {
        type: DETERMINE_VERDICT,
        diffPrice: diffPrice,
        verdictPerson: person
    }
}
