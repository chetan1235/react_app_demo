
const initialState = {
    data: []
   };



   const UserReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'USERLIST':
    return Object.assign({}, state, {
        data: action.payload
    })
    default:
    return state;
    }
   }
   export default UserReducer;