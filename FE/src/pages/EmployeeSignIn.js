import React, { useState } from 'react';
import "../css/SignIn.css"; // Import the CSS file
import axios from 'axios';
import useAuth from "../hooks/useAuth";
import { setLocalStorage } from '../util';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { config } from '../config';
import routes from '../util/routes';




const EmployeeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const { login, authed } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();



  React.useEffect(() => {
    if (authed) {
      navigate(state?.path || "/members/home");
    }
  }, []);

  const handleLogin = (event) => {
    // event.preventDefault();
    setLoading(true);
    axios.post(`${config.BASE_URL}/employees/login`, { email: username, password: password }).
      then((response) => {
        if (response.status == 200 && !isEmpty(response.data.token)) {
          setLocalStorage(response);
          login().then(() => {
            navigate(state?.path || routes.employeeHome);
          });
          setError();
          setLoading(false);
        }
        setError(response.data.message);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error.response.data.message);
      });
  };

  return (
    <div className="login-page">
      <form className="login-form" >
        <h2 className="login-title">Welcome back!</h2>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="login-input"
        />
        <button type="button" className="login-button" onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
