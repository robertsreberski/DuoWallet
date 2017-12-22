import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableNativeFeedback, BackHandler, StatusBar} from 'react-native'
import FormView from './containers/FormView'
import {goToMain} from "@navigation/Main/actions";
import {submitExpense} from "./actions"
import styles from './styles'

class AddScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('backPress', () => {
            this.props.navigation.dispatch(goToMain())
            return true
        })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('backPress')
    }

    render() {
        let submitOpacity = 0.8
        if (!this.props.submitEnabled) submitOpacity = 0.5
        return (
            <View style={[styles.more, {backgroundColor: this.props.backgroundColor}]}>
                <StatusBar hidden={true}/>
                <FormView/>
                <TouchableNativeFeedback onPress={() => {
                    if (this.props.submitEnabled) this.props.submit(this.props.navigation)}}>
                    <View style={styles.bottomStrip}>
                        <Text style={[styles.miscText,
                                {textAlign: 'right', opacity: submitOpacity}]}>DODAJ</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const getBackgroundForSelected = (state) => {
    return state.couple[state.selectedPerson].color
}

const mapStateToProps = (state) => {
    let submitEnabled = state.add.title !== '' && state.add.price !== ''
    return ({
        backgroundColor: getBackgroundForSelected(state.add),
        submitEnabled: submitEnabled
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (nav) => {
            dispatch(submitExpense(nav))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
