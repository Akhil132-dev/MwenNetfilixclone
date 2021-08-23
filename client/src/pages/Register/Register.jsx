import React, { useRef, useState } from "react";
import "./Register.scss";
function Register() {
    const [email, setemail] = useState('')
    const emailRef = useRef()
    const [password, setpassword] = useState('')
    const passwordRef = useRef()
    const handledStart = () =>
    {
        setemail(emailRef.current.value);
    }
    const handledFinish = (e) =>
    {e.preventDefault()
        setpassword(passwordRef.current.value)
    }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <button className="loginbutton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies,Tv shows,and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          {" "}
          Read to watch ? Enter your email to craeat or restart your memebership
              </p>
              {
                  !email ?  <div className="input">
         <input type="email" placeholder="Enter your email address" ref={emailRef}/>
          <button className="registeButton" onClick={handledStart}>Get started</button>
        </div>: <form className="input">
         <input type="password" placeholder="Enter your passwrod" ref={passwordRef}/>
          <button className="registeButton" onClick={handledFinish}>Start </button>
        </form>
              }
       
      </div>
    </div>
  );
}

export default Register;
