export default class Person {
    static schema = {
        name: 'Person',
        properties: {
            id: 'string',
            name: 'string',
            color: 'string', // 0 for male, 1 for female
            summarize: 'double'
        }
    }
}