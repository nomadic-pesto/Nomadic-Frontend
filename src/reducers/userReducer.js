export default (state = {}, action) => {
    switch (action.type) {
     case 'USER_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }