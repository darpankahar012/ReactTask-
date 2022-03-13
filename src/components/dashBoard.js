import React, { useEffect, useState } from 'react'
import { userService } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../store/actions";
import Table from './Table';
import { toast } from 'react-toastify';


function DashBoard(props) {
    const dispatch = useDispatch();

    const {
        clientsList,
        createUserSuccess,
        userDetailsSuccess,
        deleteUserSuccess,
        updateUserSuccess,
    } = useSelector(state => state.client)

    const [userListData, setUserListData] = useState([])
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        dispatch(userService.userList())
    }, []);

    useEffect(() => {
        if (Object.keys(userDetailsSuccess).length !== 0) {
            setUserDetails(userDetailsSuccess)
        } else {
            setUserDetails({})
        }
    }, [userDetailsSuccess]);

    useEffect(() => {
        if (deleteUserSuccess) toast.success('User Delete Successfully !', { autoClose: 3000 })
        dispatch(userService.userList())
        dispatch(resetState());
    }, [deleteUserSuccess]);

    useEffect(() => {
        if (createUserSuccess) {
            dispatch(userService.userList())
            toast.success('User Added Successfully !', { autoClose: 3000 })
            dispatch(resetState());
        }
    }, [createUserSuccess]);

    useEffect(() => {
        if (Object.keys(updateUserSuccess).length !== 0) {
            dispatch(userService.userList())
            toast.success('User Updated Successfully !', { autoClose: 3000 })
            dispatch(resetState());
        }
    }, [updateUserSuccess]);

    useEffect(() => {
        if (clientsList.length > 0) setUserListData(clientsList)
    }, [clientsList]);

    const createUser = (value) => {
        if (Object.keys(userDetailsSuccess).length !== 0) {
            let id = value.id
            delete value.id
            dispatch(userService.updateUserDetails(id, value))
        } else {
            dispatch(userService.createUser(value))
        }
    }
    const getInfo = (value) => {
        dispatch(userService.getUserDetails(value))
    }
    const deleteUser = (value) => {
        dispatch(userService.deleteUser(value))
    }
    const reset = () => {
        dispatch(resetState());
    }

    return (
        <>
            <Table
                data={userListData}
                createUser={createUser}
                createUserSuccess={createUserSuccess}
                getInfo={getInfo}
                deleteUser={deleteUser}
                userDetails={userDetails}
                updateUserSuccess={updateUserSuccess}
                reset={reset}
            />
        </>
    )
}

export default DashBoard;