import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../../components/HomePageCard';
import classes from './HomePage.module.css';
import Header from '../../components/Header';
import GirlImage from '../../images/girl.png';
import Logo from '../../images/logo.svg';
import SolayticIcon from '../../images/solaytic.png';
import KanbaIcon from '../../images/kanba.png';
import LightingIcon from '../../images/lighting.png';
import ZtosIcon from '../../images/ztos.png';
import GoldlineIcon from '../../images/goldline.png';
import IdeaIcon from '../../images/idea.png';
import LivaIcon from '../../images/liva.png';
import VelocityIcon from '../../images/velocity.png';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export default function Homepage({ authToken }) {
  const Msg = () => (
    <div>
      <h2 style={{color:'#43AFFF',fontFamily:'Helvetica Neue',fontSize:'24px'}}>Logout</h2>
      <p style={{color:'#303F60',fontFamily:'Helvetica Neue',fontSize:'17px'}}> You have successfully logged out. </p>
    </div>
  );

  const notify = () => toast(<Msg />);

  useEffect(() => {
    if (authToken === null) {
      notify();
    }
  }, [authToken]);

  return (
    <div style={{ background: '#EDF6FF' }}>
      <div className={classes.container}>
        <Header buttonText="Login/Signup" />
        <div className={classes.main} />
        <div className={classes.box}>
          <div>
            <p className={classes.welcome}>Welcome to</p>
            <img src={Logo} style={{ width: '200px', height: '75px' }} />
            <div className={classes.secondaryMain}>
              <p
                style={{
                  color: 'white',
                  font: 'normal normal bold 16px/19px Helvetica Neue'
                }}
              >
                Get Started
              </p>
            </div>
          </div>
          <div>
            <img src={GirlImage} style={{ width: '622px', height: '395px' }} />
          </div>
        </div>
      </div>
      <section className={classes.logo}>
        <p
          style={{
            marginLeft: '170px',
            marginBottom: '30px',
            fontSize: '22px',
            fontFamily: 'Helvetica Neue',
            fontColor: '#303F60'
          }}
        >
          Why Us
        </p>
        <div className={classes.foot}>
          <Card heading="Get more Visibility" description={description} />
          <Card heading="Organize your Candidates" description={description} />
          <Card heading="Verify their Abilities" description={description} />
        </div>
      </section>
      <div className={classes.beforeLogo}>
        <p className={classes.trust}>Companies Who Trust Us</p>
        <div style={{ display: 'flex', width: '100%' }}>
          <img src={SolayticIcon} alt="image" className={classes.logos} />
          <img src={KanbaIcon} alt="image" className={classes.logos} />
          <img src={LightingIcon} alt="image" className={classes.logos} />
          <img src={ZtosIcon} alt="image" className={classes.logos} />
          <img src={KanbaIcon} alt="image" className={classes.logos} />
        </div>
        <div style={{ display: 'flex', margin: '20px 0 0 200px', width: '100%' }}>
          <img src={GoldlineIcon} alt="image" className={classes.logos} />
          <img src={IdeaIcon} alt="image" className={classes.logos} />
          <img src={LivaIcon} alt="image" className={classes.logos} />
          <img src={VelocityIcon} alt="image" className={classes.logos} />
        </div>
      </div>
      <ToastContainer hideProgressBar={true} />
    </div>
  );
}
