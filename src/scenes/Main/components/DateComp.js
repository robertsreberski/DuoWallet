import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import color from '@assets/colors'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'sans-serif-light',
        fontSize: 20,
        marginBottom: -6,
        backgroundColor: "transparent",
    },
    dateText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 20
    },
})

const DateText = ({date}) =>
    <View style={styles.parent}>
        <Text style={styles.text}>Przed nami piękny dzień</Text>
        <Text style={styles.dateText}>{date}</Text>
    </View>

DateText.propTypes = {
    date: PropTypes.string.isRequired
}

export default DateText
