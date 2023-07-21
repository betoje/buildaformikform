// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(
        `Login Successful\nEmail: ${values.email}\nPassword: ${values.password}`
      );
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "field required";
      } else {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = "not a valid email";
        }
      }
      // if (!values.email) {
      //   errors.email = "email is required";
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      //   errors.email = "Not a valid email"
      // } else {
      //   errors.email = null
      // };
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });
  let space = " ";

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <span id="emailError" style={{ color: "red" }}>
            {space}{formik.errors.email}
          </span>
        ) : null}
        <br /><br />
        <div>Password:</div>
        <input
          id="pswField"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <span id="pswError" style={{ color: "red" }}>
            {space}{formik.errors.password}
          </span>
        ) : null}
        <br /><br />
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
