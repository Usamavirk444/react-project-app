import React, { useState } from "react";
import "./Signup.css";
import { SignIn } from "../schemas/login";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const location = useNavigate();

  const submitHandler = async (values) => {
    try {

      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.status === 201) {
        // User registered, Password sent
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        const token = data.data;
        localStorage.setItem("token", token.token);
        location('dashboard')
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
      email: "",
      password: "",
    },
    validationSchema: SignIn,
    onSubmit: submitHandler,
  });

  return (
    <section>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
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
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          placeholder="password"
          className={errors.password && "invalid"}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
