import React from 'react'
import classes from './Card.module.css'

export default function Card(props) {
  return (
    <div className={classes.card}>
      <p className={classes.p1}>{props.heading}</p>
      <p className={classes.p2} >{props.description}</p>
    </div>
  )
}
