import React from 'react'
import styles from "./index.module.css"
import { useTranslation } from 'react-i18next'
import '../UserNavbar/i18n';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerPartOne}>
          <div className={styles.sendEmail}>
            <div>
              <h3 style={{ color: 'white', fontWeight: "500", textAlign: "center" }}>Mail göndərərək qeydiyyatdan keç</h3>
            </div>
            <div className={styles.sumbitEmail}>
              <input className={styles.inputPlaceholder} type="email" placeholder='Email' />
              <button className={styles.footerSubmit}>Submit</button>
            </div>
          </div>
        </div>
        <div className={styles.footerPartTwo}>
          <div style={{width:"100%"}}> 
            <div className={styles.logoFooter}>
            </div>
            <div className={styles.sosialFooter}>
              <Link style={{ color: 'black' }} to={"https://www.instagram.com/ozonio.official.azerbaijan/?ref=oSa2ew7A&hl=am-et"}>
                <InstagramIcon sx={{
                  fontSize: "28px",
                  marginTop: "10px",
                }} />
              </Link>
              <Link style={{ color: 'black' }} to={"https://www.instagram.com/ozonio.official.azerbaijan/?ref=oSa2ew7A&hl=am-et"}>
                <FacebookIcon sx={{
                  fontSize: "28px",
                  marginTop: "10px",
                }} />
              </Link>
            </div>
          </div>
          <div className={styles.footerLink}>
            <Link to={"/"}>{t('esas')}</Link>
            <Link to={"/keratin"}>{t('keratin')}</Link>
            <Link to={"/sacqulluq"}>{t('sacqulluq')}</Link>
            <Link to={"/about"}>{t('about')}</Link>
            <Link to={"/contact"}>{t('contact')}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
