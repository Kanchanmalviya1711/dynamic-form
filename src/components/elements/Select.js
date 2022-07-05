import React from 'react'
import Form from 'react-bootstrap/Form';

const Select = ({ field_label, field_options }) => {
    return (
        <>
            <Form.Label className="form-label">{field_label}</Form.Label>

            <Form.Select aria-label="Default select example">
                <option >Open this select menu</option>
                {field_options.length > 0 && field_options.map((option) =>
                    <option value={option.value} >{option.text}</option>

                )}
            </Form.Select>
        </>
    )
}

export default Select
