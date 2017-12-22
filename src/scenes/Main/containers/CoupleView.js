import {connect} from 'react-redux'
import CoupleComp from '../components/CoupleComp'


const mapStateToProps = state => {
    console.log(state.main)
    if (typeof state.main.couple === 'undefined') return {
        person1: {name: 'person1'},
        person2: {name: 'person2'},
        diffPrice: 22
    }
    let persons = [state.main.verdictPerson]
    if (state.main.verdictPerson.name === state.main.couple.persons[0].name)
        persons.push(state.main.couple.persons[1])
    else persons.push(state.main.couple.persons[0])
    return {
        person1: persons[1],
        person2: persons[0],
        diffPrice: state.main.diffPrice,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // in the future
    }
}

const CoupleView = connect(
    mapStateToProps,
    mapDispatchToProps
)(CoupleComp)

export default CoupleView