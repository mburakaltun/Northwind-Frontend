import React, {Component} from 'react';
import {Form, FormGroup, Button, Input, Label} from "reactstrap";
import alertify from "alertifyjs";

class SignUpForm extends Component {

    state = {email: "", password: "", description: "", city: ""}

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email, 5);
        alertify.message(this.state.password, 5);
        alertify.error(this.state.description, 5);
        alertify.warning(this.state.city, 5);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label> Email </Label>
                    <Input type="email" name="email" placeholder="Enter email" onChange={this.handleChange}> </Input>
                </FormGroup>
                <FormGroup>
                    <Label> Password </Label>
                    <Input type="password" name="password" placeholder="Enter password"
                           onChange={this.handleChange}> </Input>
                </FormGroup>
                <FormGroup>
                    <Label> Description </Label>
                    <Input type="textarea" name="description" placeholder="Write here..."
                           onChange={this.handleChange}> </Input>
                </FormGroup>
                <FormGroup>
                    <Label> City </Label>
                    <Input type="select" name="city" onChange={this.handleChange}>
                        <option> New York </option>
                        <option> Washington DC </option>
                        <option> San Fransisco </option>
                        <option> Albuquerque </option>
                    </Input>
                </FormGroup>
                <Button type="submit" name="save" onClick={this.handleSubmit}> Submit </Button>
            </Form>
        );
    }
}

export default SignUpForm;