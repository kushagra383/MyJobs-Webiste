import React from 'react';
import classes from './LoginPage.module.css';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import MiddleSection from '../../components/MiddleSection';

export default function LoginPage({ setAuthToken }) {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.main}>
          <Header />
        </div>
      </div>
      <MiddleSection />
      <LoginForm setAuthToken={setAuthToken} />
    </div>
  );
}
