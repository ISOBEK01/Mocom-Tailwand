import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = '7882940007:AAGQzoefevlENmfw5LSBnoRhVQ8RyP2N71s';  
    const chatId = '6262106919'; 

    const text = `
Yangi so‘rov:
Ism: ${formData.name}
Telefon: ${formData.phone}
Xabar: ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        alert('Xabar yuborildi ');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert(' Xatolik: so‘rov yuborilmadi.');
      }
    } catch (error) {
      console.error('Xatolik:', error);
      alert('Ulanishda xatolik yuz berdi.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-700">CONTACT                      </h2>

        <input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefon raqamingiz"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <textarea
          name="message"
          placeholder="Xabaringiz"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded h-28"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
