import { combineReducers } from 'redux'
import { messageData as Message } from './messages'
import { roomData as Room } from './rooms'
import { userData as User} from  './users'

const App = combineReducers({
    Message,
    Room,
    User
})

export default App
