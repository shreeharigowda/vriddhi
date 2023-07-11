import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { Firebase } from "../../firebase/config";
import Logo from "../../Logo/Images/vriddhi.png";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false)
  const history = useHistory()
  const handleSubmit = (e) => {
   
  };
  return (<>
    {loading && <RoundLoading />}
    <div>
      <div className="loginParentDiv">
        <img width="100px" height="100px" src={Logo} alt="" style={{ marginLeft: "40px" }}></img>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="sijeesh@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  </>
  );
}

export default Login;
