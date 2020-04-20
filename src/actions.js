const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM';

// an action is an object with a type  property
// actionCreator is a function that returns an action
function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    } 
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
    }
}

function fetchUsers(){
    return function(dispatch) {
        dispatch(buyCake());
        axios.get('xxx')
        .then(response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
    }
}