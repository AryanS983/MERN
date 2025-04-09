// import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
      <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Your One-Stop Digital Solutions Hub</p>
              <h1>Welcome to Digital Solutions</h1>
              <p>
                Need reliable and affordable digital services? At Digital Solutions, we provide a wide range of services including Xerox, Aadhar Card creation, ticket booking, and much more. Whether you're looking for quick document printing or assistance with online applications, we've got you covered!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Get in Touch</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Explore Services</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We Make Your Life Easier</p>
            <h1>Our Services</h1>
            <p>
              At Digital Solutions, we offer a variety of services to meet your everyday needs:
              
                <li>- High-quality Xerox and printing services</li>
                <li>- Aadhar Card creation and updates</li>
                <li>- Online ticket booking (bus, train, flights)</li>
                <li>- Form filling and application assistance</li>
                <li>- Internet browsing and computer access</li>
              
              Visit us today and experience hassle-free digital services!
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Contact Us</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
// If a component is exported as default it can be imborted directly Ex : import Home from  'path'
// If we do not export as default ie. export Home then we had to use {} to import Ex: import {Home} from 'Path'
