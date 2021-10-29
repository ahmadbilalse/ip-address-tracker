import React from "react"
import styles from './Info.module.css'
import InfoItem from "../InfoItem/InfoItem"

export default function Info() {
  return (
    <div className={styles.container}>
      <InfoItem heading='ip address' content='192.212.174.101' />
      <InfoItem heading='location' content='Brooklyn, NY 10001' />
      <InfoItem heading='timezone' content='UTC -05:00' />
      <InfoItem heading='isp' content='SpaceX Starlink' />
    </div>
  )
}
