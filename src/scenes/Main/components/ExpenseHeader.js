import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    dateSectionHeader: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 5,
    },
})

const Header = ({dateText}) => <Text style={styles.dateSectionHeader}>{dateText}</Text>

Header.propTypes = {
    dateText: PropTypes.string.isRequired
}

export default Header


