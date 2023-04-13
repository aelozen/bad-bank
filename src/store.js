import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    userData: [{ name: null, email: null, password: null }]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: [...state.userData, action.payload]
            };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: rootReducer
});

export default store;