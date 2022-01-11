import { useState } from "react";

function Location() {
  const initValues = {
    userid: '',
    email: '',
    password: ''
  }
  const [values, setValues] = useState(initValues);
  const handleChange = e =>{
    console.log(e.target);
    const {name, value} = e.target;
    //[name]:value앞에 대괄호를 붙여서 현재 onChange가 발생하는 input요소 name의 value값을 변경
    setValues({...values, [name]:value});
    console.log(values);
  }

  return (
    <section className="content location">
      <div className="inner">
        <h1>Location</h1>
        <form>

          <label>userid</label>
          <input 
            type="text" 
            name='userid' 
            placeholder='UserID' 
            //변경된 value값을 실시간으로 인풋에 출력
            value={values.userid} 
            onChange={handleChange}
          /><br />


          <label>password</label>
          <input 
            type="password" 
            name='password' 
            placeholder='Password' 
            value={values.password} 
            onChange={handleChange}
          /><br />


          <label>email</label>
          <input 
            type="text" 
            name='email' 
            placeholder='Email' 
            value={values.email} 
            onChange={handleChange}
          /><br />

          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Location;