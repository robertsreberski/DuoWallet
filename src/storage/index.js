import Realm from 'realm'
import Expense from './expense'
import Group from './group'
import Person from './person'
import Profile from './profile'

export default Realm.open({ schema: [Profile, Expense, Group, Person] })
