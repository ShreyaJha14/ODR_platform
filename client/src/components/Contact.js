import React, { useState } from "react";
import styled from "styled-components";
import {
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Container = styled.div`
  background: #000718;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  background: white;
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  background: linear-gradient(
    144deg,
    rgba(126, 39, 156, 1) 0%,
    rgb(54, 118, 228) 49%
  );
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      font-size: 18px;

      svg {
        margin-right: 15px;
        background: #f55472;
        padding: 10px;
        border-radius: 50%;
        color: white;
        font-size: 18px;
      }
    }
  }

  .socials {
    display: flex;
    gap: 15px;
    margin-top: 30px;

    a {
      background: #f55472;
      padding: 12px 16px;
      border-radius: 12px;
      color: white;
      font-size: 20px;
      transition: 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Right = styled.div`
  flex: 2;
  background: #e9ecef;
  padding: 40px;

  h2 {
    font-size: 26px;
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    input,
    textarea {
      flex: 1 1 45%;
      padding: 15px;
      border: none;
      border-radius: 25px;
      box-shadow: inset -3px -3px 7px #ffffff73,
        inset 3px 3px 5px #c4c4c4;
      font-size: 16px;
    }

    textarea {
      flex: 1 1 100%;
      height: 150px;
      resize: none;
    }

    button {
      flex: 1 1 100%;
      padding: 18px;
      background: rgb(54, 118, 228);
      color: white;
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 35px;
      cursor: pointer;
      margin-top: 10px;
      transition: 0.3s ease;

      &:hover {
        background: #f55472;
      }
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <div>
            <h2>Contact Information</h2>
            <p>
              Fill up the form and our Team will get back to you within 24
              hours
            </p>
            <ul>
              <li>
                <FaPhoneAlt /> Phone: 9191******
              </li>
              <li>
                <FaPaperPlane /> Email: meeh.shreya.jha@gmail.com
              </li>
              <li>
                <FaGlobe /> Website: yoursite.com
              </li>
            </ul>
          </div>
          <div className="socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </Left>
        <Right>
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
