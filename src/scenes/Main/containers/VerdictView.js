import {connect} from 'react-redux'
import VerdictComp from '../components/VerdictComp'

const mapStateToProps = state => {
    return {
        name: state.main.verdictPerson.name,
        color: state.main.verdictPerson.color,
    }
}

const VerdictView = connect(
    mapStateToProps
) (VerdictComp)

export default VerdictView