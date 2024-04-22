import React, { useState, useEffect } from 'react';
import WhyUs from '../Home/WhyUs';
import { useTranslation } from 'react-i18next';
import { getAllImgs } from '../../../api/request';
import styles from "./index.module.css";

const About = () => {
  const [firstAboutImg, setFirstAboutImg] = useState(null);
  const [language, setLanguage] = useState('az');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getAllImgs()
      .then(data => {
        const firstAboutImgUrl = data.length > 0 ? data[0].aboutImg : null;
        setFirstAboutImg(firstAboutImgUrl);
      })
  }, []);

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
      <div className={styles.parentAbout}>
        <div className={styles.imgParent} style={{
          backgroundImage: `url(${firstAboutImg})`,
        }}>
        </div>
        <div className={styles.aboutText} style={{ marginTop: "30px" }}>
          <div style={{ display: "flex", justifyContent: "center", fontWeight: 600 }} >
            {t("about")}
          </div>
          <div className={styles.textAbout}>
            {t("aboutText")}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", fontWeight: 600, paddingTop:"7px" }}>
            {t("aboutFooter")}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
