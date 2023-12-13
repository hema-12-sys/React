import React from "react";
function Login(){
    return (
        <div className="App">
          <div className="login-container">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" required /><br />
              <input type="password" placeholder="Password" required /><br />
              <a href="#.com" className="link">Forget Password?</a>
              <button type="submit">Login</button>
            
              <p className="para"><span>Don't have an account?</span><span><a href="http://172.19.36.42:3000" className="link2" >Sign Up</a></span></p>
            </form>
          </div>
        </div>
      );
}

export default Login;