module.exports =
    data = {
        data: null,
        sw: false, //sw = switch, true == on, false == off
        nbip: null,
        nbport: null,
    }

// import {createStore} from 'redux'

// let initialStore = {
//     data: '',
//     sw: '',
//     nbip: '',
//     nbport: ''
// }
// var store = createStore(reducer)
// let reducer = (state = initialStore, action) => {
//     switch (action.type) {
//         case "Data": state = {
//             ...state,
//             data: action.payload
//         }
//         case "Sw": state = {
//             ...state,
//             sw: action.payload
//         }
//         case "Nbip": state = {
//             ...state,
//             nbip: action.payload
//         }
//         case "Nbport": state = {
//             ...state,
//             nbport: action.payload
//         }
//         default: state
//     }
//     return state
// }
// module.exports=  store