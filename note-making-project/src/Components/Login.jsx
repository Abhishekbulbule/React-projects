import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const emailRef = useRef();
  const passRef = useRef();
  let navigate = useNavigate();
  const handleOnClick = async (e) => {
    e.preventDefault();
    const cred = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred),
      });
      const json = await response.json();
      props.showAlert("Login Successfull!", "success");
      if (json.success) {
        emailRef.current.value = "";
        passRef.current.value = "";
        //redirect
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
          props.showAlert(json.errors, "danger");
      }
      
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="container col-8 mt-4">
      <h1 className="text-center mt-2">Login to continue using <strong>NoteIt!</strong></h1>
      <form onSubmit={handleOnClick}>
        <div className="mb-3 my-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            ref={passRef}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
