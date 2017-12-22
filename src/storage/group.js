export default class Couple {
    static schema = {
        name: 'Group',
        properties: {
            id: 'string',
            persons: { type: 'list', objectType: 'Person' }
        }
    }
}