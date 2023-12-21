import React from 'react'
import Formheader from './Formheader'
import FormContent from './FormContent'


function Login() {
  return (
    <>   
<title>تسجيل الدخول</title>
<div className="shadow my-5 mt-5">
  
    <Formheader header={"دعنا نبدأ"} description={"اهلا بك , من فضلك قم بملئ البيانات "}/>
    <FormContent/>
  </div>
    </>
  )
}

export default Login