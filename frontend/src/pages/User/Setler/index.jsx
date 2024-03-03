import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import styles from './index.module.css';
import { getAllSetler, getAllSocialMediaLinks } from '../../../api/request';

const Setler = () => {
  const isMobile = useMediaQuery('(min-width:270px)');
  const [socialLinks, setSocialLinks] = useState([]);
  const [keratin, setKeratin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isHamısı, setIsHamısı] = useState(false);
  const [isReviveChecked, setIsReviveChecked] = useState(false);
  const [isOzonioChecked, setIsOzonioChecked] = useState(false);

  const filterItems = () => {
    if (isHamısı) {
      setIsOzonioChecked(false);
      setIsReviveChecked(false)
    }

    const filteredData = keratin.filter((item) => {
      if (isHamısı && item.price === 1) {
        return true;
      }
      if (isReviveChecked && item.brand === "Revive") {
        return true;
      }
      if (isOzonioChecked && item.brand === "Ozonio") {
        return true;
      }
      return false;
    });
    setFilteredItems(filteredData);
  };

  useEffect(() => {
    getAllSetler()
      .then(data => {
        setKeratin(data);
        setFilteredItems(data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getAllSocialMediaLinks()
      .then(data => setSocialLinks(data))
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        color: "red",
      }}>
        <BeatLoader color="orange" />
      </div>
    );
  }

  return (
    <div className={styles.parentKeratin}>
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
              checked={isReviveChecked}
              onChange={() => setIsReviveChecked(!isReviveChecked)}
            />
            <label style={{ fontSize: "17px" }}>Revive</label>
          </AccordionDetails>
          <AccordionDetails sx={{
            display: "flex",
            gap: "5px"
          }}>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              checked={isOzonioChecked}
              onChange={() => setIsOzonioChecked(!isOzonioChecked)}
            />
            <label style={{ fontSize: "17px" }}>Ozonio</label>
          </AccordionDetails>
        </Accordion>
        <button
          className={styles.filterButton}
          onClick={filterItems}
          disabled={
            !(
              isReviveChecked ||
              isOzonioChecked
            )
          }
        >
          Filterlə
        </button>
      </div>
      <div className={styles.parentColumn2}>
        <Grid container spacing={2} item margin={"30px auto"} xs={11}>
          {keratin.length > 0 ? filteredItems.map((keratins) => (
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
            <></>
          )}
        </Grid>
      </div>
      {!isMobile && (
        <div className={styles.socialKeratin}>
          {socialLinks.map(item => (
            <a target='_blank' style={{ color: "black" }} href={item.link}><InstagramIcon /></a>
          ))}
          <TelegramIcon />
          <EmailIcon />
        </div>
      )}
    </div >
  )
}

export default Setler;
