import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import JobCard from '../../components/jobCard';
import { getJobs } from './jobDetailsPage.utils';
import { customStyles } from './jobDetailsPage.constants';
import HomeIcon from './home-icon.svg';
import EmptyIcon from '../../images/writing.svg';
import PreviousIcon from '../../images/prev.svg';
import NextIcon from '../../images/next.svg';
import JobModal from '../../components/jobModal';
import classes from './DetailsPage.module.css';


const JobDetailsPage = ({ setAuthToken, authToken }) => {
  const [modalState, setModalState] = useState({
    show: false,
    jobId: null
  });
  const [jobsData, setJobsData] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  const closeModal = () =>
    setModalState({
      show: false,
      jobId: null
    });

  useEffect(() => {
    if (authToken) {
      getJobs(authToken, pageCount).then(data => setJobsData(data));
    }
  }, [pageCount, authToken]);

  const Msg = () => (
    <div>
      <h2 style={{color:'#43AFFF',fontFamily:'Helvetica Neue',fontSize:'24px'}}>Login</h2>
      <p style={{color:'#303F60',fontFamily:'Helvetica Neue',fontSize:'17px'}}> You have successfully logged in. </p>
    </div>
  );

  const notify = () => toast(<Msg />);

  useEffect(() => {
    if (authToken) {
      notify();
    }
  }, [authToken]);

  return (
    <>
      <div className={classes.container}>
        <Header authToken={authToken} setAuthToken={setAuthToken} />
        <div style={{ borderTop: '1px solid white', margin: '22px 0 0 0' }}>
          <div className={classes.main}>
            <img src={HomeIcon} height="15px" alt="home-icon"></img>
            <p style={{ color: 'white', fontSize: '15px', margin: '0 0 0 8px' }}>Home</p>
          </div>
          <p
            style={{
              color: 'white',
              margin: '24px 0 -20px 60px',
              fontSize: '22px',
              paddingTop: '40px'
            }}
          >
            Jobs posted by you
          </p>
        </div>
      </div>

      <div className={classes.box}>
        <div className={classes.innerBox}>
          {jobsData ? (
            jobsData.map(job => (
              <JobCard jobData={job} key={job.id} setModalState={setModalState} />
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: 'calc(100vh - 310px)',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 150px 0 0'
              }}
            >
              <img src={EmptyIcon} alt="img-icon" />
              <p style={{ margin: '20px 0 0 0', color: '#303F60' }}>
                Your posted jobs will show here.
              </p>
              <button
                style={{
                  background: '#43AFFF',
                  width: '148px',
                  padding: '13px 34px 14px 34px',
                  border: '1px solid #43AFFF',
                  borderRadius: '5px',
                  color: '#FFFFFF',
                  margin: '40px 0 0 0 '
                }}
              >
                Post a Job
              </button>
            </div>
          )}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 0 80px 0'
          }}
        >
          <img
            src={PreviousIcon}
            style={{
              cursor: pageCount === 1 ? 'not-allowed' : 'pointer'
            }}
            onClick={() => pageCount >= 2 && setPageCount(pageCount - 1)}
          />
          <p
            style={{
              background: '#43AFFF33',
              color: 'black',
              height: '30px',
              width: '30px',
              margin: '0 12px',
              padding: '2px 0 0 9px'
            }}
          >
            {pageCount}
          </p>
          <img
            src={NextIcon}
            style={{
              cursor: 'pointer'
            }}
            onClick={() => setPageCount(pageCount + 1)}
          />
        </div>
      </div>

      {modalState.show && (
        <Modal
          isOpen={modalState.show}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <JobModal
            modalState={modalState}
            setModalState={setModalState}
            authToken={authToken}
          />
        </Modal>
      )}
      <ToastContainer hideProgressBar={true} />
    </>
  );
};

export default JobDetailsPage;
