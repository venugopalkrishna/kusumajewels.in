import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sections = [
  "home",
  "about",
  "eternal",
  "products",
  // "gold",
  "founders",
  "contact",
  "privacy",
  "terms",
  "footer",
];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img
              src="/logo3.png"
              alt="Kusuma Jewels"
              style={{ borderRadius: "10%", width: "70px", height: "70px" }}
            />
            <span>KUSUMA JEWELS</span>
          </div>

          <nav className={styles.nav}>
            <p
              // href="#home"
              className={
                activeSection === "home" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Home
            </p>
            <p
              // href="#about"
              className={
                activeSection === "about" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              About us
            </p>
            <p
              // href="#products"
              className={
                activeSection === "products" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Products
            </p>

            <p
              // href="#founders"
              className={
                activeSection === "founders" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("founders")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Founders
            </p>
            <p
              // href="#contact"
              className={
                activeSection === "contact" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Contact us
            </p>
            <p
              // href="#privacy"
              className={
                activeSection === "privacy" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("privacy")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Privacy Policy
            </p>
            <p
              // href="#privacy"
              className={
                activeSection === "terms" ? styles.active : styles.active1
              }
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("terms")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              Terms
            </p>
          </nav>
        </div>
      </header>
      <section className={styles.hero} id="home">
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.welcome}>Welcome to</p>
          <h1 className={styles.title}>KUSUMA JEWELS</h1>
          {/* <span className={styles.dividerTitle} /> */}
          <img
            src="/logo2.png"
            alt="Jewelry showcase"
            className={styles.mainImage1}
          />
        </div>
      </section>
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContainer}>
          {/* LEFT – Images */}
          <div className={styles.aboutImages}>
            <img
              src="/jewellery-image.png"
              alt="Jewelry showcase"
              className={styles.mainImage}
            />

            {/* <img
              src="/about-image.png"
              alt="Founder"
              className={styles.personImage}
            />

            <img
              src="/about-image.png"
              alt="Brand card"
              className={styles.cardImage}
            /> */}
          </div>

          {/* RIGHT – Content */}
          <div className={styles.aboutContent}>
            <h2>About Us</h2>

            <p>
              At KUSUMA JEWELS, we pride ourselves on being purveyors of purity
              in the realm of jewelry. Our legacy spans generations, rooted in
              the commitment to deliver nothing short of excellence to our
              patrons.
            </p>

            <p>
              With a steadfast focus on transparency and trust, KUSUMA JEWELS
              stands as a beacon of integrity in the industry. Each jewel is
              crafted using the finest materials sourced from reputable
              suppliers.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.eternalSection} id="about">
        <div className={styles.eternalOverlay}></div>

        <div className={styles.eternalContent}>
          <span className={styles.eternalSub}>THE</span>
          <h2 className={styles.eternalTitle}>Eternal Beauty!</h2>
        </div>
      </section>
      <section className={styles.productsSection} id="products">
        <h2 className={styles.productsTitle}>Our Products</h2>

        <div className={styles.productsGrid}>
          {/* Wedding Jewellery */}
          <div className={`${styles.productCard} ${styles.wedding}`}>
            <img src="/wedding-image.png" alt="Wedding Jewellery" />
            <span>Wedding Jewellery</span>
          </div>

          {/* Ear Rings */}
          <div className={styles.productCard}>
            <img src="/ear-rings.png" alt="Ear Rings" />
            <span>Ear Rings</span>
          </div>

          {/* Bangles */}
          <div className={styles.productCard}>
            <img src="/bangles3.png" alt="Bangles" />
            <span>Bangles</span>
          </div>

          {/* Necklace */}
          <div className={`${styles.productCard} ${styles.necklace}`}>
            <img src="/necklace-image.png" alt="Necklace" />
            <span>Necklace</span>
          </div>

          {/* Chains / Necklace Sets */}
          <div className={styles.productCard}>
            <img src="/chain.jpg" alt="Chains / Necklace Sets" />
            <span>Chains / Necklace Sets</span>
          </div>

          {/* Anklets */}
          <div className={styles.productCard}>
            <img src="/anklet.jpg" alt="Anklets" />
            <span>Anklets</span>
          </div>

          {/* Nose Pins */}
          <div className={styles.productCard}>
            <img src="/nose.jpg" alt="Nose Pins" />
            <span>Nose Pins</span>
          </div>

          {/* Mangalsutra */}
          <div className={styles.productCard}>
            <img src="/mangalsutra.jpg" alt="Mangalsutra" />
            <span>Mangalsutra</span>
          </div>

          {/* Pendants */}
          <div className={styles.productCard}>
            <img src="/pendants.jpg" alt="Pendants" />
            <span>Pendants</span>
          </div>

          {/* Bracelets */}
          <div className={styles.productCard}>
            <img src="/bracelets.jpg" alt="Bracelets" />
            <span>Bracelets</span>
          </div>

          {/* Rings */}
          <div className={styles.productCard}>
            <img src="/rings.jpg" alt="Rings" />
            <span>Rings</span>
          </div>
        </div>
      </section>
      {/* <section className={styles.aboutSection} id="gold">
        <h2 className={styles.productsTitle}>Gold Scheme</h2>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImages}>
            <img
              src="/gold-scheme.png"
              alt="Jewelry showcase"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.aboutImages}>
            <img
              src="/gold-scheme1.png"
              alt="Jewelry showcase"
              className={styles.mainImage}
            />
          </div>
        </div>
      </section> */}
      <section className={styles.founders} id="founders">
        <div className={styles.foundersContainer}>
          <h2 className={styles.foundersHeading}>Our Founders</h2>

          <div className={styles.foundersList}>
            <div className={styles.founderItem}>
              <div className={styles.founderAvatar}>
                <img src="/owner.png" alt="Puvvadi nagendra Baabu" />
              </div>

              <div className={styles.founderNames}>
                <p className={styles.founderName}>Puvvadi nagendra Baabu</p>
                {/* <span className={styles.founderDot} />
                <p className={styles.founderName}>Vallamkondu Avinash</p>
                <span className={styles.founderDot} />
                <p className={styles.founderName}>Vallamkondu Nithin</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact} id="contact">
        <div className={styles.contactContainer}>
          {/* Left Content */}
          <div className={styles.contactLeft}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <p className={styles.contactSubtitle}>
              Where tradition meets elegance, and purity meets prosperity
            </p>

            <form className={styles.contactForm}>
              <input
                type="text"
                placeholder="Enter your Name"
                className={styles.contactInput}
              />

              <input
                type="email"
                placeholder="Enter your Email"
                className={styles.contactInput}
              />

              <textarea
                placeholder="Enter your message"
                className={styles.contactTextarea}
              />
            </form>
          </div>

          {/* Right Card */}
          <div className={styles.contactRight}>
            <img
              src="/logo3.png"
              alt="KUSUMA JEWELS"
              className={styles.contactLogo}
            />

            <p className={styles.contactImageText}>contactus</p>

            <button className={styles.contactBtn}>Send</button>
          </div>
        </div>
      </section>
      <section className={styles.infoSection}>
        {/* Top Gradient Banner */}
        <div className={styles.infoBanner}>
          <p>
            Where tradition meets elegance, and <br />
            purity meets prosperity
          </p>
        </div>

        {/* Bottom Info Row */}
        <div className={styles.infoContent}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📞 Call Us</span>
            {/* <h4>Call Us</h4> */}
            <p style={{ color: "#000", fontWeight: 600 }}>+91 9849134500</p>
            {/* <p style={{ color: "#000", fontWeight: 600 }}>+91 9542022289</p> */}
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🏢 Visit us</span>
            {/* <h4>Visit us</h4> */}
            <p style={{ color: "#000", fontWeight: 600 }}>
              11/316, MAIN BAZAR PRODDATUR, KADAPA
            </p>
            {/* <p style={{ color: "#000", fontWeight: 600 }}>NELLORE - 524001</p> */}
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>✉️ Contact us</span>
            {/* <h4>Contact us</h4> */}
            <p style={{ color: "#000", fontWeight: 600 }}>
              nagendrajewellers1@gmail.com
            </p>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📞 Availability</span>
            {/* <h4>Availability</h4> */}
            <p style={{ color: "#000", fontWeight: 600 }}>10:30AM - 8:30PM</p>
            <p style={{ color: "#000", fontWeight: 600 }}>Mon-Sat</p>
          </div>
        </div>
      </section>
      <section className={styles.privacySection} id="privacy">
        <div className={styles.privacyContainer}>
          <h2 className={styles.privacyTitle}>Privacy Policy</h2>

          <p className={styles.privacyText}>
            KUSUMA JEWELS. (“we” or “us” or “our”) respects the privacy of our
            users (“user” or “you”). We make every effort to treat your personal
            information as safely and securely as reasonably possible. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            you. Please read the following privacy policy to understand better
            how your personal information may be collected and used as you
            access various areas of our application.
          </p>

          <p className={`${styles.privacyText} ${styles.privacyBold}`}>
            If You Do Not Agree With The Terms Of This Privacy Policy, Please Do
            Not Access The Website.
          </p>

          <p className={styles.privacyText}>
            We reserve the right to make changes to this Privacy Policy at any
            time and for any reason. We will alert you about any changes by
            updating the “Last updated” date of this Privacy Policy. You are
            encouraged to periodically review this Privacy Policy to stay
            informed of updates. You will be deemed to have been made aware of,
            will be subject to, and will be deemed to have accepted the changes
            in any revised Privacy Policy by your continued use of the
            Application after the date such revised Privacy Policy is posted. We
            do not sell, rent, share, or otherwise disclose personally
            identifiable information from customers for commercial purposes. We
            do not intend to disclose any personal information of yours without
            your consent to any third party who is not bound to act on our
            behalf unless such disclosure is required by law. This Privacy
            Policy does not apply to the third-party online/mobile store from
            which you install the Application or make payments, which may also
            collect and use data about you. We are not responsible for any of
            the data collected by any such third party.
          </p>
        </div>
      </section>
      <section className={styles.privacySection} id="terms">
        <div className={styles.privacyContainer}>
          <h2 className={styles.privacyTitle}>Terms And Conditions</h2>

          <p className={styles.privacyText}>
            <span style={{ fontWeight: "bold" }}>
              Product Information and Accuracy:
            </span>{" "}
            Clarify that while you strive for accuracy in product descriptions
            and images, variations may occur, and the displayed images are for
            illustrative purposes only.
          </p>

          <p className={styles.privacyText}>
            <span style={{ fontWeight: "bold" }}>Pricing and Payment:</span>{" "}
            Specify that all prices are in a particular currency, subject to
            change without notice. Outline accepted payment methods and state
            that additional charges like taxes and shipping fees may apply.
          </p>
          <p className={styles.privacyText}>
            <span style={{ fontWeight: "bold" }}>Returns and Exchanges:</span>{" "}
            Highlight your return and exchange policy, including the timeframe
            for returns, conditions for refunds or exchanges, and any
            requirements for returning products in their original condition and
            packaging.
          </p>
          <p className={styles.privacyText}>
            <span style={{ fontWeight: "bold" }}>Intellectual Property:</span>{" "}
            Assert ownership of all content on your website and prohibit the
            reproduction, distribution, or modification of said content without
            prior consent.
          </p>
          <p className={styles.privacyText}>
            <span style={{ fontWeight: "bold" }}>Governing Law:</span> State the
            jurisdiction under which these terms and conditions are governed and
            construed, typically the laws of your country, to establish legal
            clarity and consistency.
          </p>
        </div>
      </section>
      <section className={styles.footerHero} id="privacy">
        <div className={styles.footerHeroContainer}>
          {/* LEFT CONTENT */}
          <div className={styles.footerLeft}>
            <div className={styles.brandLogo}>
              <img
                src="/logo3.png"
                alt="Swastik Gold"
                style={{ borderRadius: "10%" }}
              />
            </div>

            <p className={styles.brandTagline}>
              Jewellery has the power to be that one special thing that makes
              you feel truly unique. — KUSUMA JEWELS
            </p>

            <div className={styles.footerActions}>
              {/* <a href="#" className={styles.iconCircle}>
                📷
              </a> */}
              {/* <a
                href="https://www.instagram.com/sreevallamkondujewellers/"
                className={styles.iconCircle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a> */}
              {/* <a href="#" className={styles.iconCircle}>
                📘
              </a> */}
              {/* <a
                href="https://www.facebook.com/profile.php?id=61589530719739"
                className={styles.iconCircle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a> */}
              <a href="tel:+919849134500" className={styles.iconCircle}>
                📞
              </a>
              <a
                href="mailto:nagendrajewellers1@gmail.com"
                className={styles.iconCircle}
              >
                ✉️
              </a>

              <button
                className={styles.footerBtn}
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className={styles.footerRight}>
            <iframe
              title="Kusuma Jewels Location"
              src="https://www.google.com/maps?q=KUSUMA+JEWELS, Kadapa, Andhra Pradesh 516360&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.divider} />
          <p>
            <strong>© 2026 KUSUMA JEWELS</strong>
          </p>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
