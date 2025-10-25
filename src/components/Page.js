import React from 'react'
import Menu from './Menu'
import ContactBar from './ContactBar'
import styles from './page.module.css'

export default function Page({ styles: additionalStyles, children }) {
  return (
    <div className={`${styles.page} ${additionalStyles} container-fluid`}>
      <div className={`${styles.pageHeader} d-flex col-12 p-0`}>
        <p>
          ÁGNES MÉRI
          <br />
          WEB DEVELOPER
        </p>
        <Menu />
      </div>
      <div className={styles.contentsContainer}>{children}</div>
      <div id='contactBar'>
        <ContactBar />
      </div>
    </div>
  )
}
