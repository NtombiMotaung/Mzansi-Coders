import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      {/* Left: Map */}
      <div style={styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28620.480235850788!2d27.765975777372187!3d-26.275939139664636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a448a775d7e3%3A0xbcd04c20d95f17c2!2sProtea%20Glen%2C%20Soweto%2C%201819!5e0!3m2!1sen!2sza!4v1753026758326!5m2!1sen!2sza" 
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 8 }}  
        allowfullscreen=""
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Right: Contact Form */}
      <div style={styles.formContainer}>
        <h2>Contact Us</h2>
        <p>Have questions or want to register? Send us a message!</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              style={styles.textarea}
            />
          </label>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        {status && <p style={{ marginTop: 16, color: "green" }}>{status}</p>}

        <div style={{ marginTop: 24 }}>
          <p><strong>Email:</strong> futurecoders@gmail.com</p>
          <p><strong>Phone/WhatsApp:</strong> 076 123 4567</p>
          <p><strong>Location:</strong> Soweto, Johannesburg</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 960,
    margin: "2rem auto",
    gap: "2rem",
    padding: "0 1rem",
  },
  mapContainer: {
    flex: "1 1 400px",
    height: 400,
    minWidth: 300,
    paddingTop: 120,
    paddingRight:80
  },
  formContainer: {
    flex: "1 1 400px",
    minWidth: 300,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginTop: "0.25rem",
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.5rem",
    fontSize: "1rem",
    marginTop: "0.25rem",
    borderRadius: 4,
    border: "1px solid #ccc",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#2a2a2a",
    color: "white",
    border: "none",
    padding: "0.75rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    borderRadius: 5,
  },
};

export default Contact;
