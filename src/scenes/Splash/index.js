import React, {Component} from 'react'
import {View} from 'react-native'
import {startApp, goToInitialization} from '@navigation/Initial/actions'
import storage from '@storage'

export default class SplashScreen extends Component {

    isUserCreated() {
        return storage.then(realm => {
            let users = realm.objects('Profile')
            console.log("Users count: " + users.length)
            return users.length > 0
        })
    }
    componentDidMount() {
        // check whether Couple is initialized
        this.isUserCreated().then(it => {
            if (it) this.props.navigation.dispatch(startApp())
            else this.props.navigation.dispatch(goToInitialization())
        })
    }

    render() {
        return(<View/>)
    }
}