import React from "react";
import LocationIcon from "./location-icon.svg";
import classes from "./JobCard.module.css";

export default function JobCard({ jobData, setModalState }) {
  const showModalHandler = () => {
    setModalState({
      show: true,
      jobId: jobData.id,
    });
  };
  return (
    <div className={classes.container} id={jobData.id}>
      <>
      <p className={classes.title}>{jobData.title}</p>
      <p className={classes.description}>{jobData.description}</p>
      </>
      <div className={classes.main}>
        <div className={classes.box}>
          <img src={LocationIcon}></img>
          <p className={classes.location}>{jobData.location}</p>
        </div>
        <div className={classes.modalClick} onClick={showModalHandler}>
          <p
            style={{ fontSize: "12px", fontFamily: "Helvetica Neue, Regular",cursor:'pointer',fontWeight:'600', textAlign:'center',color:'#303F60'}}
          >
            View Applications
          </p>
        </div>
      </div>
    </div>
  );
}
