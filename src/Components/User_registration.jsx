import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
const User_registration = () => {
  let[name,setName]=useState("")
  let[phno,setPhno]=useState("")
  let[email,setEmail]=useState("")
  let[pwd,setPwd]=useState("")
  const navigate=useNavigate()
  const Isvalidate=()=>{
    let isproceed=true;
    let errormessage ='Please enter the value in '
    console.log(name);
    if(name===null || name===''){
      isproceed = false
      errormessage += 'Username';
    }
    if(phno===null || phno===''){
      isproceed = false
      errormessage += 'Phno';
    }
    if(email===null || email===''){
      isproceed = false
      errormessage += 'Email';
    }
    if(pwd===null || pwd===''){
      isproceed = false
      errormessage += 'Password';
    }
    if(!isproceed){
      toast.warning(errormessage)
    }
    else{
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {

      }
      else{
        isproceed = false
        toast.warning('Please Enter the valid email')
      }
      if(/^\d{10}$/.test(phno)){

      }
      else{
        isproceed = false
        toast.warning('Please Enter the valid Phno')
      }
    }
    return isproceed; 
  }
  const btn=(e)=>{
    e.preventDefault();
  let data={name,phno,email,pwd}
  if(Isvalidate()){
    axios.post("http://localhost:3000/user",data)
    .then((res)=>{
      toast.success("SignUp Successfully")
      navigate("/login")
    })
    .catch((err)=>{
      toast.error("Failed :"+err.message);
    })
  } 
  }
  return (
    <div className='container mt-5'>
        <section className='d-flex justify-content-between '>

            <div className='left_data mt-5 p-5'   style={{width:"100%"}}>
                <h3 className='text-center col-lg-6'>Sign Up</h3>
                <Form onSubmit={btn}>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type="name" placeholder="Enter Your Name"value={name} onChange={((e)=>{setName(e.target.value)})}/>
      
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type="tel" placeholder="Enter Your Number" value={phno} onChange={((e)=>{setPhno(e.target.value)})}/>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={((e)=>{setEmail(e.target.value)})} />
      </Form.Group>
      <Form.Group className="mb- 3 col-lg-8" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" value={pwd} onChange={((e)=>{setPwd(e.target.value)})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" className='col-lg-8' style={{background:"rgb(0, 0, 102)"}} onClick={btn}>
        SignUp
      </Button>
    </Form>
    <p className='mt-3'>Already have an account ? <span><Link to='/login'>Login</Link></span></p>
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
export default User_registration
