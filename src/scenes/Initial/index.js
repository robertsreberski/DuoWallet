import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPerson, finishInit} from "./actions";
import {View, Text, TextInput, ScrollView, Button, Platform} from 'react-native'
import styles from './styles'
import color from '@assets/colors'


class InitialScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.parent}>
                <Text style={styles.title}>Witajcie!</Text>
                <Text style={styles.subtitle}>Zanim zaczniecie kontrolować swoje wydatki, powiedzcie - jak macie na
                    imię?</Text>
                <TextInput
                    style={{ fontSize: 20}}
                    placeholder="Podaj imię pierwszej osoby"
                    onChangeText={(text) => this.props.onPersonTextChanged(0, text)}
                    underlineColorAndroid={color.maleBlue}
                    selectionColor={color.maleBlue}
                />
                <TextInput
                    style={{ fontSize: 20}}
                    placeholder="Podaj imię drugiej osoby"
                    onChangeText={(text) => this.props.onPersonTextChanged(1, text)}
                    underlineColorAndroid={color.femalePink}
                    selectionColor={color.femalePink}
                />
                <Button
                    title="Zaczynamy!"
                    color={color.maleBlue}
                    onPress={()=>this.props.onInitFinished(this.props.navigation)}
                />
            </ScrollView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPersonTextChanged: (id, text) => {
            dispatch(addPerson(id,text))
        },
        onInitFinished: (nav) => {
            dispatch(finishInit(nav))
        }
    }
}

export default connect((state)=>{return{}}, mapDispatchToProps)(InitialScreen)