import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import Signup from './Signup';
function FormContent() {

  const [name,setName] = useState()
  const [password,setPassword] = useState([])

  return (
    <div>

        <form  className='form' action='http://localhost:3000/Home' style={{flexDirection:"column"}}>
            <div className=' d-block mx-auto w-50 p-1'>
            <label className='form-label' htmlFor='username'>اسم المستخدم</label>
            <input type="text" name="username" id='username' className='form-control' placeholder='قم بادخال اسم المستخدم' onInput={(e)=>{
              setName(e.target.value);
            }}/> <span id='name-check' className='check'></span>

            </div>  
            <div className=' d-block mx-auto w-50 p-1'>

            <label className='form-label'>كلمة المرور</label>
            <input type="password" id='password' name="password" className='form-control' placeholder='قم بادخال كلمة المرور' onInput={(e)=>{
              setPassword(e.target.value);
            }} /> <span className='check' id='password-check'></span>
            </div>
            c <div className=' d-flex justify-content-center'>
            <Link className='btn btn-primary mt-2' to={"/home" }>تسجيل الدخول</Link>
            </div>
         
  <br />

        <p className='text-center'>لا تملك حساب <Link to={'/Signup'}> صفحة التسجيل</Link>
            </p>

        </form>
    </div>
  )
}

export default FormContent