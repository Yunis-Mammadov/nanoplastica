import React, { useState, useEffect } from 'react';
import styles from "./index.module.css"
import { useTranslation } from 'react-i18next'
import '../UserNavbar/i18n';
import { Link, useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('az');


  function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerPartOne}>
          <div className={styles.sendEmail}>
            <div>
              <h3 style={{ color: 'white', fontWeight: "500", textAlign: "center" }}>{t("sendMail")}</h3>
            </div>
            <div className={styles.sumbitEmail}>
              <input className={styles.inputPlaceholder} type="email" placeholder='Email' />
              <textarea className={styles.textareaFooter} placeholder='Mesajınız' name="" id="" cols="30" rows="3"></textarea>
              <button className={styles.footerSubmit}>{t("send")}</button>
            </div>
          </div>
        </div>
        <div className={styles.footerPartTwo}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div className={styles.logoFooter}>
              <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1712085676/WhatsApp_Image_2024-04-02_at_11.17.21_PM-removebg-preview_ayixmk.png" alt="" />
            </div>
            <div className={styles.sosialFooter}>
              <Link style={{ color: 'black' }} target='blank' to={"https://www.instagram.com/ozonio.official.azerbaijan/?ref=oSa2ew7A&hl=am-et"}>
                <InstagramIcon sx={{
                  fontSize: "28px",
                  marginTop: "10px",
                }} />
              </Link>
              <Link style={{ color: 'black' }} target='blank' to={"https://www.instagram.com/ozonio.official.azerbaijan/?ref=oSa2ew7A&hl=am-et"}>
                <FacebookIcon sx={{
                  fontSize: "28px",
                  marginTop: "10px",
                }} />
              </Link>
              <Link style={{ color: 'black' }} target='blank' to={"https://www.youtube.com/@nanoplastica_az"}>
                <YouTubeIcon sx={{
                  fontSize: "30px",
                  marginTop: "10px",
                }} />
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.footerLink}>
              <ScrollToTopOnMount />
              <Link to={"/"}>{t('esas')}</Link>
              <Link to={"/keratin"}>{t('keratin')}</Link>
              <Link to={"/sacqulluq"}>{t('sacqulluq')}</Link>
              <Link to={"/about"}>{t('about')}</Link>
              <Link to={"/contact"}>{t('contact')}</Link>
            </div>
            <div className={styles.mobileCopyright} style={{ marginTop: "30px", display: "flex", alignItems: "center", gap: "8px" }}>
              &copy;
              <a target='blank' href={"https://www.linkedin.com/in/yunis-mammadov-a91135275/"}>
                <p style={{ fontSize: "13px", paddingBottom: "6px", color: "rgb(115, 116, 117)" }}>yunismammadov</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
