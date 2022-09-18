import React, { useState } from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function ({ setAuthToken }) {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticateUser = async () => {
    try {
      const { data } = await axios.post(
        'https://jobs-api.squareboat.info/api/v1/auth/login',
        {
          ...{
            email,
            password
          }
        }
      );
      if (data.success) return data.data.token;
      return null;
    } catch (error) {
      console.error('Error logging: ', error);
      return null;
    }
  };

  const formHandler = e => {
    e.preventDefault();
    authenticateUser().then(data => {
      if (data) {
        setHasError(false);
        setAuthToken(data);
        history.push('/jobs');
      } else {
        setAuthToken(null);
        setHasError(true);
      }
    });
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                style={{ borderColor: hasError && 'red' }}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                style={{ borderColor: hasError && 'red' }}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                autoComplete="off"
              />
            </div>
            {hasError && (
              <p style={{ color: 'red', width: '100%' }}>Incorrect email or password</p>
            )}
            <div
              className="d-grid gap-2 mt-3 "
              style={{
                justifyItems: 'center',
                color: 'rgb(67,175,255)',
                paddingRight: '20px'
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '30%' }}
                onClick={formHandler}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
