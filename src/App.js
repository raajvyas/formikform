import React from 'react';
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      emailField:'',
      pswField:''
    },
    onSubmit: values => {
      console.log('form:', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailField = 'Field required';
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email';
      } 
      if(!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} 
        value={formik.values.email}/>
        {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} 
        value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <button type="submitBtn">Submit</button>  
      </form>
    </div>
  );
}

export default App;
