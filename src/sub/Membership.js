import { useState, useEffect } from "react";

function Location() {
  const initValues = {
    userid: '',
    email: '',
    password: '',
    password2: '',
    gender: '',
    interests: '',
   
  }
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleChange = e =>{  
    const {name, value} = e.target;    
    setValues({...values, [name]:value}); 
    console.log(values);
  }

  const handleCheck = e =>{
    const {name} = e.target; 
    const isCheck = e.target.checked;
    setValues({...values, [name]:isCheck})
  }

  const  handleSubmit = e =>{
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
    console.log(values);
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
    if(!values.gender){
      errors.gender = '성별을 선택하세요';
    } 
    if(!values.interests){
      errors.interests = '관심사를 한가지 이상 선택하세요';
    } 
    return errors;
  }

  return (
    <section className="content membership">
      <div className="inner">
        <h1>Location</h1>

        {success ? <div>회원가입을 축하합니다.</div> : ''}
        <form onSubmit= {handleSubmit}>

          <label>userid</label>
          <input 
            type="text" 
            name='userid' 
            placeholder='UserID' 
            //해당 value값을 state로부터 직접 연결해야
            //추후 값을 변경하고 제출시 다시 검사가능          
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

          {/* gender */}

          <h2>Gender</h2>
          <article>
            <label htmlFor="male">male</label>
            <input 
              type="radio" 
              id='male' 
              name='gender'           
              value='male' 
              onChange={handleCheck}
            />

            <label htmlFor="female">female</label>
            <input 
              type="radio" 
              id='female' 
              name='gender' 
              value='female'            
              onChange={handleCheck}
            />
            <p className='err'>{errors.gender}</p>
          </article>

          <h2>Interests</h2>
          <article>
            <label htmlFor="sports">sports</label>
            <input 
              type="checkbox" 
              id='sports' 
              name='interests'              
              value='sports' 
              onChange={handleCheck}
            />

            <label htmlFor="music">music</label>
            <input 
              type="checkbox"  
              id='music'          
              name='interests' 
              value='music' 
              onChange={handleCheck}
            />

            <label htmlFor="game">game</label>
            <input 
              type="checkbox"  
              id='game'          
              name='interests'                   
              value='game' 
              onChange={handleCheck}
            />
            <p className='err'>{errors.interests}</p>
          </article>

          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Location;