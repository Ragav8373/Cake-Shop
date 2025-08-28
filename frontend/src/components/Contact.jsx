import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("⚠️ Server error.");
    }
  };

  return (
    <div className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <p className="small-text">Send us email</p>
        <h2>Feel free to write</h2>

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Enter Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="form-buttons">
          <button type="submit" className="btn send">SEND MESSAGE</button>
          <button
            type="button"
            className="btn reset"
            onClick={() => setFormData({ name: "", email: "", subject: "", phone: "", message: "" })}
          >
            RESET
          </button>
        </div>
        <p className="status">{status}</p>
      </form>

      <div className="contact-info">
        <p className="small-text">Need any help?</p>
        <h2>Get in touch with us</h2>
        <p className="info-text">
          Lorem ipsum is simply free text available dolor sit amet,
          consectetur notted adipisicing elit sed do eiusmod tempor incididunt
          simply free labore dolore magna.
        </p>

        <div className="info-box">
          <span className="icon">📞</span>
          <div>
            <strong>Have any question?</strong>
            <p>+91 68745 25469</p>
          </div>
        </div>

        <div className="info-box">
          <span className="icon">📧</span>
          <div>
            <strong>Write email</strong>
            <p>ailacakes@company.com</p>
          </div>
        </div>

        <div className="info-box">
          <span className="icon">📍</span>
          <div>
            <strong>Visit anytime</strong>
            <p>Sevalpatti vizhakku
                Kooraikundu-626003
                Tamil Nadu 
                Mobile:1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
