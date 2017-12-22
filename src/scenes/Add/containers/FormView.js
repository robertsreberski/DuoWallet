import Form from '../components/FormComp'
import {updateTitle, updatePrice, updateDate, updatePerson, loadCouple} from '../actions'
import {connect} from 'react-redux'

const formatToday = (today) => {
    return today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
}

const mapStateToProps = (state) => {
    let date = formatToday(new Date(state.add.date))
    return {
        personName1: state.add.couple[0].name,
        personName2: state.add.couple[1].name,
        selectedPerson: state.add.selectedPerson,
        date: date,
        price: state.add.price
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCouple: () => {
            dispatch(loadCouple())
        },
        personClicked: (id) => {
            dispatch(updatePerson(id))
        },
        dateChanged: (newDate) => {
            dispatch(updateDate(newDate))
        },
        titleChanged: (title) => {
            dispatch(updateTitle(title))
        },
        priceChanged: (price) => {
            dispatch(updatePrice(price))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)