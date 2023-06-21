
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'

const Login = () => {
    const [email,setEmail]=useState("")
    const [pwd,setPwd]=useState("")
    const [data,setData]=useState("")

   useEffect(()=>{
    axios.get('http://localhost:3000/user')
    .then((e)=>{
      setData(e.data)
    })
   },[])
        const validate=()=>{
          if(email === '' || email === null){
            toast.warning('Please Enter Email')
          }
          if(pwd === '' || pwd === null){
            toast.warning('Please Enter Password')
          }
          const user =data.find((data)=>
          {
            return data.email===email && data.pwd===pwd
          });
          console.log(user);
          if (user) {
            toast.success('login successful')
          }
          else{
            toast.warning('login failed')
          }
        }
  return (
    <div className='container mt-5'>
    <section className='d-flex justify-content-between '>

        <div className='left_data mt-5 p-5'   style={{width:"100%"}}>
            <h3 className='text-center col-lg-6'>Log In</h3>
            <Form >
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type='email' placeholder="Enter email" value={email} onChange={((e)=>{setEmail(e.target.value)})} required="" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"  value={pwd} onChange={((e)=>{setPwd(e.target.value)})} required="" />
      </Form.Group>
      </Form>
      <Button variant="primary"  className='col-lg-8' style={{background:"rgb(0, 0, 102)" }} onClick={validate}>
        LogIn
      </Button>
    </div>
    <div className='right_data mt-5' style={{width :"100%"}}>
              <div className='sign_img mt-5'>
                 <img src="./login.jpg" style={{maxWidth:400}} alt="" />
                  </div>
               </div>
     </section>
     </div>
  )
}

export default Login
