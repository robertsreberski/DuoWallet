import React, {Component} from 'react'
import {View, TouchableWithoutFeedback, Text, StyleSheet, TextInput} from 'react-native'
import PropTypes from 'prop-types'
import DatePicker from 'react-native-datepicker'


const styles = StyleSheet.create({
    personSelectorParent: {
        padding: 20,
        flexDirection: 'row'
    },
    titleText: {
        paddingHorizontal: 20,
        fontSize: 42,
        fontWeight: 'bold',
        color: '#fafafa',
        opacity: 0.9
    },
    priceText: {
        marginTop: -20,
        paddingHorizontal: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fafafa',
        opacity: 0.7
    },
    dateParent: {
        marginHorizontal: 20,
    },
    dateInput: {
        borderWidth: 0,
        marginLeft: 0,
    },
    dateText: {
        color: '#fafafa',
        fontSize: 18,
        fontWeight: 'bold'
    },
    miscText: {
        color: '#fafafa',
        opacity: 0.8,
        fontWeight: 'bold',
        fontSize: 22,
        paddingHorizontal: 5,
    },
})

class Form extends Component {

    componentDidMount() {
        this.props.loadCouple()
    }

    getStylesForSelected(id) {
        if (id === this.props.selectedPerson) return [styles.miscText, {opacity: 1.0}]
        else return [styles.miscText]
    }

    render() {
        let priceVal = ''
        if (this.props.price !== undefined) priceVal = 'PLN ' + this.props.price

        return (
            <View>
                <View style={styles.personSelectorParent}>
                    <TouchableWithoutFeedback onPress={() => this.props.personClicked(0)}>
                        <View><Text style={this.getStylesForSelected(0)}>{this.props.personName1}</Text></View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.miscText}>//</Text>
                    <TouchableWithoutFeedback onPress={() => this.props.personClicked(1)}>
                        <View><Text style={this.getStylesForSelected(1)}>{this.props.personName2}</Text></View>
                    </TouchableWithoutFeedback>
                </View>
                <DatePicker
                    style={styles.dateParent}
                    mode="date"
                    date={this.props.date}
                    customStyles={{
                        dateInput: styles.dateInput,
                        dateText: styles.dateText,
                        placeholderText: styles.dateText
                    }}
                    onDateChange={(date) => this.props.dateChanged(date)}
                    placeholder="Wybierz datę płatności"
                    format="YYYY-MM-DD"
                />
                <TextInput
                    style={styles.titleText}
                    multiline={true}
                    numberOfLines={2}
                    onChangeText={(text) => this.props.titleChanged(text)}
                    placeholder="Za co płacisz?"
                    returnKeyType="next"
                    autoCapitalize='sentences'
                    placeholderTextColor="#fafafa"
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.priceText}
                    multiline={false}
                    onChangeText={(text) => this.props.priceChanged(text)}
                    placeholder="Ile płacisz?"
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholderTextColor="#fafafa"
                    underlineColorAndroid="transparent"
                    value={priceVal}
                />

            </View>
        )
    }
}

Form.propTypes = {
    selectedPerson: PropTypes.number.isRequired,
    personName1: PropTypes.string.isRequired,
    personName2: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    loadCouple: PropTypes.func.isRequired,
    personClicked: PropTypes.func.isRequired,
    dateChanged: PropTypes.func.isRequired,
    titleChanged: PropTypes.func.isRequired,
    priceChanged: PropTypes.func.isRequired,
    price: PropTypes.string.isRequired
}

export default Form

