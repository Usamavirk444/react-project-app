import React, { useState } from "react";
import "./Signup.css";
import { signUp } from "../schemas/signup";
import { useFormik } from "formik";
import Message from "../alerts/message";

function Signup() {
  const [message, setMessage] = useState(null);

  const onSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // User registered, OTP sent
        setMessage({ message: 'OTP has been sent to your email', type: 'success' });
      } else {
        // User already registered
        setMessage({ message: data.error, type: 'error' });
      }
    } catch (error) {
      // Handle any error during the API call
      console.error('Error:', error);
      setMessage({ message: 'An error occurred. Please try again later', type: 'error' });
    }

    console.log("submited!!");
  };
  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: signUp,
      onSubmit,
    });
  return (
    
    <section>
      {message && message.message && <Message alert={message} />}
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>SignUp Here</h3>

        <label htmlFor="username">Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          placeholder="Email or Phone"
          className={ errors.email && touched.email && "invalid"}
        />
        { errors.email && touched.email && <p className="error">{errors.email}</p>}

        <button>Sign Up</button>
      </form>
    </section>
  );
}

export default Signup;
