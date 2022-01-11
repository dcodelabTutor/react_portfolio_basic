import { useState, useEffect } from "react";

function Location() {
  const initValues = {
    userid: '',
    email: '',
    password: ''
  }
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    }
  },[errors]);

  const validate = (values)=> {
    const errors = {};
    const regex = '^(?=.*[a-zA-Z])(?=.*[@])[a-zA-Z0-9!@#$%^&*]{5,10}$';
    if(!values.userid){
      errors.userid = 'UserID is required!';
    }
    if(!values.password){
      errors.password = 'Password is required!';
    }
    if(!values.email){
      errors.email = 'Email is required!';
    }
    return errors;
  }

  return (
    <section className="content location">
      <div className="inner">
        <h1>Location</h1>


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