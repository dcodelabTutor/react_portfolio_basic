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
      label: 'Username'
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email'
    },
    {
      id: 3,
      name: 'birthday',
      type: 'text',
      placeholder: 'Birthday',
      label: 'Birthday'
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password'
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password'
    }
  ];


  function handleSubmit(e){
    e.preventDefault();
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