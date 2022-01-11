import { useRef, useState } from 'react';
import FormInput from './FormInput';

function Membership(){  
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage: '아이디는 3글자에서 16글자 이하 입력하시오',
      pattern: '^[a-zA-Z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: '이메일은 5~10글자 이상 @포함하시오',
      pattern: '^(?=.*[a-zA-Z])(?=.*[@])[a-zA-Z0-9!@#$%^&*]{5,10}$',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      errorMessage: '날짜를 선택하시오'
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password',
      errorMessage: '비밀번호는 5~10글자 사이, 문자,숫자,특수문자 포함하시오',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}$',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: '비번을 동일하게 입력하시오',
      pattern: values.password,
      required: true,
    },
   
  ];


  function handleSubmit(e){
    e.preventDefault();
    console.log('test');
  }

  function onChange(e){
    setValues({...values, [e.target.name]:e.target.value})
  }

  console.log(values);

  return (
    <section className="content membership">
      <div className="inner">
        <h1>Membership</h1>

        <form onSubmit={handleSubmit}>    
          {
            inputs.map((input)=>{
              return (
                <FormInput 
                  key={input.id} 
                  {...input} 
                  value={values[input.name]} 
                  onChange={onChange} 
                />   
              )
              
            })
          }              
          <button >Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Membership;