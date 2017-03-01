import { connect } from 'react-redux'

import MessageList from './MessageList'

export default connect(
    state => {
    	const msgs = state.messages
		return {
			messages: Object.keys(msgs)
	    		.map( id => msgs[id] )
		}
	}
)( MessageList )