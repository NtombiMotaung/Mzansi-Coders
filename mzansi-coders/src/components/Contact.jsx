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
    // For now just simulate submission
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page" style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Contact Us</h2>
      <p>Have questions or want to register? Send us a message!</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            style={{ padding: "0.5rem", fontSize: "1rem", width: "100%" }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            style={{ padding: "0.5rem", fontSize: "1rem", width: "100%" }}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Write your message here..."
            style={{ padding: "0.5rem", fontSize: "1rem", width: "100%" }}
          />
        </label>

        <button type="submit" style={{
          backgroundColor: "#2a2a2a",
          color: "white",
          border: "none",
          padding: "0.75rem",
          fontSize: "1.1rem",
          cursor: "pointer",
          borderRadius: "5px"
        }}>
          Send Message
        </button>
      </form>

      {status && <p style={{ marginTop: "1rem", color: "green" }}>{status}</p>}

      <div style={{ marginTop: "2rem" }}>
        <p><strong>Email:</strong> futurecoders@gmail.com</p>
        <p><strong>Phone/WhatsApp:</strong> 076 123 4567</p>
        <p><strong>Location:</strong> Soweto, Johannesburg</p>
      </div>
    </div>
  );
};

export default Contact;
