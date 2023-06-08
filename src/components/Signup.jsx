import React, { useState } from "react";
import "./Signup.css";
import { signUp } from "../schemas/signup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [message, setMessage] = useState(null);
  const location = useNavigate();

  const submitHandler = async (values) => {
    try {

      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(response);
      if (response.status === 201) {
        // User registered, Password sent
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        location('login')
      } else if (response.status === 409) {
        // User already registered
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (response.status === 400) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      resetForm();
    } catch (error) {
      // Handle any error during the API call
      console.error("Error:", error);
      setMessage({
        message: "An error occurred. Please try again later",
        type: "error",
      });
    }

  };

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: signUp,
    onSubmit: submitHandler,
  });

  return (
    <section>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>SignUp Here</h3>
        <input
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="firstName"
          placeholder="First Name"
          className={errors.firstName && "invalid"}
        />
        {errors.firstName && touched.firstName && (
          <p className="error">{errors.firstName}</p>
        )}
        <input
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastName"
          placeholder="last Name"
          className={errors.lastName && "invalid"}
        />
        {errors.lastName && touched.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          placeholder="Email"
          className={errors.email && "invalid"}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default Signup;
