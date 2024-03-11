import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Swal from 'sweetalert2';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllSacQulluq, getAllSocialMediaLinks } from '../../../api/request';
import BeatLoader from "react-spinners/BeatLoader";
import styles from './index.module.css';
import { useCart } from '../../../context/CartContext';

const SacQulluq = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [sacqulluq, setSacQulluq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState(sacqulluq);
  const [selectedOption, setSelectedOption] = useState('');
  const isMobile = useMediaQuery('(min-width:270px)');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();



  // useEffect(() => {
  //   filterItems();
  // }, [isHamısı, isShampooChecked, isBalsamoChecked, isMaskaChecked, isConditionerChecked, isBotoxChecked]);

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

  const handleAddToCart = (item) => {
    addToCart(item);
    Swal.fire({
      icon: 'success',
      title: 'Məhsul səbətə əlavə edildi!',
      showConfirmButton: false,
      timer: 1500,
    });
  };


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

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'Şampun') {
      const filtered = sacqulluq.filter(item => item.type === 'Shampoo');
      setFilteredItems(filtered);
    } else if (event.target.value === 'Balzam') {
      const filtered = sacqulluq.filter(item => item.type === 'Balsamo');
      setFilteredItems(filtered);
    } else if (event.target.value === 'Botox') {
      const filtered = sacqulluq.filter(item => item.type === 'Botox');
      setFilteredItems(filtered);
    } else if (event.target.value === 'Maska') {
      const filtered = sacqulluq.filter(item => item.type === 'Maska');
      setFilteredItems(filtered);
    } else if (event.target.value === 'Kondisioner') {
      const filtered = sacqulluq.filter(item => item.type === 'Kondisioner');
      setFilteredItems(filtered);
    }
    else {
      setFilteredItems(sacqulluq);
    }
  };

  return (
    <div className={styles.parentKeratin}>
      <div className={styles.accordion}>
        <select name="cars" id="cars" onChange={handleSelectChange}>
          <option className={styles.keratinOption} value="Hamısı">Hamısı</option>
          <option className={styles.keratinOption} value="Şampun">Şampun</option>
          <option className={styles.keratinOption} value="Balzam">Balzam</option>
          <option className={styles.keratinOption} value="Botox">Botox</option>
          <option className={styles.keratinOption} value="Maska">Maska</option>
          <option className={styles.keratinOption} value="Kondisioner">Kondisioner</option>
        </select>
      </div>
      <div className={styles.grid}>
        {filteredItems.map(sacqulluq => (
          <div className={styles.card} key={sacqulluq._id}>
            <Link to={`${sacqulluq._id}`}>
              <img className={styles.cardImg} src={sacqulluq.productImgUrl} alt='' />
              <h3 className={styles.keratinName}>{sacqulluq.name}</h3>
              <p style={{ fontSize: '14px', color: '#555' }}>{sacqulluq.description}</p>
            </Link>
            <div className={styles.detailWhislistButton}>
              <button className={styles.basketBtn} onClick={() => handleAddToCart({
                id: sacqulluq._id,
                img: sacqulluq.productImgUrl,
                name: sacqulluq.name,
                brand: sacqulluq.brand,
                quantity: quantity,
              })}>Səbətə Əlavə Et</button>
            </div>
          </div>
        ))}
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
