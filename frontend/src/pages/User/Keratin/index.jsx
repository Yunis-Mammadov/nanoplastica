import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllKeratin, getAllSocialMediaLinks } from '../../../api/request';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import BeatLoader from "react-spinners/BeatLoader";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.css';

const Keratin = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [socialLinks, setSocialLinks] = useState([]);
    const [keratin, setKeratin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    const [isHamısı, setIsHamısı] = useState(false);
    const [isBioCapilarChecked, setIsBioCapilarChecked] = useState(false);
    const [isNanoKeratinChecked, setIsNanoKeratinChecked] = useState(false);

    const filterItems = () => {
        const noFilterSelected =
            !isBioCapilarChecked &&
            !isNanoKeratinChecked;

        const filteredData = keratin.filter((item) => {
            if (isHamısı) {
                return true;
            }
            if (isBioCapilarChecked && item.filterName === "BioCapilar") {
                return true;
            }
            if (isNanoKeratinChecked && item.filterName === "NanoKeratin") {
                return true;
            }
            return false;
        });
        if ((isHamısı && noFilterSelected) || (!isHamısı && noFilterSelected)) {
            setFilteredItems(keratin);
        } else {
            setFilteredItems(filteredData);
        }
    };

    useEffect(() => {
        filterItems();
    }, [isHamısı, isBioCapilarChecked, isNanoKeratinChecked]);

    useEffect(() => {
        getAllKeratin()
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
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
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
                        <label style={{ fontSize: "17px" }}>NanoKeratin</label>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={styles.parentColumn2}>
                <Grid container spacing={2} item margin={"30px auto"} xs={11}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((keratins) => (
                            <Grid item xs={12} sm={6} md={4} key={keratins._id}>
                                <Link style={{ textDecoration: "none" }} to={`/keratin/${keratins._id}`}>
                                    <div className={styles.card}>
                                        <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
                                        <h3 className={styles.keratinName}>{keratins.name}</h3>
                                        <p style={{ fontSize: '14px', color: '#555' }}>{keratins.description}</p>
                                    </div>
                                </Link>
                            </Grid>
                        ))
                    ) : (
                        <Typography style={{ marginLeft: '20px' }}>Məhsul Tapılmadı...</Typography>
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
        </div >
    )
}

export default Keratin;
