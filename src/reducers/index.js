import { combineReducers } from 'redux'
import { messageData as Message } from './messages'
import { roomData as Room } from './rooms'
import { userData as User} from  './users'
import { ui } from './ui'
const App = combineReducers({
    Message,
    Room,
    User,
    ui
})

export default App
