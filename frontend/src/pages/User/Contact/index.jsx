import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://localhost:3000/api/send-email', formData);
      console.log("email göndərildi");
    } catch (error) {
      console.error('E-posta gönderilirken bir hata oluştu:', error);
    }
  };

  return (
    <div>
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Adınız:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Soyadınız:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-posta Adresiniz:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mesajınız:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Contact;
