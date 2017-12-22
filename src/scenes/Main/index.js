import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, ScrollView, StatusBar} from 'react-native'
import ActionButton from 'react-native-action-button'
import DateView from './containers/DateView'
import ExpenseList from './containers/ExpenseList'
import SettingsButton from './containers/GotoSettingsButton'
import CoupleView from './containers/CoupleView'
import VerdictView from './containers/VerdictView'
import {loadPastExpenses,loadCouple} from './actions'
import {goToAdd} from "@navigation/Main/actions"
import styles from './styles'
import color from '@assets/colors'

class MainScreen extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        return (
            <View style={styles.bottomBackground}>
                <StatusBar
                    backgroundColor={color.blackish}
                    barStyle='light-content'
                />
                <ScrollView style={styles.upperBackground}>
                    <View style={styles.topBarContainer}>
                        <CoupleView/>
                        <SettingsButton/>
                    </View>
                    <DateView/>
                    <VerdictView/>
                    <Text style={styles.pastDatesText}>Poprzednie spotkania...</Text>
                    <ExpenseList/>
                </ScrollView>
                <ActionButton
                    buttonColor={this.props.fabColor || color.maleBlue}
                    onPress={() => this.props.navigation.dispatch(goToAdd())}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fabColor: state.main.verdictPerson.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => {
            dispatch(loadCouple())
            dispatch(loadPastExpenses())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

