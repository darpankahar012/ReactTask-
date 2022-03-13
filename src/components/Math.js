import React, { useState, useEffect } from "react";
import {
    Form,
    FormGroup,
    Input,
} from 'reactstrap';
import "../App.css";

function Math() {
    const [valueObj, setValueObj] = useState({
        value1: 60.20,
        value2: 30,
    })
    const [operation, setOperation] = useState("Add")
    const [operationKey, setOperationKey] = useState("+")
    const [answer, setAnswer] = useState(0)

    useEffect(() => {
        let answer = parseFloat(valueObj.value1) + parseFloat(valueObj.value2)
        setAnswer(answer.toFixed(2))
    }, [])


    const handleChange = (e) => {
        setValueObj({ ...valueObj, [e.target.name]: e.target.value, })
        if (e.target.name === "value1") {
            let answer = 0
            if (operationKey === "+") {
                answer = parseFloat(valueObj.value2) + parseFloat(e.target.value)
            } else if (operationKey === "-") {
                answer = parseFloat(valueObj.value2) - parseFloat(e.target.value)
            } else if (operationKey === "*") {
                answer = parseFloat(valueObj.value2) * parseFloat(e.target.value)
            } else {
                answer = parseFloat(valueObj.value2) / parseFloat(e.target.value)
            }
            setAnswer(answer.toFixed(2))
        } else {
            let answer = 0
            if (operationKey === "+") {
                answer = parseFloat(valueObj.value1) + parseFloat(e.target.value)
            } else if (operationKey === "-") {
                answer = parseFloat(valueObj.value1) - parseFloat(e.target.value)
            } else if (operationKey === "*") {
                answer = parseFloat(valueObj.value1) * parseFloat(e.target.value)
            } else {
                answer = parseFloat(valueObj.value1) / parseFloat(e.target.value)
            }
            setAnswer(answer.toFixed(2))
        }
    }


    const result = (e) => {
        setOperation(e.target.value)
        if (e.target.value === "Add") {
            let answer = parseFloat(valueObj.value1) + parseFloat(valueObj.value2)
            setAnswer(answer.toFixed(2))
            setOperationKey("+")
        } else if (e.target.value === "Sub") {
            let answer = parseFloat(valueObj.value1) - parseFloat(valueObj.value2)
            setAnswer(answer.toFixed(2))
            setOperationKey("-")
        } else if (e.target.value === "Mul") {
            let answer = parseFloat(valueObj.value1) * parseFloat(valueObj.value2)
            setAnswer(answer.toFixed(2))
            setOperationKey("*")
        } else {
            let answer = parseFloat(valueObj.value1) / parseFloat(valueObj.value2)
            setAnswer(answer.toFixed(2))
            setOperationKey("/")
        }
    }

    return (
        <>
            <Form className="math-form">
                <h2 className="text-center mb-5">Math operation</h2>
                <FormGroup className="mb-3">
                    <Input
                        placeholder="Enter Value 1"
                        type="number"
                        name="value1"
                        value={valueObj.value1}
                        onChange={(e) => handleChange(e)}
                    >
                    </Input>
                </FormGroup>
                <FormGroup className="mb-3">
                    <Input
                        placeholder="Enter Value 2"
                        type="number"
                        name="value2"
                        value={valueObj.value2}
                        onChange={(e) => handleChange(e)}
                    >
                    </Input>
                </FormGroup>

                <FormGroup className="mb-3">
                    <Input
                        type="select"
                        name="selectProduct"
                        value={operation}
                        onChange={(e) => result(e)}
                    >
                        <option value="Add">{"Add"}</option>
                        <option value="Sub" >{"Sub"}</option>
                        <option value="Mul" >{"Mul"}</option>
                        <option value="Div" >{"Div"}</option>
                    </Input>
                </FormGroup>

                <p>{`Expression : ${valueObj.value1} 
                ${operationKey}
                ${valueObj.value2} = ${answer} `}</p>

            </Form>

        </>
    )
}

export default Math