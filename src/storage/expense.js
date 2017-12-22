export default class Expense {
    static schema = {
        name: 'Expense',
        primaryKey: 'id',
        properties: {
            id: 'string',
            name: 'string',
            price: 'double',
            person: 'Person',
            createdAt: 'date'
        }
    }
}