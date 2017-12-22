import {connect} from 'react-redux'
import DateComp from '../components/DateComp'

const mapStateToProps = state => {
    return {
        date: state.main.today.toLocaleDateString()
    }
}

const DateView = connect(
    mapStateToProps
) (DateComp)



export default DateView