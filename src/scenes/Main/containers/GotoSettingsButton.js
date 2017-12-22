import {connect} from 'react-redux'
import GotoSettingsComp from '../components/GotoSettingsComp'

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            console.log("settings")
        }
    }
}

const GotoSettingsButton = connect(
    mapStateToProps,
    mapDispatchToProps
) (GotoSettingsComp)

export default GotoSettingsButton