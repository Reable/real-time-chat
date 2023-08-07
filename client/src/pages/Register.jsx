import {useCallback, useContext} from 'react';
import React from 'react'
import {Alert, Button, Form, Row, Col, Stack} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext';

export default function Register(){

  const { 
    registerInfo, updateRegisterInfo,
    registerUser, registerError, isRegisterLoading,
  } = useContext(AuthContext);

  const updateRegisterData = useCallback((key) => {
    return useCallback((event) => {
      registerInfo[key] = event.target.value;
      updateRegisterInfo(registerInfo);
    }, [])
  }, [])

  return (
	  <>
      <Form onSubmit={registerUser}>
        <Row style={{
          height: '90vh',
          justifyContent: "center",
          paddingTop: "20%"
          }}>
          <Col xs="6">
            <Stack gap="3">
            <h2>Register</h2>   

              <Form.Control type='text' placeholder='name' onChange={updateRegisterData('name')}/>
              <Form.Control type='email' placeholder='email' onChange={updateRegisterData('email')}/>
              <Form.Control type='password' placeholder='password' onChange={updateRegisterData('password')}/>
              
              <Button variant='primary' type='submit' >
                {isRegisterLoading ? 'Creating your account' : 'Register'}
              </Button>

              {registerError?.error && 
                <Alert variant='danger'>
                  <p>{registerError.message}</p>
                </Alert>
              }
              
            </Stack>  
          </Col>
        </Row>
      </Form>
    </>
  )
}
