import isLoggedIn, { getUserId } from "../utils/isLoggedIn"


const initialState = {
    isLoggedIn: isLoggedIn(),
    user: getUserId(), 
    user: null, 
    supervisions: null,
}


export default initialState