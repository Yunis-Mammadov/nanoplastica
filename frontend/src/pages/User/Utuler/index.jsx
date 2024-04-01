import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAllHavaFenleri, getAllSocialMediaLinks } from '../../../api/request';
import styles from './index.module.css';

const Utuler = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [havaFenleri, setHavaFenleri] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showAccordion, setShowAccordion] = useState(false)
  const isMobile = useMediaQuery('(min-width:270px)');
  const [language, setLanguage] = useState('az');
  const { t, i18n } = useTranslation();
  const filterItems = () => {
    // ... (existing filterItems logic remains unchanged)
  };

  const [isHamısı, setIsHamısı] = useState(false);
  const [isBioCapilarChecked, setIsBioCapilarChecked] = useState(false);
  const [isNanoKeratinChecked, setIsNanoKeratinChecked] = useState(false);

  useEffect(() => {
    getAllHavaFenleri()
      .then(data => {
        setHavaFenleri(data);
        setFilteredItems(data);
        setShowAccordion(true); // Veri başarıyla geldiğinde Accordion'u göster
      })
      .catch(error => {
        setHavaFenleri([]); // Boş diziyle havaFenleri state'ini güncelle
        setFilteredItems([]); // Boş diziyle filteredItems state'ini güncelle
        setShowAccordion(false); // Veri gelmediğinde Accordion'u gizle
      });
  }, []);

  useEffect(() => {
    getAllSocialMediaLinks().then(data => {
      setSocialLinks(data)
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
    <div className={styles.parentKeratin}>
      {showAccordion && (
        <div className={styles.accordion} style={{ width: isMobile ? "35%" : "30%" }}>
          <Accordion style={{ marginTop: '95px', width: isMobile && isMobile ? "100%" : "80%" }} defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Növ</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
              display: "flex",
              gap: "5px"
            }}>
              <input
                style={{ width: "20px" }}
                type="checkbox"
                checked={isHamısı}
                onChange={() => setIsHamısı(!isHamısı)}
              />
              <label style={{ fontSize: "17px" }}>Hamısı</label>
            </AccordionDetails>
            <AccordionDetails sx={{
              display: "flex",
              gap: "5px"
            }}>
              <input
                style={{ width: "20px" }}
                type="checkbox"
                checked={isBioCapilarChecked}
                onChange={() => setIsBioCapilarChecked(!isBioCapilarChecked)}
              />
              <label style={{ fontSize: "17px" }}>BioCapilar</label>
            </AccordionDetails>
            <AccordionDetails sx={{
              display: "flex",
              gap: "5px"
            }}>
              <input
                style={{ width: "20px" }}
                type="checkbox"
                checked={isNanoKeratinChecked}
                onChange={() => setIsNanoKeratinChecked(!isNanoKeratinChecked)}
              />
              <label style={{ fontSize: "17px" }}>Nano Keratin</label>
            </AccordionDetails>
          </Accordion>
          <button
            className={styles.filterButton}
            onClick={filterItems}
            disabled={
              !(
                isBioCapilarChecked ||
                isNanoKeratinChecked
              )
            }
          >
            Filterlə
          </button>
        </div>
      )}
      <div className={styles.parentColumn2}>
        <Grid container spacing={2} item margin={"30px auto"} xs={11}>
          {havaFenleri.length > 0 ? filteredItems.map((keratins) => (
            <Grid item xs={12} sm={6} md={4} key={keratins._id}>
              <Link style={{ textDecoration: "none" }} to={`/keratin/${keratins._id}`}>
                <div className={styles.card}>
                  <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
                  <h3 className={styles.keratinName}>{keratins.name}</h3>
                  <p style={{ fontSize: '14px', color: '#555' }}>{keratins.description}</p>
                </div>
              </Link>
            </Grid>
          )) : (
            <Typography sx={{ width: "100%", height: "65vh", textAlign: "center" }}>{t("notfound")}</Typography>
          )}
        </Grid>
      </div>
      {!isMobile && (
        <div className={styles.socialKeratin}>
          {socialLinks.map(item => (
            <a target='blank' style={{ color: "black" }} href={item.link}><InstagramIcon /></a>
          ))}
          <TelegramIcon />
          <EmailIcon />
        </div>
      )}
    </div >
  )
}

export default Utuler;