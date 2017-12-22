export default class User {
    static schema = {
        name: 'Profile',
        primaryKey: 'id',
        properties: {
            id: 'string',
            name: 'string',
            group: 'Group',
            historyOfExpenses: {type: 'list', objectType: 'Expense'}
        }
    }
}