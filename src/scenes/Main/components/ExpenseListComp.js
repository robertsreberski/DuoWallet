import React from 'react'
import Expense from './ExpenseItem'
import Header from './ExpenseHeader'
import {SectionList} from 'react-native'
import PropTypes from 'prop-types'

const ExpenseList = ({showOptions, expenses}) => (
    <SectionList
        renderItem={({item}) => <Expense
            id={item.id}
            showOptions={(id)=>showOptions(id)}
            personName={item.personName}
            personColor={item.personColor}
            name={item.name}
            price={item.price}/>}
        renderSectionHeader={({section}) => <Header dateText={section.title}/>}
        sections={expenses}
    />
)

ExpenseList.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired, // date
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired, // expense_name
                price: PropTypes.number.isRequired, // expense_price
                personName: PropTypes.string.isRequired, // person_name
                personColor: PropTypes.string.isRequired,
            }))
        })
    ),
    showOptions: PropTypes.func.isRequired,
}

export default ExpenseList
