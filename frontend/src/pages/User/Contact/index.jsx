import React from 'react';
import "./styles.css"

const Contact = () => {
  return (
    <div id="section">
      <section className="contact-wrap">
        <form action="" className="contact-form">
          <div className="row">
            <div className="col-sm-6">
              <div className="input-block">
                <input type="text" className="form-control" placeholder='Ad' />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-block">
                <input type="text" className="form-control" placeholder='Soyad' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="input-block">
                <input type="email" className="form-control" placeholder='Email' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="input-block">
                <input type="text" className="form-control" placeholder='Mövzu Başlığı' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="input-block textarea">
                <textarea rows="3" placeholder='Mesaj' className="form-control"></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button className="square-button">Göndər</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
