import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const cpassRef = useRef();
  const navigate = useNavigate();
  const handleOnClick = async (e) => {
    e.preventDefault();

    const cred = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
      cpassword: cpassRef.current.value,
    };
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cred),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //redirect
        nameRef.current.value = "";
        emailRef.current.value = "";
        passRef.current.value = "";
        cpassRef.current.value = "";
        props.showAlert("Sign up successfull", "success");
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
        props.showAlert(json.errors, "danger");
      }
      // return json;
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="container my-5 col-8">
     <h1 className="text-center mt-2">Create an account to use <strong>NoteIt!</strong></h1>
      
      <form onSubmit={handleOnClick}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={passRef}
            type="password"
            className="form-control"
            id="password"
            minLength={8}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            ref={cpassRef}
            type="password"
            className="form-control"
            id="cpassword"
            minLength={8}
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

export default Signup;
