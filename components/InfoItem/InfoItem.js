import React from "react"
import styles from './InfoItem.module.css'

export default function InfoItem(props) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>{props.heading}</p>
      <p className={styles.content}>{props.content}</p>
    </div>
  )
}