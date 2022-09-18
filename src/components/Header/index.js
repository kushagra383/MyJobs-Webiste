import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../images/logo.svg';
import arrow from '../../images/arrow.svg'

export default function Header(props) {
  let history = useHistory();
  const loginHandler = () => {
    history.push('/login');
  };

  const handleLogoutClick = () => {
    props.setAuthToken(null);
    history.replace('/');
  };

  return (
    <>
      <header className={classes.header}>
        <img src={logo}></img>
        {props.buttonText && (
          <button
            className={classes.button}
            onClick={loginHandler}
            style={{
              top: '25px',
              left: '1245px',
              width: '150px',
              height: '42px',
              textAlign: 'center',
              backgroundColor: 'rgb(49,83,125)',
              letterSpacing: '0px',
              color: '#FFFFFF',
              borderColor: '#8686b1',
              borderRadius: '11px',
              marginTop: '15px',
              paddingLeft: '10px',
              opacity: '1'
            }}
          >
            Login/Signup
          </button>
        )}
        {props.authToken && (
          <button
          className={classes.button}
          onClick={loginHandler}
          style={{
            top: '25px',
            left: '1245px',
            width: '150px',
            height: '42px',
            textAlign: 'center',
            backgroundColor: 'rgb(49,83,125)',
            letterSpacing: '0px',
            color: '#FFFFFF',
            borderColor: '#8686b1',
            borderRadius: '11px',
            marginTop: '15px',
            paddingLeft: '10px',
            opacity: '1'
          }}
        >
          Logout
        </button>
          
        )}

      </header>
    </>
  );
}
