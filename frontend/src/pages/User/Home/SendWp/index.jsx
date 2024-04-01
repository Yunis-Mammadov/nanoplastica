import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import styles from "./index.module.css";

const SendWp = () => {
    const [language, setLanguage] = useState('az');
    const { t, i18n } = useTranslation();
    const sendWhatsAppMessage = () => {
        const phoneNumber = '+994708878799';
        const message = encodeURIComponent('Salam.Mən Whatsapp qrupuna daxil olmaq və ətraflı məlumat almaq istəyirəm!');

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, '_blank');
    };

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
        <div className={styles.parentSendWp}>
            <div className={styles.cardSendWp}>
                <h4>{t("wpHeader")}</h4>
                <p style={{ textAlign: "center", fontSize: "13px", fontWeight: '200' }}>{t("wpText")}</p>
                <button className={styles.sendWpButton} onClick={sendWhatsAppMessage}><WhatsAppIcon /><p>
                    {t("wpBtn")}
                </p>
                </button>
            </div>
        </div>
    );
};

export default SendWp;
