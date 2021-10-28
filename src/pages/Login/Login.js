import React from "react";
import './Login.css'
export default function Login() {
  return (
  <div className="wrapper">
  <div className="form">
    <div className="title">
      Login  To Your SoundClound Account
    </div>
    <form  >
     
      <div className="input_wrap">
        <span className="error_msg">Incorrect username or password. Please try again</span>
        <input type="submit" id="login_btn" className="btn enabled" value="Click Here To Login"  />
      </div>
    </form>
  </div>
</div>

  );
}
