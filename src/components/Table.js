import React, { useState, useEffect } from "react";
import {
    Table, Button, Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import "../App.css";

function TableList({ data, createUser, createUserSuccess, getInfo, deleteUser, userDetails, reset, updateUserSuccess }) {
    const [addModal, setAddModal] = useState(false)
    const [valueObj, setValueObj] = useState({
        name: "",
        email: "",
        gender: "male",
        status: "active",
    })
    const [formError, setFormError] = useState("")

    const handleChange = (e) => {
        setValueObj({ ...valueObj, [e.target.name]: e.target.value, })
        setFormError("")
    }

    const addUser = () => {
        if (valueObj.name === "" || valueObj.email === "") {
            setFormError("Please Enter Proper Details !")
        } else {
            createUser(valueObj)
        }
    }

    useEffect(() => {
        if (createUserSuccess) setAddModal(false)
        if (Object.keys(updateUserSuccess).length !== 0) setAddModal(false)
    }, [createUserSuccess, updateUserSuccess]);

    useEffect(() => {
        if (Object.keys(userDetails).length !== 0) {
            setAddModal(true)
            setValueObj(userDetails)
        } else {
            setValueObj({
                name: "",
                email: "",
                gender: "male",
                status: "active",
            })
        }
    }, [userDetails]);

    return (
        <div className="login-form">
            <div className="text-center">
                <div className="text-center">
                    <Button
                        outline color="success"
                        type="button"
                        onClick={() => {
                            setAddModal(true);
                            reset()
                        }}
                    >
                        Add User
                    </Button>
                </div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {data && data.map((obj, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{obj.email}</td>
                                    <td>{obj.gender}</td>
                                    <td>{obj.name}</td>
                                    <td>
                                        <Button
                                            outline color="info"
                                            type="button"
                                            size="sm"
                                            onClick={() => getInfo(obj.id)}
                                        >
                                            {"Edit"}
                                        </Button>
                                    </td>

                                    <td>
                                        <Button
                                            outline color="danger"
                                            type="button"
                                            size="sm"
                                            onClick={() => deleteUser(obj.id)}
                                        >
                                            {"Delete"}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>

                <Modal
                    isOpen={addModal}
                    toggle={() => {
                        setAddModal(false);
                        reset()
                    }}
                >
                    <ModalBody>
                        <Form className="login-form">
                            <h2 className="text-center">{Object.keys(userDetails).length !== 0 ? "Update User" : "Add User"}</h2>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Name"}</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={valueObj.name}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Input>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Email"}</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={valueObj.email}
                                    onChange={(e) => handleChange(e)}
                                >
                                </Input>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Name"}</Label>
                                <Input
                                    type="select"
                                    name="gender"
                                    value={valueObj.gender}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option >{"male"}</option>
                                    <option >{"female"}</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <Label className="mb-1">{"Status"}</Label>
                                <Input
                                    type="select"
                                    name="status"
                                    value={valueObj.status}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option >{"active"}</option>
                                    <option >{"inactive"}</option>
                                </Input>
                            </FormGroup>

                            <p>{formError}</p>

                            <div className="text-center">
                                <Button
                                    className="btn-sm btn-dark btn-block mt-3 "
                                    type="button"
                                    onClick={() => addUser()}
                                >
                                    {"Save"}
                                </Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );

}

export default TableList;