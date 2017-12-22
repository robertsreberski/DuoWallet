import React from 'react'
import {Image, TouchableHighlight, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import icon from '@assets/icons'
import color from '@assets/colors'

const styles = StyleSheet.create({
    parent: {
        width: 26,
        height: 26,
        tintColor: color.blackish
    },
})

const GotoSettingsComp = ({onClick}) =>
    <TouchableHighlight onPress={() => onClick()}>
        <Image source={icon.settings} style={styles.parent}/>
    </TouchableHighlight>

GotoSettingsComp.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default GotoSettingsComp