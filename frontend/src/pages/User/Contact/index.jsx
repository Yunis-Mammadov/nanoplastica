import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./styles.css"

const Contact = () => {
  const [language, setLanguage] = useState('az');
  const { t, i18n } = useTranslation();

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
    <div id="section">
      <section className="contact-wrap">
        <form action="" className="contact-form">
          <div className="row">
            <div className="col-sm-6">
              <div className="input-block">
                <input type="text" className="form-control" placeholder={t("name")} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-block">
                <input type="text" className="form-control" placeholder={t("surname")} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="input-block">
                <input type="email" className="form-control" placeholder={t("mail")} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="input-block">
                <input type="text" className="form-control" placeholder={t("subject")} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="input-block textarea">
                <textarea rows="3" className="form-control" placeholder={t("message")}></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button className="sendWpButton"><WhatsAppIcon /><p>
                {t("send")}
              </p>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
