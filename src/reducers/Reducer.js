const initialState = {
    appName: 'Redux React',
    desc : 'Action, Reducer, Store Application demo'
   };



   const Reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ITEMS_REQUEST':
        console.log("hello")
    return Object.assign({}, state, {
        appName: action.payload.appName,
        desc : action.payload.desc
    })
    default:
    return state;
    }
   }
   export default Reducer;