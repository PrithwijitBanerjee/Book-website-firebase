import { Link } from "react-router-dom"
import "../styles/common.css"
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"
import { toast } from "react-toastify";

const auth = getAuth(app);

const SignIn = () => {
  const [signUpUser, setSignUpUser] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState(false);
  const [error, setError] = useState({});

  // on submit validation ...
  const validation = () => {
    const err = {};
    if (!signUpUser.email.length) {
      err.emailErr = "@Email Id is required!";
    }

    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(signUpUser.email)) {
      err.emailErr2 = 'Email is not valid';
    }

    if (!signUpUser.password) {
      err.passErr = "@Password is required!";
    }

    if (signUpUser.password.length < 6) {
      err.passErr2 = "@Password length should be atleast 6 characters";
    }
    setError(err);
    return Object.keys(error).length < 1;
  }

  // on change validation
  const handleInputChange = e => {
    if (e.target.name === "email") {
      if (!e.target.value) {
        setSignUpUser(currUsr => (
          {
            ...currUsr,
            [e.target.name]: ''
          }
        ));
        setError(currErr => ({
          ...currErr,
          emailErr: 'Invalid Email Id'
        }))
      } else {
        setSignUpUser(currUsr => (
          {
            ...currUsr,
            [e.target.name]: e.target.value
          }
        ));
        setError(currErr => ({
          ...currErr,
          emailErr: ''
        }))
      }
    }

    if (e.target.name === "password") {
      if (e.target.value.length === 0) {
        setError(currErr => ({
          ...currErr,
          passErr: 'Password field can not be empty'
        }));
        setSignUpUser(currUsr => (
          {
            ...currUsr,
            [e.target.name]: ''
          }
        ));
      }
      else if (e.target.value.length > 8) {
        setSignUpUser(currUsr => (
          {
            ...currUsr,
            [e.target.name]: ''
          }
        ));
        setError(currErr => ({
          ...currErr,
          passErr: 'Password length should be less than or equal to 8 characters!'
        }))
      } else {
        setSignUpUser(currUsr => (
          {
            ...currUsr,
            [e.target.name]: e.target.value
          }
        ));
        setError(currErr => ({
          ...currErr,
          passErr: ''
        }))
      }
    }
  }

  const handleFormSubmit = async e => {
    e.preventDefault();
    if (validation()) {
      try {
        setStatus(true);
        const res = await signInWithEmailAndPassword(auth, signUpUser.email, signUpUser.password);
        toast.success("user SignIn successfully!", {
          theme: 'colored'
        });
        setStatus(false);
      } catch (err) {
        toast.error(err.code, {
          theme: 'colored'
        });
        setStatus(false);
      }

    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center container-fluid" style={{ height: '100vh' }}>
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <h5 className="card-title">SignIn Form</h5>
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <div className="input-group form-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text input-group-icon">
                  <i className="fas fa-user" />
                </span>
              </div>
              <input type="text" className="form-control" name="email" placeholder="Email Id" value={signUpUser.email} onChange={handleInputChange} />
            </div>
            <div className="text-danger mb-5">{error?.emailErr || error?.emailErr2}</div>
            <div className="input-group form-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text input-group-icon">
                  <i className="fas fa-lock" />
                </span>
              </div>
              <input type="password" className="form-control" name="password" placeholder="Password" value={signUpUser.password} onChange={handleInputChange} />
            </div>
            <div className="text-danger mb-5">{error?.passErr || error?.passErr2}</div>
            <div className="form-group">
              {
                status ?
                  (<div className="text-center mt-3 mb-4">
                    <span className="spinner-border text-primary" role="status" aria-hidden="true"></span>
                  </div>)
                  :
                  (<div className="text-center">
                    <button type="submit" className="btn btn-block btn-outline-primary" style={{ width: '100%' }} name="signin">SignIn</button>
                  </div>)
              }
            </div>
          </form>
          <div className="d-flex flex-direction-row justify-content-around mt-3">
            <p>New User?</p>
            <Link to="/signUp" className="card-link">SignUp</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
