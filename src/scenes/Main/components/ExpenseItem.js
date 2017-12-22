import React, {Component} from 'react'
import color from '@assets/colors'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'

const styles = StyleSheet.create({
    bg: {
        marginHorizontal: 20,
        marginVertical: 5,
        elevation: 1,
        backgroundColor: '#ffffff',
        borderRadius: 6,
    },
    personText: {
        fontSize: 16,
        fontFamily: 'sans-serif',
        fontWeight: '900',
        marginBottom: -5,
        color: color.maleBlue
    },
    nameText: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: color.blackish,
    },
    priceText: {
        fontSize: 16,
        fontFamily: 'sans-serif-light',
        color: color.blackish,
        textAlign: 'right'
    }
})

const Expense = ({ id, personName, personColor, name, price, showOptions }) => (
    <View style={styles.bg}>
        <TouchableNativeFeedback
            onLongPress={()=>showOptions(id)}
            background={TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true)}>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <Text style={[styles.personText, {color: personColor}]}>{personName}</Text>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.priceText}>{price}zł</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
)

Expense.propTypes = {
    id: PropTypes.string.isRequired,
    personName: PropTypes.string.isRequired,
    personColor: PropTypes.string.isRequired,
    showOptions: PropTypes.func,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,

}

export default Expense