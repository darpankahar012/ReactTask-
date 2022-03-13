import axios from "axios";
import {
    getAllUser,
    getAllUserSuccess,
    getAllUserError,
    createUser,
    createUserSuccess,
    createUserError,
    userDetails,
    userDetailsSuccess,
    userDetailsError,
    deleteUser,
    deleteUserSuccess,
    deleteUserError,
    updateUser,
    updateUserSuccess,
    updateUserError,
} from "../store/actions";

export class userService {

    static createUser = (data) => {
        return (dispatch) => {
            dispatch(createUser());
            axios.post(`${process.env.REACT_APP_API_URL}public/v2/users`,
                data,
                {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                    },
                })
                .then((response) => {
                    if (response.status === 201) {
                        dispatch(createUserSuccess(true));
                    } else {
                        dispatch(createUserError("User Not Created !"));
                    }
                })
                .catch((error) => {
                    if (error.response.staus === 422) {
                        dispatch(createUserError(error.response.data[0].message));
                    } else {
                        dispatch(createUserError("User Not Created !"));
                    }
                });
        };
    };
    static userList = () => {
        return (dispatch) => {
            dispatch(getAllUser());
            axios
                .get(`${process.env.REACT_APP_API_URL}public/v2/users`)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(getAllUserSuccess(response.data));
                    } else {
                        dispatch(getAllUserError("User List Error"));
                    }
                })
                .catch((error) => {
                    dispatch(getAllUserError("User List error"));
                });
        };
    };

    static deleteUser = (data) => {
        return (dispatch) => {
            dispatch(deleteUser());
            axios.delete(`${process.env.REACT_APP_API_URL}public/v2/users/${data}`,
                {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                    },
                }).then((response) => {
                    console.log("response", response)
                    if (response.status === 204) {
                        dispatch(deleteUserSuccess(true));
                    } else {
                        dispatch(deleteUserError(true));
                    }
                })
                .catch((error) => {
                    if (error.response.staus === 422) {
                        dispatch(deleteUserError(error.response.data[0].message));
                    } else {
                        dispatch(deleteUserError("User Not Deleted !"));
                    }
                });
        };
    };

    static getUserDetails = (data) => {
        return (dispatch) => {
            dispatch(userDetails());
            axios.get(`${process.env.REACT_APP_API_URL}public/v2/users/${data}`,
                {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                    },
                }).then((response) => {
                    console.log("response", response)
                    if (response.status === 200) {
                        dispatch(userDetailsSuccess(response.data));
                    } else {
                        dispatch(userDetailsError(true));
                    }
                })
                .catch((error) => {
                    if (error.response.staus === 422) {
                        dispatch(userDetailsError(error.response.data[0].message));
                    } else {
                        dispatch(userDetailsError("User Details Not Found !"));
                    }
                });
        };
    };

    static updateUserDetails = (id, data) => {
        return (dispatch) => {
            dispatch(updateUser());
            axios.put(`${process.env.REACT_APP_API_URL}public/v2/users/${id}`, data,
                {
                    headers: {
                        "content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                    },
                }).then((response) => {
                    console.log("response", response)
                    if (response.status === 200) {
                        dispatch(updateUserSuccess(response.data));
                    } else {
                        dispatch(updateUserError(true));
                    }
                })
                .catch((error) => {
                    if (error.response.staus === 422) {
                        dispatch(updateUserError(error.response.data[0].message));
                    } else {
                        dispatch(updateUserError("User Details Not Updated !"));
                    }
                });
        };
    };

}
