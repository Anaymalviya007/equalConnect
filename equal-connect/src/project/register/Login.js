import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Login = () => {
  return (
    <div>
      <Container>

<Row className='mt-5'>
  <Col sm={{offset: 3,size:6}}>


  <Card>
  <CardHeader> <h3> Login </h3> </CardHeader>
  <CardBody>
    <Form>

      <FormGroup>
        <Label for='username'>Username</Label>
        <Input placeholder='email' type='email' id='username' />
      </FormGroup>

      <FormGroup>
        <Label for='password'>Password</Label>
        <Input placeholder='password' type='password' id='password' />
      </FormGroup>

      <Container className='text-center'>
        <Button color='dark'> Login </Button>
        <p>Don't have an account<Link to='/register' className='ms-2'>register</Link></p>
      </Container>
    </Form>
  </CardBody>
</Card>
  
  
  </Col>
</Row>


</Container>
    </div>
  )
}

export default Login
