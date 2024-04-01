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
          <label style={{ fontWeight: "600", fontSize: "18px" }}>{t("about")}</label>
          <label >
           {t("aboutText")}
          </label>
          <p style={{ paddingTop: "20px", fontWeight: "500" }}>{t("aboutFooter")}
          </p>
        </div>
      </div>
      {/* <WhyUs /> */}
    </>
  )
}

export default About
