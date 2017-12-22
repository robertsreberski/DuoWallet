import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import color from '@assets/colors'

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: '900',
        textAlign: 'right',
        color: color.maleBlue
    },
})


const CoupleComp = ({person1, person2, diffPrice}) =>
    <View style={styles.parent}>
        <View>
            <Text style={[styles.text, {color: person1.color, marginBottom: -6}]}>{person1.name}</Text>
            <Text style={[styles.text, {color: person2.color}]}>- {person2.name}</Text>
        </View>
        <Text style={[styles.text, {color: person1.color}]}> = {diffPrice}zł</Text>
    </View>

const personObj = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    summarize: PropTypes.number
}

CoupleComp.propTypes = {
    person1: PropTypes.shape(personObj).isRequired,
    person2: PropTypes.shape(personObj).isRequired,
    diffPrice: PropTypes.number.isRequired
}

export default CoupleComp
