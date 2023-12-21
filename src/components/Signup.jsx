import React, { useState } from 'react'
import Formheader from './Formheader'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Signup() {
  const [name, setName] = useState([])
  const [password, setPassword] = useState([])
  const [email, setEmail] = useState([])
  const [phone, setPhone] = useState([])

  return (

    <>
      <div className='shadow my-5 mt-5'>
        <title>تسجيل البيانات</title>

        <Formheader header={"سجل الان !"} description={"دعنا نقوم بالتسجيل الان"} />
        <div>

          <form className='form' style={{ flexDirection: "column" }}>
            <div className='d-block mx-auto w-50 p-1'>
              <label className='form-label' htmlFor='username'>أسم المستخدم</label>
              <input
                type="text"
                name="username"
                id='username'
                className='form-control'
                placeholder='قم بادخال اسمك'
                onInput={(e) => {
                  setName(e.target.value);
                }}
              />
              <span id='name-check' className='check'></span>
            </div>



            <div className='d-block mx-auto w-50 p-1'>
              <label className='form-label'>البريد الالكتروني</label>
              <input
                type="email"
                id='email'
                name="email"
                className='form-control'
                placeholder='قم بادخال البريد الالكتروني'
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span className='check' id='email-check'></span>
            </div>

            <div className='d-block mx-auto w-50 p-1'>
              <label className='form-label'>رقم الهاتق</label>
              <input
                type="tel"
                id='phone'
                name="phone"
                className='form-control'
                placeholder='قم بادخال رقم الهاتف'
                pattern="[0-9]{10}"
                onInput={(e) => {
                  setPhone(+e.target.value);
                }}
              />
              <span className='check' id='phone-check'></span>
            </div>
            <div className='d-block mx-auto w-50 p-1'>
              <label className='form-label'>كلمة المرور</label>
              <input
                type="password"
                id='password'
                name="password"
                className='form-control'
                placeholder='قم بادخال كلمة المرور'
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span className='check' id='password-check'></span>
            </div>
            <div className='d-block mx-auto w-50 p-1'>
              <label className='form-label'>فئتك</label>
              <select name="" id="" className='form-control'>
                <option value="">اختر</option>
                <option value="">منتج</option>
                <option value="">تاجر</option>
                <option value="">مستهلك</option>
              </select>
            </div>
            <input
              type="submit"
              value="تسجيل"
              className='btn btn-primary d-block mx-auto w-25 mt-3 shadow'
              onClick={(e) => {
                function validateUsername(username) {
                  return /^[a-zA-Z0-9\s]+$/.test(username);
                }

                // Function to validate password using regex
                function validatePassword(password) {
                  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
                }

                function validateEmail(email) {
                  // You can use a more complex regex for email validation
                  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                }

                function validatePhone(phone) {
                  // Simple validation for 10-digit phone number
                  return /^\d{11}$/.test(phone);
                }

                // Your form submission function
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                var email = document.getElementById('email').value;
                var phone = document.getElementById('phone').value;

                // Validate username
                if (username === "" || !validateUsername(username)) {
                  e.preventDefault();
                  document.getElementById('name-check').innerHTML = "Invalid username";
                  document.getElementById('username').style.border = "1px solid red";
                } else {
                  e.preventDefault();
                  document.getElementById('name-check').innerHTML = "";
                  document.getElementById('username').style.border = "1px solid grey";
                }

                // Validate password
                if (password === "" || !validatePassword(password)) {
                  e.preventDefault();
                  document.getElementById('password-check').innerHTML = "Invalid password";
                  document.getElementById('password').style.border = "1px solid red";
                } else {
                  document.getElementById('password-check').innerHTML = "";
                  document.getElementById('password').style.border = "1px solid grey";
                }

                // Validate email
                if (email === "" || !validateEmail(email)) {
                  e.preventDefault();
                  document.getElementById('email-check').innerHTML = "Invalid email";
                  document.getElementById('email').style.border = "1px solid red";
                } else {
                  document.getElementById('email-check').innerHTML = "";
                  document.getElementById('email').style.border = "1px solid grey";
                }

                // Validate phone
                if (phone === "" || !validatePhone(phone)) {
                  e.preventDefault();
                  document.getElementById('phone-check').innerHTML = "Invalid phone number";
                  document.getElementById('phone').style.border = "1px solid red";
                } else {
                  document.getElementById('phone-check').innerHTML = "";
                  document.getElementById('phone').style.border = "1px solid grey";
                  window.location.href = "/";
                }

                // Post data to the database


              }}
            /><br />

            <p className='text-center'>تملك حساب بالفعل  <Link to={'/'}> تسجيل الدخول</Link>
            </p>
          </form>
        </div>
      </div>
    </>

  )
}

export default Signup