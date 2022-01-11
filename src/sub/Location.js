import { useState, useEffect } from "react";

function Location() {
  const initValues = {
    userid: '',
    email: '',
    password: '',
    password2: ''
  }
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e =>{  
    const {name, value} = e.target;    
    setValues({...values, [name]:value}); 
  }

  const  handleSubmit = e =>{
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  }

  useEffect(()=>{
    console.log(errors);
    if(Object.keys(errors).length === 0 && isSubmit){
      console.log(values);
      setSuccess(true);
    }
  },[errors]);

  const validate = (values)=> {
    const errors = {};
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[!@#$%^&*]/;

    if(!values.userid || values.userid.length <5){
      errors.userid = '아이디를 5글자 이상 입력하세요';
    }   
    if(!values.password || !eng.test(values.password) || !num.test(values.password) || !spc.test(values.password) || values.password.length <5){
      errors.password = '비밀번호는 숫자,문자,특수문자를 포함해 5글자 이상 입력하세요';
    }
    if(!values.email || !/@/.test(values.email) || values.email.length <5){
      errors.email = '이메일은 @를 포함하여 5글자 이상 입력하세요';
    }
    if(values.password !== values.password2){
      errors.password2 = '비밀번호를 같게 입력하세요';
    }
    //console.log(errors);
    return errors;
  }

  return (
    <section className="content location">
      <div className="inner">
        <h1>Location</h1>

        {success ? <div>회원가입을 축하합니다.</div> : ''}
        <form onSubmit= {handleSubmit}>

          <label>userid</label>
          <input 
            type="text" 
            name='userid' 
            placeholder='UserID'           
            value={values.userid} 
            onChange={handleChange}
          /><br />
          <p className='err'>{errors.userid}</p>


          <label>password</label>
          <input 
            type="password" 
            name='password' 
            placeholder='Password' 
            value={values.password} 
            onChange={handleChange}
          /><br />
          <p className='err'>{errors.password}</p>

          <label>password2</label>
          <input 
            type="password" 
            name='password2' 
            placeholder='Password2' 
            value={values.password2} 
            onChange={handleChange}
          /><br />
          <p className='err'>{errors.password2}</p>


          <label>email</label>
          <input 
            type="text" 
            name='email' 
            placeholder='Email' 
            value={values.email} 
            onChange={handleChange}
          /><br />
          <p className='err'>{errors.email}</p>

          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Location;