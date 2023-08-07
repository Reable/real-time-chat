import React, { useCallback, useContext } from 'react'
import {Alert, Button, Form, Row, Col, Stack} from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext';

export default function Login () {
  
  const { 
    loginInfo, updateLoginInfo,
    loginUser, loginError, isLoginLoading,
  } = useContext(AuthContext);

  const updateInfo = useCallback((key) => {
    return useCallback((event) => {
      loginInfo[key] = event.target.value;
      updateLoginInfo(loginInfo)
    }, [])
  }, [])

  return (
	  <>
      <Form onSubmit={loginUser}>
        <Row style={{
          height: '90vh',
          justifyContent: "center",
          paddingTop: "20%"
          }}>
          <Col xs="6">
            <Stack gap="3">
              <h2>Login</h2>

              <Form.Control type='email' placeholder='email' onChange={updateInfo('email')}/>
              <Form.Control type='password' placeholder='password' onChange={updateInfo('password')}/>
              
              <Button variant='primary' type='submit' >
                { isLoginLoading ? 'Authorization' : 'Login' }
              </Button>

              { loginError?.error && <Alert variant='danger'>
                <p>{loginError.message}</p>
              </Alert> }
            </Stack>  
          </Col>
        </Row>
      </Form>
    </>
  )
}
