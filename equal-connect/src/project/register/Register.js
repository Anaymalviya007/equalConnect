import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { signUp } from '../../services/userService'
const Register = () => {


  const[data, setData] = useState({
    username:'',
    password:'',
  })

  const [error,serError] = useState({
    error:{},
    isError:false
  })


  const handleChange = (event, property)=>{
    setData({...data, [property]:event.target.value})

  }


  const submitForm =(event)=>{
    event.preventDefault() 

    console.log(data)

    signUp(data).then((resp)=> {
      console.log(resp)
      console.log(" Success log ")
    }).catch((error)=>{
      console.log(error)
      console.log("error log")
    })

  }

  return (
    <div>
      <Container>

        <Row className='mt-5'>

          {/* {JSON.stringify(data)}   */}

          <Col sm={{offset: 3,size:6}}>


          <Card>
          <CardHeader> <h3> Register </h3> </CardHeader>
          <CardBody>
            <Form onSubmit={submitForm}>

              <FormGroup>
                <Label for='username'>username</Label>
                <Input 
                placeholder='email' 
                type='email' 
                id='username'
                onChange={(e)=> handleChange(e,'username')}
                value={data.username} />
              </FormGroup>

              <FormGroup>
                <Label for='password'>password</Label>
                <Input 
                placeholder='password' 
                type='password' 
                id='password'
                onChange={(e)=> handleChange(e,'password')}
                value={data.password} />
              </FormGroup>

              <Container className='text-center'>
                <Button color='dark'> Register </Button>
                <p>already have an account<Link to='/login' className='ms-2'>login</Link></p>
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

export default Register
