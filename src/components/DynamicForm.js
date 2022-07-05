import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formDrug from "./../drug1.json"
import InputGroup from 'react-bootstrap/InputGroup';
import Select from './elements/Select';


const DynamicForm = () => {

    const [value1, setValue1] = useState({
        gestationalAge: 0
    });


    const handleSubmit = () => {

    };

    const handleChange = (e) => {
        console.log(e.target.value, e.target.name, "27")

        setValue1({ ...value1, "gestationalAge": e.target.value })
    }
    return (
        <>

            <Container>
                <div className='mb-2 mt-2 text-center' >Form</div>
                <Form onSubmit={handleSubmit}>

                    {
                        formDrug.fields.map((field, i) => {

                            if (field.type === "dropdown") {
                                return (
                                    <Select field_label={field.label} field_options={field.items} />
                                )
                            }
                            else {
                                return (
                                    <>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Label>{field.label}</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control
                                                    type={field.type}
                                                    required={field.isRequired}
                                                    onChange={handleChange}
                                                    value={value1}
                                                    name={field.key}
                                                />
                                            </InputGroup>
                                        </Form.Group>


                                    </>

                                )

                            }


                        })
                    }
                    <Button
                        variant="primary"
                        type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    )
}

export default DynamicForm