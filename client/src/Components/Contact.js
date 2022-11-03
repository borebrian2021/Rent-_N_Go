import React, {useState} from "react";
import TopBar from "./TopBar";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
const Contact = () => {
    const variants_ = {
      hidden: {
        // opacity: 0,
        x: "100vw",
      },
      visible: {
        // opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: 0.3,
        },
      },
      exit: {
        x: "-100vw",
        // transition: { ease: 'easeInOut' }
        delay: 2,
      },
    };
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
   function handleChange(e) {
     const key = e.target.id;
     setContact({ ...contact, [key]: e.target.value });
   }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: contact.firstName,
        last_name: contact.lastName,
        email: contact.email,
        message: contact.message,
      }),
    })
      .then((res) => res.json())
      .then((contact) => {
        setContact({
          ...contact,
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
        toast.success("message sent succesfully!");
      });
  }
  return (
    <div>
      <TopBar />
      <br></br>
      <br></br>
      <br></br>
      <motion.section  variants={variants_} initial="hidden" animate="visible" exit="exit" class="contact-us">
        <div class="container">
          {/* <div class="property-location mb-5">
                    <h3>Our Location</h3>
                    <div class="divider-fade"></div>
                    <div id="map-contact" class="contact-map"></div>
                </div> */}
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <h3 class="mb-4">Contact Us</h3>
              <form
                id="contactform"
                class="contact-form"
                name="contactform"
                method="post"
                novalidate
                onSubmit={handleSubmit}
              >
                <div id="success" class="successform">
                  <p class="alert alert-success font-weight-bold" role="alert">
                    Your message was sent successfully!
                  </p>
                </div>
                <div id="error" class="errorform">
                  <p>
                    Something went wrong, try refreshing and submitting the form
                    again.
                  </p>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    required
                    class="form-control input-custom input-full"
                    name="name"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    required
                    class="form-control input-custom input-full"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control input-custom input-full"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control textarea-custom input-full"
                    id="ccomment"
                    name="message"
                    required
                    rows="8"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="submit-contact"
                  class="btn btn-primary btn-lg"
                >
                  Submit
                </button>
              </form>
            </div>
            <div class="col-lg-4 col-md-12 bgc">
              <div class="call-info">
                <h3>Contact Details</h3>
                <p class="mb-5">
                  Please find below contact details and contact us today!
                </p>
                <ul>
                  <li>
                    <div class="info">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <p class="in-p">Ngong Road,Nairobi, Kenya</p>
                    </div>
                  </li>
                  <li>
                    <div class="info">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <p class="in-p">+254703103852</p>
                    </div>
                  </li>
                  <li>
                    <div class="info">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <p class="in-p ti">customercare@rentngo.com</p>
                    </div>
                  </li>
                  <li>
                    <div class="info cll">
                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                      <p class="in-p ti">8:00 a.m - 9:00 p.m</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
