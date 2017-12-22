import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import color from '@assets/colors'

const styles = StyleSheet.create({
    parent: {
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontWeight: '900',
        fontSize: 30,
        marginBottom: -10,
        color: color.maleBlue
    },
    nameText: {
        fontWeight: '900',
        fontSize: 48,
        color: color.maleBlue,
    }
})


const VerdictText = ({name, color}) =>
    <View style={styles.parent}>
        <Text style={[styles.text, {color: color}]}>Dzisiaj płaci</Text>
        <Text style={[styles.nameText, {color: color}]}>{name}</Text>
    </View>

VerdictText.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default VerdictText

