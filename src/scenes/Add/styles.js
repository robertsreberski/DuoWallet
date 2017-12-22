import {StyleSheet} from 'react-native'
import color from '@assets/colors'

export default StyleSheet.create({
    more: {
        backgroundColor: color.maleBlue,
        flex: 1,
    },
    miscText: {
        color: '#fafafa',
        opacity: 0.8,
        fontWeight: 'bold',
        fontSize: 18,
        paddingHorizontal: 5,
    },
    bottomStrip: {
        position: 'absolute',
        padding: 20,
        bottom: 0,
        right: 0,
    }
})
