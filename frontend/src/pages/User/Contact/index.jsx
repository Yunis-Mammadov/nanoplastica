import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import styles from './index.module.css';

const Contact = () => {
  return (
    <div className={styles.parentContact}>
      <div className={styles.textContact}>
        <h1 className={styles.headerContact}>Bizimlə Əlaqə</h1>
        <p>Sosial Media vasitəsilə bizimlə əlaqə yarat</p>
      </div>
      <Grid container spacing={2} className={styles.iconContact}>
        <Grid item xs={6} sm={3}>
          <Link style={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} target="blank">
            <FacebookIcon sx={{ margin: '0 auto', fontSize: '68px', border: '1px solid white', backgroundColor: 'rgb(245,245,245)', borderRadius: '50%', padding: '10px' }} />
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              Ozonio Azerbijan
            </p>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link style={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} target="blank" to={"https://www.instagram.com/ozonio.official.azerbaijan/?ref=oSa2ew7A&hl=am-et"}>
            <InstagramIcon sx={{ margin: '0 auto', fontSize: '68px', border: '1px solid white', backgroundColor: 'rgb(245,245,245)', borderRadius: '50%', padding: '10px' }}  />
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              ozonio.official.azerbaijan
            </p>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link style={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} target="blank" to="https://wa.me/994708878799">
            <WhatsAppIcon sx={{ margin: '0 auto', fontSize: '68px', border: '1px solid white', backgroundColor: 'rgb(245,245,245)', borderRadius: '50%', padding: '10px' }} />
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              0708878799
            </p>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link style={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} target="blank" to={"https://www.youtube.com/@nanoplastica_az"}>
            <YouTubeIcon sx={{ margin: '0 auto', fontSize: '68px', border: '1px solid white', backgroundColor: 'rgb(245,245,245)', borderRadius: '50%', padding: '10px' }} />
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              Ozonio Azerbijan
            </p>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          {/* <Link style={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} target="blank">
            <EmailIcon sx={{ fontSize: '68px', border: '1px solid white', backgroundColor: 'rgb(245,245,245)', borderRadius: '50%', padding: '10px' }} />
          </Link> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
