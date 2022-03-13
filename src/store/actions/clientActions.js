import { clientActionTypes } from "../constants"

export const getAllUser = () => {
    return {
        type: clientActionTypes.GET_ALL_USER,
    }
}

export const getAllUserSuccess = (data) => {
    return {
        type: clientActionTypes.GET_ALL_USER_SUCCESS,
        payload: data
    }
}

export const getAllUserError = (error) => {
    return {
        type: clientActionTypes.GET_ALL_USER_ERROR,
        payload: error
    }
}
export const createUser = () => {
    return {
        type: clientActionTypes.CREATE_USER,
    }
}

export const createUserSuccess = (data) => {
    return {
        type: clientActionTypes.CREATE_USER_SUCCESS,
        payload: data
    }
}

export const createUserError = (error) => {
    return {
        type: clientActionTypes.CREATE_USER_ERROR,
        payload: error
    }
}
export const userDetails = () => {
    return {
        type: clientActionTypes.GET_USER_DETAILS,
    }
}

export const userDetailsSuccess = (data) => {
    return {
        type: clientActionTypes.GET_USER_DETAILS_SUCCESS,
        payload: data
    }
}

export const userDetailsError = (error) => {
    return {
        type: clientActionTypes.GET_USER_DETAILS_ERROR,
        payload: error
    }
}

export const updateUser = () => {
    return {
        type: clientActionTypes.UPDATE_USER,
    }
}

export const updateUserSuccess = (data) => {
    return {
        type: clientActionTypes.UPDATE_USER_SUCCESS,
        payload: data
    }
}


export const updateUserError = (error) => {
    return {
        type: clientActionTypes.UPDATE_USER_ERROR,
        payload: error
    }
}
export const deleteUser = () => {
    return {
        type: clientActionTypes.DELETE_USER,
    }
}

export const deleteUserSuccess = (data) => {
    return {
        type: clientActionTypes.DELETE_USER_SUCCESS,
        payload: data
    }
}


export const deleteUserError = (error) => {
    return {
        type: clientActionTypes.DELETE_USER_ERROR,
        payload: error
    }
}


export const resetState = () => {
    return {
        type: clientActionTypes.RESET,
    }
}