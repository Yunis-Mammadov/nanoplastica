import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from "./index.module.css";

const SendWp = () => {
    const sendWhatsAppMessage = () => {
        const phoneNumber = '+994708878799';
        const message = encodeURIComponent('Salam.Mən Whatsapp qrupuna daxil olmaq və ətraflı məlumat almaq istəyirəm!');

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <div className={styles.parentSendWp}>
            <div className={styles.cardSendWp}>
                <h4>Siz hələdə bizim məhsulları istifadə etməmisiniz?</h4>
                <p style={{ textAlign: "center", fontSize: "13px", fontWeight: '200' }}>İstifadə qaydalarını bilmirsiniz?
                    Bizim peşəkar saç ustaları qurupuna qoşulun və daha mükəmməl biliklərə sahib olun</p>
                <p className={styles.sendWpButton} onClick={sendWhatsAppMessage}><WhatsAppIcon/> Whatsapp Qrupuna Qoşul</p>
            </div>
        </div>
    );
};

export default SendWp;
