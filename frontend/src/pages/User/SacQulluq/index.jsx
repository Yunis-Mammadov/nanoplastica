import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllSacQulluq, getAllSocialMediaLinks } from '../../../api/request';
import BeatLoader from "react-spinners/BeatLoader";
import styles from './index.module.css';

const SacQulluq = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [socialLinks, setSocialLinks] = useState([]);
  const [sacqulluq, setSacQulluq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState(sacqulluq);
  const [isHamısı, setIsHamısı] = useState(false);
  const [isShampooChecked, setIsShampooChecked] = useState(false);
  const [isBalsamoChecked, setIsBalsamoChecked] = useState(false);
  const [isMaskaChecked, setIsMaskaChecked] = useState(false);
  const [isBotoxChecked, setIsBotoxChecked] = useState(false);
  const [isConditionerChecked, setIsConditionerChecked] = useState(false);

  const filterItems = () => {
    const noFilterSelected =
      !isShampooChecked &&
      !isBalsamoChecked &&
      !isMaskaChecked &&
      !isConditionerChecked &&
      !isBotoxChecked;

    const filteredData = sacqulluq.filter((item) => {
      if (isHamısı) {
        return true;
      }
      if (isShampooChecked && item.type === 'Shampoo') {
        return true;
      }
      if (isBalsamoChecked && item.type === 'Balsamo') {
        return true;
      }
      if (isMaskaChecked && item.type === 'Maska') {
        return true;
      }
      if (isConditionerChecked && item.type === 'Kondisioner') {
        return true;
      }
      if (isBotoxChecked && item.type === 'Botox') {
        return true;
      }
      return false;
    });

    if ((isHamısı && noFilterSelected) || (!isHamısı && noFilterSelected)) {
      setFilteredItems(sacqulluq);
    } else {
      setFilteredItems(filteredData);
    }
  };

  useEffect(() => {
    filterItems();
  }, [isHamısı, isShampooChecked, isBalsamoChecked, isMaskaChecked, isConditionerChecked, isBotoxChecked]);

  useEffect(() => {
    getAllSacQulluq()
      .then(data => {
        setSacQulluq(data);
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
              checked={isShampooChecked}
              onChange={() => setIsShampooChecked(!isShampooChecked)}
            />
            <label style={{ fontSize: "17px" }}>Şampun</label>
          </AccordionDetails>
          <AccordionDetails sx={{
            display: "flex",
            gap: "5px"
          }}>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              checked={isBalsamoChecked}
              onChange={() => setIsBalsamoChecked(!isBalsamoChecked)}
            />
            <label style={{ fontSize: "17px" }}>Balzam</label>
          </AccordionDetails>
          <AccordionDetails sx={{
            display: "flex",
            gap: "5px"
          }}>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              checked={isMaskaChecked}
              onChange={() => setIsMaskaChecked(!isMaskaChecked)}
            />
            <label style={{ fontSize: "17px" }}>Maska</label>
          </AccordionDetails>
          <AccordionDetails sx={{
            display: "flex",
            gap: "5px"
          }}>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              checked={isConditionerChecked}
              onChange={() => setIsConditionerChecked(!isConditionerChecked)}
            />
            <label style={{ fontSize: "17px" }}>Kondisioner</label>
          </AccordionDetails>
          <AccordionDetails sx={{
            display: "flex",
            gap: "5px"
          }}>
            <input
              style={{ width: "20px" }}
              type="checkbox"
              checked={isBotoxChecked}
              onChange={() => setIsBotoxChecked(!isBotoxChecked)}
            />
            <label style={{ fontSize: "17px" }}>Botox</label>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.parentColumn2}>
        <Grid container spacing={2} item margin={"60px auto"} xs={11}>
          {filteredItems.length > 0 ? filteredItems.map((sacqulluqs) => (
            <Grid item xs={12} sm={6} md={4} key={sacqulluqs._id}>
              <Link style={{ textDecoration: "none" }} to={`/sacqulluq/${sacqulluqs._id}`}>
                <div className={styles.card}>
                  <img
                    className={styles.cardImg}
                    src={sacqulluqs.productImgUrl}
                    alt=""
                  />
                  <h3 className={styles.keratinName}>{sacqulluqs.name}</h3>
                  <p style={{ fontSize: '14px', color: '#555' }}>{sacqulluqs.description}</p>
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
            <a key={item.platform} target='_blank' href={item.link}>
              <div className={styles.socialMediaLinks} >
                {item.platform === 'Instagram' && (
                  <InstagramIcon sx={{ color: 'black' }} />
                )}
                {item.platform === 'Facebook' && (
                  <FacebookIcon sx={{ color: 'black' }} />
                )}
                {item.platform === 'Whatsapp' && (
                  <WhatsAppIcon sx={{ color: 'black' }} />
                )}
                {item.platform === 'Tiktok' && (
                  <FontAwesomeIcon style={{ paddingLeft: "5px", color: "black" }} icon={faTiktok} />
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SacQulluq;
