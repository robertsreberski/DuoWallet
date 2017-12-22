import {connect} from 'react-redux'
import ExpenseList from '../components/ExpenseListComp'
import BottomSheet from 'react-native-bottomsheet'
import {deleteExpense} from "../actions";

const getSectionedExpenses = (expenses = []) => {
    const sectioned = []
    console.log(expenses)
    expenses.forEach(it => {
        if (sectioned.length === 0 ||
            sectioned[sectioned.length - 1].title !== it.createdAt.toLocaleDateString())
            sectioned.push({
                title: it.createdAt.toLocaleDateString(),
                data: []
            })

        sectioned[sectioned.length-1].data.push({
            key: it.id,
            id: it.id,
            name: it.name,
            price: it.price,
            personName: it.person.name,
            personColor: it.person.color
        })

    })
    console.log(sectioned)
    return sectioned
}

const mapStateToProps = state => {
    return {
        expenses: getSectionedExpenses(state.main.expenses)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showOptions: (id) => {
            BottomSheet.showBottomSheetWithOptions({
                options: ['Edytuj', 'Usuń'],
                title: 'Co chcesz zrobić z tym wydatkiem?',
                cancelButtonIndex: 3,
            }, (value) => {
                switch(value) {
                    case 0: {
                        alert("Jeszcze 'niewiem' co z tym zrobić!")
                        break
                    }
                    case 1: {
                        dispatch(deleteExpense(id))
                        break
                    }
                }
            })
        }
    }
}

const ExpenseListWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseList)

export default ExpenseListWrapper