import {StyleSheet} from 'react-native'
import color from '@assets/colors'

export default StyleSheet.create({
        bottomBackground: {
            flex: 1,
            backgroundColor: color.blackish,
        },
        upperBackground: {
            flex: 1,
            backgroundColor: '#ffffff',
            marginTop: 6,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
        },
        topBarContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 25
        },
        pastDatesText: {
            fontFamily: 'sans-serif-medium',
            fontSize: 20,
            opacity: 70,
            textAlign: "center",
        },
    }
)