import Localstorage from "./localstorage"

const isLoggedIn = () => {
    const loggedInUser = Localstorage.get('user')

    return loggedInUser ? true : false
}


const getUserId = () => {
    const loggedInUser = Localstorage.get('user');
    return loggedInUser ? loggedInUser : null;
}


export {
    getUserId,
}
export default isLoggedIn