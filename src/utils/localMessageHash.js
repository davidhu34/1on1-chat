//import uuid from 'uuid'
import md5 from 'md5'

let temp = 14
export default obj => {
	return md5(JSON.stringify(obj))
	//return String(temp++)
}