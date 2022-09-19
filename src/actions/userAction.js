export const userAction = () => dispatch => {
    dispatch({
     type: 'USER_ACTION',
     payload: 'result_of_user_action'
    })
   }