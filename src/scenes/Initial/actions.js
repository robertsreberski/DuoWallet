
import storage from '@storage'
import {ToastAndroid} from 'react-native'
import {startApp} from "@navigation/Initial/actions"
import UUIDGenerator from 'react-native-uuid-generator'

export const ADD_PERSON = 'ADD_PERSON'
export const FINISH_INIT = 'FINISH_INIT'

export const addPerson = (personId, personName) => {
    return {
        type: ADD_PERSON,
        personId: personId,
        personName: personName
    }
}

export const finishInit = (nav) => {
    return (dispatch, getState) => {
        let persons = Object.assign([], getState().init.persons)
        if (persons.some(it => typeof(it.name) === 'undefined')) {
            ToastAndroid.show('Na pewno każdy ma jakieś imię ;) Zapisz wszystkie pola', ToastAndroid.SHORT)
        } else {
            return storage.then(async realm => {
                persons[0].id = await UUIDGenerator.getRandomUUID()
                persons[1].id = await UUIDGenerator.getRandomUUID()
                let idTemp1 = await UUIDGenerator.getRandomUUID()
                let idTemp2 = await UUIDGenerator.getRandomUUID()
                realm.write(() => {
                    let realmPersons = []

                    realmPersons.push(realm.create('Person', persons[0]))
                    realmPersons.push(realm.create('Person', persons[1]))
                    // persons.forEach(async it => {
                    //     it.id = await UUIDGenerator.getRandomUUID()
                    //     realmPersons.push(realm.create('Person', it))
                    // })
                    let group = realm.create('Group', {
                        id: idTemp1,
                        persons: realmPersons,
                    })
                    let profile = realm.create('Profile', {
                        id: idTemp2,
                        name: 'Związek',
                        group: group,
                        historyOfExpenses: []
                    })
                    nav.dispatch(startApp())
                    dispatch({
                        type: FINISH_INIT,
                    })
                })
            })
        }
    }
}