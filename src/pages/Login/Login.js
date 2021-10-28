import React from "react";
import './Login.css'
export default function Login() {
  return (
  <div className="wrapper">
  <div className="form">
    <div className="title">
      Login  InTo Your SoundClound Account
    </div>
    <form  >
     
      <div className="input_wrap">
        <input type="submit" id="login_btn" className="btn enabled" value="Click Here To Login"  />
      </div>
    </form>
  </div>
</div>

  );
}
