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
import axios from "axios";

class Login extends Component {
  state= {
    errors: '',
    loading:false,
    auth:{}
  }
  async _handleFormSubmit(values){
    // this.props.logIn(values);
    // console.log(values);
    await axios.post('https://pfr-data.herokuapp.com/api/v1/admin/login', values).then((res)=>{
      const auth = res.data.message;
      console.log(auth);
      if (res.data.success) {
        this.setState({loading:true})
        localStorage.setItem('TOKEN', res.data.token)
        this.props.history.push('/admin')
      }
      return this.setState({errors:res.data.message})
    })
  }

  _loginBtn(handleSubmit){
    console.log(this.state.loading);
    const {loading} = this.state
    if (loading) {
      return <div >OKOK</div>;
    }
    return(
      <div className="text-center">
        <Button className="my-4" color="primary" type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          Sign in
        </Button>
      </div>
    )
  }
   
  
  render() {

    return (
      <>
        <div className="main-content" >
          <div className="header bg-gradient-warning py-7 py-lg-8 vh-100 vw-100">
            <div>
              <div className="header-body text-center mb-7">
                <div className="justify-content-center">
                  <Col className="w-auto mx-auto mt-5" lg="5" md="7">
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
                                <small className="text-danger">
                                  {this.state.errors}
                                </small>
                                {this._loginBtn(handleSubmit)}
                              </Form>
                            )
                          }
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
            </div>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
        </div>
          
      </>
    );
  }

};

export default Login;
