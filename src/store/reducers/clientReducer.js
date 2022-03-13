import { clientActionTypes } from "../constants"

const initialState = {
    loading: false,
    clientsList: [],
    clientListError: "",

    createUserLoading: false,
    createUserSuccess: "",
    createUserError: "",

    userDetailsLoading: false,
    userDetailsSuccess: {},
    userDetailsError: "",

    deleteUserLoading: false,
    deleteUserSuccess: "",
    deleteUserError: "",

    updateUserLoading: false,
    updateUserSuccess: {},
    updateUserError: "",
}

export const client = (state = initialState, action) => {
    switch (action.type) {
        case clientActionTypes.GET_ALL_USER:
            return {
                ...state,
                loading: true
            }
        case clientActionTypes.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                clientsList: action.payload,
                clientListError: ""
            }
        case clientActionTypes.GET_ALL_USER_ERROR:
            return {
                ...state,
                loading: false,
                clientListError: action.payload
            }
        case clientActionTypes.CREATE_USER:
            return {
                ...state,
                createUserLoading: true
            }
        case clientActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                createUserLoading: false,
                createUserSuccess: action.payload,
                createUserError: ""
            }
        case clientActionTypes.CREATE_USER_ERROR:
            return {
                ...state,
                createUserLoading: false,
                createUserError: action.payload
            }
        case clientActionTypes.GET_USER_DETAILS:
            return {
                ...state,
                userDetailsLoading: true
            }
        case clientActionTypes.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetailsLoading: false,
                userDetailsSuccess: action.payload,
                userDetailsError: ""
            }
        case clientActionTypes.GET_USER_DETAILS_ERROR:
            return {
                ...state,
                userDetailsLoading: false,
                userDetailsError: action.payload
            }
        case clientActionTypes.UPDATE_USER:
            return {
                ...state,
                updateUserLoading: true
            }
        case clientActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateUserLoading: false,
                updateUserSuccess: action.payload,
                updateUserError: ""
            }
        case clientActionTypes.UPDATE_USER_ERROR:
            return {
                ...state,
                updateUserLoading: false,
                updateUserError: action.payload
            }
        case clientActionTypes.DELETE_USER:
            return {
                ...state,
                deleteUserLoading: true
            }
        case clientActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUserLoading: false,
                deleteUserSuccess: action.payload,
                deleteUserError: ""
            }
        case clientActionTypes.DELETE_USER_ERROR:
            return {
                ...state,
                deleteUserLoading: false,
                deleteUserError: action.payload
            }
        case clientActionTypes.RESET:
            return {
                ...state,
                createUserLoading: false,
                createUserSuccess: "",
                createUserError: "",

                userDetailsLoading: false,
                userDetailsSuccess: "",
                userDetailsError: "",

                deleteUserLoading: false,
                deleteUserSuccess: "",
                deleteUserError: "",

                updateUserLoading: false,
                updateUserSuccess: {},
                updateUserError: "",
            }
        default:
            return state
    }
}