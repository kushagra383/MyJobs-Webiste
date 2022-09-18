import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CloseIcon from '../../images/close-icon.svg';
import EmptyIcon from '../../images/curriculum.svg';

const JobModal = ({ authToken, modalState, setModalState }) => {
  const [candidatesData, setCandidatesData] = useState(null);

  const getJobCandidates = async (authToken, jobId) => {
    try {
      const {
        data: { data, success }
      } = await axios.get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`,
        {
          headers: {
            Authorization: authToken
          }
        }
      );
      if (success) return data;
    } catch (error) {
      console.error('error fetching candidates data: ', error);
    }
  };

  useEffect(() => {
    if (authToken && modalState.jobId) {
      document.body.style.overflow = 'hidden';
      getJobCandidates(authToken, modalState.jobId).then(data => setCandidatesData(data));
    }
  }, [modalState.jobId, authToken]);

  return (
    <>
      <div style={{ width: '100%', height: '80px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-betweeen',
            width: '100%',
            borderBottom: '1px solid gray',
            margin: '0 0 11px 0'
          }}
        >
          <p style={{ width: '100%', height: '15px',color: '#303F60',fontFamily: 'Helvetica Neue',fontSize:'21px',fontWeight:500,paddingBottom:'35px'}}>Applicants for this job</p>
          <img
            style={{ cursor: 'pointer', height: '15px' }}
            src={CloseIcon}
            onClick={() => {
              document.body.style.overflow = 'auto';
              setModalState({ show: false, jobId: null });
            }}
          />
        </div>
        <p style={{color: 'black',fontSize:'15px',fontFamily:'Helvetica Neue',marginTop: '-12px'}}>Total {candidatesData?.length ?? 0} application</p>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          background: '#EEEFF2',
          borderRadius: '10px',
          overflow: 'auto',
          height: 'calc(100% - 80px)'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            background: '#EEEFF2',
            borderRadius: '10px',
            overflow: 'auto',
            height: 'calc(100% - 80px)'
          }}
        >
          {candidatesData ? (
            candidatesData.map(candidate => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '14px',
                  border: '1px solid #303F6080',
                  borderRadius: '5px',
                  width: '46%',
                  margin: '12px',
                  background: 'white',
                  height: '179px',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '50px',
                    margin: '0 0 11px 0'
                  }}
                >
                  <div
                    style={{
                      borderRadius: '100%',
                      minWidth: '20%',
                      width: '50px',
                      height: '50px',
                      background: '#D9EFFF'
                    }}
                  >
                    <p style={{ margin: '14px 20px' }}>
                      {candidate.name[0].toUpperCase()}
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      margin: '0 0 0 17px',
                      width: '80%'
                    }}
                  >
                    <p style={{color:'#303F60',fontFamily:'Helvetica Neue',fontSize:'15px',fontWeight:600,marginBottom:'0px'}}>{candidate.name}</p>
                    <p
                      style={{
                        paddingBottom:'-500px',
                        fontSize: '15px',
                        width: '100%',
                        textOverflow: 'ellipsis',
                        overflowX: 'clip',
                        color:'grey',
                        fontFamily:'Helvetica Neue',
                        marginBottom:'0rem'
                      }}
                    >
                      {candidate.email}
                    </p>
                  </div>
                </div>
                <p style={{paddingTop:'40px', marginBottom:'20px',color:'black',fontSize:'13px',fontWeight:500}}>Skills</p>
                <p style={{ width: '100%', textOverflow: 'ellipsis',fontSize:'14px', color:'grey',fontweight:400,marginTop:'-20px',marginBottom:'18px'}}>
                  {candidate.skills}
                </p>
              </div>
            ))
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <img src={EmptyIcon} />
              <p style={{ margin: '20px 0 0 0', color: '#303F60' }}>
                No applications available.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobModal;
