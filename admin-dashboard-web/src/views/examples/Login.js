/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

// Validation 
import { Formik } from 'formik';
import  * as Yup from 'yup';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  FormFeedback
} from "reactstrap";

class Login extends Component {

  _handleFormSubmit(values){
    // this.props.logIn(values);
    console.log(values);
    // this.bag = bag;
  }
   
  
  render() {

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>

              <Formik 
                initialValues={{email:"", password:""}}
                onSubmit={this._handleFormSubmit.bind(this)}
                validationSchema={Yup.object().shape({
                  email:Yup.string().min(10).required().email(),
                  password: Yup.string().min(8).required()
                })}
                  render={({
                    handleChange,
                    handleSubmit,
                    isValid,
                    isSubmiting,
                    handleBlur,
                    errors,
                    touched,
                  }) =>(


                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative shadow">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            invalid={errors.email && touched.email}
                            placeholder="Email..."
                            type="email"
                            autoComplete="new-email"
                            onChange={handleChange} 
                            name="email" 
                            onBlur={handleBlur} 
                          />
                          {errors.email && touched.email ? (
                            <FormFeedback className="px-2">{errors.email}</FormFeedback>
                          ):null}
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative shadow">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            invalid={errors.password && touched.password}
                            placeholder="Password"
                            type="password"
                            autoComplete="new-password"
                            onChange={handleChange} 
                            name="password" 
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password ? (
                            <FormFeedback className="px-2">{errors.password}</FormFeedback>
                          ):null}
                        </InputGroup>
                      </FormGroup>
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                      </div>
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button"
                          onClick={handleSubmit}
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  )
                }
              />
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }

};

export default Login;
