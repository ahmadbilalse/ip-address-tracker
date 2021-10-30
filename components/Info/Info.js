import React from "react"
import styles from './Info.module.css'
import InfoItem from "../InfoItem/InfoItem"
import { useSelector } from 'react-redux'
import { useGetIpInfoQuery } from '../../app/services/ipApi'

export default function Info() {
  const input = useSelector((state) => state.ipGeolocator.input);
  const { data } = useGetIpInfoQuery(input);
  const shouldDisplay = data && data.success;

  return (
    <div className={styles.container}>
      <InfoItem heading='ip address' content={shouldDisplay ? data.ip : '-'} />
      <InfoItem heading='location' content={shouldDisplay ? `${data.region}, ${data.country}` : '-'} />
      <InfoItem heading='timezone' content={shouldDisplay ? data.timezone_gmt : '-'} />
      <InfoItem heading='isp' content={shouldDisplay ? data.isp : '-'} />
    </div>
  )
}
