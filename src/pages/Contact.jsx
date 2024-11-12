import React from "react";

function Contact() {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter Your Name"
            name="username"
          />

          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter Your Email"
            name="email"
          />

          <textarea
            name="message"
            className="form-control"
            required
            rows="10"
            placeholder="Enter Your Message"
            autoComplete="false"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
