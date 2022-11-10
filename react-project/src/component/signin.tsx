import React from "react";
import './login.css';
class Signin extends React.Component {

  render() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" />
                <input type="password" name="p" placeholder="Password" />
                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    );
  }


}
export default Signin;
