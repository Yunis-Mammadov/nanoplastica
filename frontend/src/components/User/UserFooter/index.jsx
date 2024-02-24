import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useEffect, useState } from 'react';
import { getAllContact, getAllNavbarLinks, getAllSocialMediaLinks } from '../../../api/request';
import styles from "./index.module.css";


const UserFooter = () => {

  const [navbarLinks, setNavbarLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState([])
  const [contact, setContact] = useState([])

  useEffect(() => {
    getAllSocialMediaLinks().then(data => {
      setSocialLinks(data)
    })
  }, [])

  useEffect(() => {
    getAllContact().then(data => {
      setContact(data)
    })
  }, [])

  useEffect(() => {
    getAllNavbarLinks().then(data => {
      setNavbarLinks(data);
    });
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            {/* <div className={styles.footerCol}>
              <img className={styles.logo} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
            </div> */}
            <div className={styles.footerCol}>
              <h4>Şirkət</h4>
              <ul>
                <li><a href="suallar">Ən Çox Verilən Suallar</a></li>
                <li><a href="about">Haqqımızda</a></li>
                <li><a href="contact">Sosial Media</a></li>
                <li><a href="konfidensial">Konfidensiallıq Siyasəti</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Digər Linklər</h4>
                <ul>
                  <a href="/">Əsas Səhifə</a>
                  <a href="/keratin">Keratin</a>
                  <a href="/sacqulluq">Sac Qulluq</a>
                  <a href="/setler">Setlər</a>
                </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Bizimlə Əlaqə</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map(item => (
                  <ul>
                    <div>
                      {item.platform === "Instagram" && (
                        <a target='blank' href={item.link}>
                          <div className={styles.socialMediaLinks} >
                            <InstagramIcon sx={{ color: "black" }} />
                            {item.name}
                          </div>
                        </a>
                      )}
                      {item.platform === "Facebook" && (
                        <a target='blank' href={item.link}>
                          <div className={styles.socialMediaLinks} >
                            <FacebookIcon sx={{ color: "black" }} />
                            {item.name}
                          </div>
                        </a>
                      )}
                      {item.platform === "Whatsapp" && (
                        <a target='blank' href={item.link}>
                          <div className={styles.socialMediaLinks} >
                            <WhatsAppIcon sx={{ color: "black" }} />
                            {item.name}
                          </div>
                        </a>
                      )}
                      {/* {item.platform === "Tiktok" && (
                        <a target='blank' href={item.link}>
                          <div className={styles.socialMediaLinks} >
                            <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faTiktok} />
                            {item.name}
                          </div>
                        </a>
                      )} */}
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default UserFooter