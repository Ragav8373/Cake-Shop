import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
import "./Contact.css";

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
    <Container className="contact-section py-5" fluid>
      <Row className="justify-content-center">
        {/* Left: Contact Form */}
        <Col md={7}>
          <Card className="p-4 shadow contact-card">
            <p className="text-uppercase small-text">Send us email</p>
            <h2 className="mb-4 fw-bold">Feel free to write</h2>

            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-flex gap-3">
                <Button variant="primary" type="submit" className="px-4">
                  SEND MESSAGE
                </Button>
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      phone: "",
                      message: "",
                    })
                  }
                >
                  RESET
                </Button>
              </div>
            </Form>

            {status && <Alert className="mt-3">{status}</Alert>}
          </Card>
        </Col>

        {/* Right: Contact Info */}
        <Col md={5}>
          <div className="contact-info p-4">
            <p className="text-uppercase small-text">Need any help?</p>
            <h2 className="fw-bold mb-3">Get in touch with us</h2>
            <p className="info-text mb-4">
              Lorem ipsum is simply free text available dolor sit amet,
              consectetur notted adipisicing elit sed do eiusmod tempor
              incididunt simply free labore dolore magna.
            </p>

            <div className="info-box d-flex align-items-start mb-3">
              <FaPhoneAlt className="icon me-3" />
              <div>
                <strong>Have any question?</strong>
                <p className="mb-0">+91 68745 25469</p>
              </div>
            </div>

            <div className="info-box d-flex align-items-start mb-3">
              <FaEnvelope className="icon me-3" />
              <div>
                <strong>Write email</strong>
                <p className="mb-0">ailacakes@company.com</p>
              </div>
            </div>

            <div className="info-box d-flex align-items-start">
              <FaMapMarkerAlt className="icon me-3" />
              <div>
                <strong>Visit anytime</strong>
                <p className="mb-0">
                  Sevalpatti Vizhakku, <br />
                  Kooraikundu - 626003, <br />
                  Tamil Nadu <br />
                  Mobile: 1234567890
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
