const intialState = {
    loading: '',
    users: [],
    error: ''
};

const UserReducers = (state = intialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST': return {
            ...state,
            loading: true
        }
        case 'FETCH_USERS_SUCCESS': return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }

        case 'FETCH_USERS_FAILURE': return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

export default UserReducers;