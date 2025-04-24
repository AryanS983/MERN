import { useState } from "react";
import { AuthCreate } from "../store/auth"
import { toast } from "react-toastify";


export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const {API} = AuthCreate()
  const [info, setInfo] = useState(true)
  const {user} = AuthCreate()

  if(user && info){
    setContact({
      username: user.username,
      email: user.email,
      message:""
    })
    setInfo(false)
  }


  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!contact.username || !contact.email || !contact.message) {
        toast.error("All fields are required!");
        return;
      }
      const response = await fetch(API+"api/auth/contact", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(contact)
      })
      const data = await response.json()
      
      if(response.ok){
        setContact({
          ...contact,
          message:""
        })
        toast.success(data.msg)
      }
      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="we are always ready to help"
              width={200}
              height={300}
            />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="70"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.54868142141225!2d88.37507119663807!3d22.564532934632304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027658a403d021%3A0xa1447aeb25d9b067!2sShibtala%20Ln%2C%20Seal%20Lane%2C%20Tangra%2C%20Kolkata%2C%20West%20Bengal%20700015!5e0!3m2!1sen!2sin!4v1744040243783!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
