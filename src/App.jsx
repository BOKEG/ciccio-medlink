
import { useState } from "react";
import "./App.css";

function App() {

  const demoProducts = [
  {
    id: 1,
    name: "Examination Gloves",
    category: "PPE",
    description: "Demonstration listing for examination gloves.",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Medical Face Masks",
    category: "PPE",
    description: "Demonstration listing for protective face masks.",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Wound Dressing Supplies",
    category: "Wound Care",
    description: "Demonstration listing for wound dressing supplies.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Digital Thermometer",
    category: "Medical Equipment",
    description: "Demonstration listing for a digital thermometer.",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Blood Pressure Monitor",
    category: "Medical Equipment",
    description: "Demonstration listing for a blood pressure monitor.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Medical Consumables",
    category: "Consumables",
    description: "Demonstration listing for general medical consumables.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    name: "Home Healthcare Essentials",
    category: "Home Healthcare",
    description: "Demonstration listing for home healthcare supplies.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
  },
 ]; 
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
    const categories = [
    "All",
    "PPE",
    "Wound Care",
    "Medical Equipment",
    "Consumables",
    "Home Healthcare",
  ];

  const filteredProducts = demoProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, change) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const phoneNumber = "254759485697";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Compassionate Care Plans", href: "#care-plans" },
    { label: "Medical Supplies", href: "#supplies" },
    { label: "Health Hub", href: "#health-hub" },
    { label: "Partnerships & Investment", href: "#partnerships" },
    { label: "Contact Us", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">

      {/* HEADER */}
      <header className="site-header">
        <div className="header-container">

          <a href="#home" className="brand" onClick={closeMenu}>
            <img
              src="/logo.jpeg"
              alt="CICCIO MEDLINK - Serving You With Dignity, Compassion & Skill"
              className="brand-logo"
            />
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`main-navigation ${menuOpen ? "navigation-open" : ""}`}>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#cart" className="cart-link" aria-label="Shopping cart">
              🛒
            </a>

            <a href="#booking" className="header-book-button">
              Book a House Call
            </a>
          </div>

        </div>
      </header>

      {/* ANNOUNCEMENT BANNER */}
      <section className="announcement">
        <div className="announcement-content">
          <span className="announcement-label">HERE FOR YOU</span>

          <p>
            <strong>24/7 House Call Enquiries & Coordination.</strong>
            {" "}We are also preparing for our next chapter as we expand our
            healthcare presence. Visits are confirmed according to clinician
            availability and location.
          </p>

          <div className="announcement-actions">
            <a href="#booking" className="announcement-book">
              Book a House Call
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-whatsapp"
            >
              WhatsApp Our Team
            </a>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <main>
        <section className="hero-section" id="home">
          <div className="hero-container">

            <div className="hero-content">
              <span className="hero-eyebrow">
                WELCOME TO CICCIO MEDLINK
              </span>

              <h1>
                YOUR HEALTH DESERVES TO BE{" "}
                <span>CLOSER.</span>
              </h1>

              <div className="hero-line"></div>

              <h2>
                Connecting People, Healthcare Professionals and Essential
                Medical Services.
              </h2>

              <p className="hero-description">
                We are building a connected healthcare experience that brings
                compassionate professional support, home-based care and
                essential medical supplies closer to individuals and families.
              </p>

              <div className="hero-buttons">
                <a href="#booking" className="primary-button">
                  Book a House Call <span>→</span>
                </a>

                <a href="#services" className="secondary-button">
                  Explore Our Services
                </a>
              </div>

              <a href="#supplies" className="hero-shop-link">
                Explore Medical Supplies <span>→</span>
              </a>

              <div className="hero-trust">
                <span className="trust-icon">✦</span>
                <p>
                  Compassionate care. Professional support. Healthcare
                  without unnecessary barriers.
                </p>
              </div>
            </div>

            <div className="hero-image-area">
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85"
                  alt="Healthcare professional providing compassionate care"
                  className="hero-image"
                />

                <div className="image-caption">
                  <span className="caption-icon">✚</span>
                  <div>
                    <strong>Care That Comes Closer</strong>
                    <p>Serving people with dignity and compassion.</p>
                  </div>
                </div>
              </div>

              <div className="hero-decoration hero-decoration-one"></div>
              <div className="hero-decoration hero-decoration-two"></div>
            </div>

          </div>
        </section>

        {/* QUICK ACCESS */}
        <section className="quick-access">
          <div className="quick-access-container">

            <a href="#services" className="quick-card">
              <span className="quick-icon">✚</span>
              <span>
                <strong>Healthcare Services</strong>
                <small>Explore our care services</small>
              </span>
              <span className="quick-arrow">→</span>
            </a>

            <a href="#care-plans" className="quick-card">
              <span className="quick-icon">♡</span>
              <span>
                <strong>Compassionate Care</strong>
                <small>Support beyond consultations</small>
              </span>
              <span className="quick-arrow">→</span>
            </a>

            <a href="#supplies" className="quick-card">
              <span className="quick-icon">＋</span>
              <span>
                <strong>Medical Supplies</strong>
                <small>Explore healthcare essentials</small>
              </span>
              <span className="quick-arrow">→</span>
            </a>

            <a href="#contact" className="quick-card">
              <span className="quick-icon">☎</span>
              <span>
                <strong>Talk to Our Team</strong>
                <small>We are ready to assist</small>
              </span>
              <span className="quick-arrow">→</span>
            </a>

          </div>
        </section>

{/* ABOUT CICCIO MEDLINK */}
<section className="about-section" id="about">
  <div className="section-heading">
    <span className="section-label">WHO WE ARE</span>
    <h2>Healthcare Without Unnecessary Barriers.</h2>
    <p>
      Bringing compassionate healthcare, professional support
      and essential medical services closer to every individual
      and family.
    </p>
  </div>

  <div className="about-content">
    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"
        alt="Healthcare professionals working together"
      />
    </div>

    <div className="about-text">
      <span className="section-label">ABOUT CICCIO MEDLINK</span>

      <h3>Connecting People to Better Healthcare Experiences.</h3>

      <p>
        CICCIO MEDLINK is a healthcare company operating under
        CICCIO IMPERIAL LEGACY, established with a vision of making
        healthcare accessible, connected and inclusive for everyone.
      </p>

      <p>
        We understand that accessing healthcare can sometimes be
        challenging. Mobility difficulties, demanding schedules,
        distance from healthcare facilities and the need for
        family support can make receiving care difficult.
      </p>

      <p>
        Our approach brings together home-based professional
        healthcare services, compassionate care, healthcare
        coordination and essential medical supplies.
      </p>

      <p>
        Starting in Kenya, we are building towards a connected
        healthcare ecosystem that brings individuals, families,
        healthcare professionals, facilities, suppliers and
        technology closer together.
      </p>

      <a href="#services" className="primary-btn">
        Explore Our Services →
      </a>
    </div>
  </div>
</section>

{/* MISSION, VISION AND GUIDING BELIEF */}
<section className="purpose-section" id="mission-vision">
  <div className="section-heading">
    <span className="section-label">OUR PURPOSE</span>
    <h2>Driven by Purpose. Guided by Compassion.</h2>
    <p>
      Our commitment to building a more accessible and connected
      healthcare experience.
    </p>
  </div>

  <div className="purpose-grid">
    <div className="purpose-card">
      <span className="purpose-number">01</span>
      <h3>Our Mission</h3>
      <p>
        Making healthcare accessible, connected and inclusive
        for everyone.
      </p>
      <p>
        Our mission is to transform how individuals and families
        access, experience and manage healthcare by connecting
        them to trusted healthcare professionals, essential
        medical services, medical supplies and innovative
        digital health solutions.
      </p>
      <p>
        Through compassionate care, technology, strategic
        partnerships and patient-centred innovation, we strive
        to break barriers to healthcare access and bring quality
        healthcare closer to every community, regardless of
        location or circumstance.
      </p>
    </div>

    <div className="purpose-card">
      <span className="purpose-number">02</span>
      <h3>Our Vision</h3>
      <p>
        To build a globally connected healthcare ecosystem where
        quality healthcare has no boundaries.
      </p>
      <p>
        We envision a future where individuals and families can
        seamlessly access healthcare services, qualified
        professionals, essential medical supplies and reliable
        health information through one integrated healthcare
        network.
      </p>
      <p>
        Starting in Kenya, we aspire to expand across the World,
        connecting people, homes, healthcare facilities, medical
        professionals and technology into a more accessible,
        inclusive and patient-centred healthcare ecosystem.
      </p>
    </div>
  </div>

  <div className="guiding-belief">
    <span className="section-label">OUR GUIDING BELIEF</span>
    <h3>
      Healthcare should never be a privilege determined by
      where you live, what you know or how easily you can
      reach a hospital.
    </h3>
    <p>
      It should be accessible, connected and centred around
      every human life.
    </p>
  </div>
</section>

{/* OUR CORE VALUES */}
<section className="values-section">
  <div className="section-heading">
    <span className="section-label">WHAT DEFINES US</span>
    <h2>Our Core Values</h2>
    <p>
      The principles that guide our decisions, relationships
      and commitment to healthcare.
    </p>
  </div>

  <div className="values-grid">
    <div className="value-card">
      <h3>Compassion</h3>
      <p>Treating every individual with dignity, empathy and respect.</p>
    </div>

    <div className="value-card">
      <h3>Accessibility</h3>
      <p>Bringing healthcare closer to the people who need it.</p>
    </div>

    <div className="value-card">
      <h3>Professionalism</h3>
      <p>Promoting responsible, ethical and quality healthcare.</p>
    </div>

    <div className="value-card">
      <h3>Innovation</h3>
      <p>Using technology to improve how healthcare is accessed and managed.</p>
    </div>

    <div className="value-card">
      <h3>Integrity</h3>
      <p>Building trust through transparency and accountability.</p>
    </div>

    <div className="value-card">
      <h3>Inclusivity</h3>
      <p>Designing healthcare solutions that consider different communities and circumstances.</p>
    </div>

    <div className="value-card">
      <h3>Excellence</h3>
      <p>Continuously improving the quality and experience of care.</p>
    </div>
  </div>
</section>

{/* FEATURED HEALTHCARE SERVICES */}
<section className="services-section" id="services">
  <div className="section-heading">
    <span className="section-label">WHAT WE OFFER</span>
    <h2>Healthcare Services Designed Around You.</h2>
    <p>
      Professional healthcare support that brings compassionate
      care closer to individuals and families.
    </p>
  </div>

  <div className="services-grid">
    <div className="service-card">
      <img
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85"
        alt="Doctor providing healthcare consultation"
      />
      <div className="service-info">
        <span className="service-tag">HOME CONSULTATIONS</span>
        <h3>Doctor at Home</h3>
        <p>
          Access professional doctor consultations from the
          comfort of your home. Services include general
          assessments, clinical reviews, follow-up and
          referrals where necessary.
        </p>
        <a href="#booking">Book a Doctor at Home →</a>
      </div>
    </div>

    <div className="service-card">
      <img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85"
        alt="Professional nurse providing patient care"
      />
      <div className="service-info">
        <span className="service-tag">PROFESSIONAL CARE</span>
        <h3>Professional Nursing Care</h3>
        <p>
          Compassionate nursing support including wound
          assessment and dressing, post-hospital recovery,
          prescribed injections and clinically appropriate
          nursing procedures.
        </p>
        <a href="#booking">Request Nursing Care →</a>
      </div>
    </div>

    <div className="service-card">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85"
        alt="Caregiver supporting an elderly person"
      />
      <div className="service-info">
        <span className="service-tag">COMPASSIONATE SUPPORT</span>
        <h3>Home-Based and Elderly Care</h3>
        <p>
          Personal care, assistance with daily living,
          hygiene support, companionship and family
          care coordination for people who need
          additional support at home.
        </p>
        <a href="#booking">Enquire About Home Care →</a>
      </div>
    </div>

    <div className="service-card">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85"
        alt="Healthcare professional monitoring a patient"
      />
      <div className="service-info">
        <span className="service-tag">CONTINUITY OF CARE</span>
        <h3>Chronic Care Support</h3>
        <p>
          Support for individuals living with chronic
          conditions through follow-up coordination,
          health monitoring, medication adherence
          support and patient education.
        </p>
        <a href="#booking">Enquire About Chronic Care →</a>
      </div>
    </div>

    <div className="service-card">
      <img
        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85"
        alt="Nurse preparing wound dressing supplies"
      />
      <div className="service-info">
        <span className="service-tag">SPECIALISED SUPPORT</span>
        <h3>Wound Care</h3>
        <p>
          Professional wound assessment, cleaning,
          dressing and monitoring for post-surgical
          wounds and other wounds requiring appropriate
          clinical attention.
        </p>
        <a href="#booking">Request Wound Care →</a>
      </div>
    </div>

    <div className="service-card">
      <img
        src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=85"
        alt="Healthcare professional checking patient vital signs"
      />
      <div className="service-info">
        <span className="service-tag">BASIC HEALTH CHECKS</span>
        <h3>Point-of-Care Health Assessments</h3>
        <p>
          Selected health checks including blood pressure,
          blood glucose, temperature and oxygen saturation,
          subject to availability and clinical suitability.
        </p>
        <a href="#booking">Enquire About Assessments →</a>
      </div>
    </div>
  </div>

  <div className="services-note">
    <p>
      All healthcare services are subject to professional
      assessment, clinician availability, location and
      appropriate clinical scope.
    </p>
  </div>
</section>


{/* COMPASSIONATE CARE PLANS */}
<section className="care-plans-section" id="care-plans">
  <div className="section-heading">
    <span className="section-label">CARE THAT GOES BEYOND THE CONSULTATION</span>
    <h2>Compassionate Care Plans</h2>
    <p>
      Because some healthcare journeys require more than one visit.
      We support individuals and families with thoughtful,
      coordinated and compassionate care.
    </p>
  </div>

  <div className="care-intro">
    <div className="care-intro-text">
      <span className="section-label">CONTINUOUS SUPPORT</span>
      <h3>Care That Understands Your Needs.</h3>
      <p>
        Whether supporting an elderly loved one, assisting someone
        recovering after hospitalisation or helping a person manage
        a chronic condition, our approach puts dignity, comfort
        and individual needs first.
      </p>
      <p>
        Each care arrangement is discussed and developed according
        to the individual's needs, professional assessment and
        available healthcare resources.
      </p>
      <a href="#booking" className="primary-btn">
        Request a Care Plan →
      </a>
    </div>

    <div className="care-intro-image">
      <img
    src="https://www.raegracehomehealth.com/assets/post-discharge-Bn8hAZ2J.jpg"
    alt="Caregiver providing compassionate support to an elderly person at home"
      />
    </div>
  </div>

  <div className="care-options">
    <div className="care-option-card">
      <div className="care-icon">♡</div>
      <h3>Elderly Care Support</h3>
      <p>
        Compassionate assistance for older adults who may need
        additional support, comfort and companionship at home.
      </p>
      <ul>
        <li>Personal care assistance</li>
        <li>Daily living support</li>
        <li>Companionship and wellbeing check-ins</li>
        <li>Family care coordination</li>
      </ul>
      <a href="#booking">Enquire About Elderly Care →</a>
    </div>

    <div className="care-option-card">
      <div className="care-icon">✚</div>
      <h3>Recovery and Nursing Support</h3>
      <p>
        Structured home-based support for individuals recovering
        after hospitalisation, surgery or illness.
      </p>
      <ul>
        <li>Scheduled nursing visits</li>
        <li>Wound care and dressing support</li>
        <li>Recovery monitoring</li>
        <li>Care coordination and referrals</li>
      </ul>
      <a href="#booking">Request Recovery Support →</a>
    </div>

    <div className="care-option-card">
      <div className="care-icon">♡</div>
      <h3>Chronic Care Support</h3>
      <p>
        Ongoing support for individuals and families managing
        long-term health conditions.
      </p>
      <ul>
        <li>Health monitoring where appropriate</li>
        <li>Medication reminders</li>
        <li>Patient and family education</li>
        <li>Follow-up coordination</li>
      </ul>
      <a href="#booking">Enquire About Chronic Care →</a>
    </div>
  </div>

  <div className="care-includes">
    <div>
      <span className="section-label">PERSONALISED APPROACH</span>
      <h3>What Can a Care Plan Include?</h3>
      <p>
        Depending on individual needs and professional assessment,
        care arrangements may include:
      </p>
    </div>

    <div className="care-includes-list">
      <p>✓ Scheduled home visits</p>
      <p>✓ Nursing and caregiver support</p>
      <p>✓ Wellbeing check-ins</p>
      <p>✓ Medication reminders</p>
      <p>✓ Appropriate health monitoring</p>
      <p>✓ Family communication with consent</p>
      <p>✓ Companionship and referrals</p>
    </div>
  </div>

  <div className="care-cta">
    <h3>Your Loved Ones Deserve Thoughtful Care.</h3>
    <p>
      Let's discuss the support your family needs and explore
      an appropriate care arrangement.
    </p>
    <a href="#booking" className="care-cta-btn">
      Speak to Our Team →
    </a>
  </div>
</section>


{/* CICCIO MEDLINK MEDICAL SUPPLIES */}
<section className="supplies-section" id="supplies">
  <div className="supplies-hero">
    <div className="supplies-hero-content">
      <span className="section-label">CICCIO MEDLINK MEDICAL SUPPLIES</span>
      <h2>Essential Healthcare Supplies. Delivered With Care.</h2>
      <p>
        Explore medical supplies and healthcare essentials for
        individuals, families, healthcare professionals and
        institutions. We aim to make essential healthcare
        products easier to access.
      </p>

      <a
        href="https://wa.me/254759485697?text=Hello%20CICCIO%20MEDLINK%2C%20I%20would%20like%20to%20enquire%20about%20medical%20supplies."
        target="_blank"
        rel="noreferrer"
        className="supplies-main-btn"
      >
        Enquire About Products →
      </a>
    </div>

    <div className="supplies-hero-image">
      <img
        src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=85"
        alt="Medical supplies and healthcare essentials"
      />
    </div>
  </div>

  <div className="section-heading supplies-heading">
    <span className="section-label">EXPLORE OUR CATEGORIES</span>
    <h2>Healthcare Essentials in One Place.</h2>
    <p>
      Browse our medical supply categories and contact our team
      to enquire about specific products, specifications,
      quantities and availability.
    </p>
  </div>

  <div className="supplies-grid">
    <div className="supply-card">
      <img
        src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=900&q=85"
        alt="Protective healthcare gloves and medical masks"
      />
      <div className="supply-card-content">
        <span className="supply-category">CATEGORY 01</span>
        <h3>Personal Protective Equipment</h3>
        <p>
          Protective gloves, medical masks, gowns, caps,
          face shields and other approved protective supplies.
        </p>
        <a href="https://wa.me/254759485697?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20PPE%20supplies."
          target="_blank"
          rel="noreferrer"
        >
          Enquire About PPE →
        </a>
      </div>
    </div>

    <div className="supply-card">
      <img
        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85"
        alt="Medical wound care and dressing supplies"
      />
      <div className="supply-card-content">
        <span className="supply-category">CATEGORY 02</span>
        <h3>Wound Care and Dressings</h3>
        <p>
          Gauze, wound dressings, medical tapes, bandages,
          cotton wool and other wound-care essentials.
        </p>
        <a href="https://wa.me/254759485697?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20wound%20care%20supplies."
          target="_blank"
          rel="noreferrer"
        >
          Enquire About Dressings →
        </a>
      </div>
    </div>

    <div className="supply-card">
      <img
        src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=900&q=85"
        alt="Medical equipment for health monitoring"
      />
      <div className="supply-card-content">
        <span className="supply-category">CATEGORY 03</span>
        <h3>Medical Equipment</h3>
        <p>
          Blood pressure monitors, thermometers,
          pulse oximeters, glucometers, stethoscopes
          and other medical equipment.
        </p>
        <a href="https://wa.me/254759485697?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20medical%20equipment."
          target="_blank"
          rel="noreferrer"
        >
          Enquire About Equipment →
        </a>
      </div>
    </div>

    <div className="supply-card">
      <img
        src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=85"
        alt="Medical consumables and disposable healthcare supplies"
      />
      <div className="supply-card-content">
        <span className="supply-category">CATEGORY 04</span>
        <h3>General Medical Consumables</h3>
        <p>
          Alcohol swabs, disposable consumables,
          examination supplies and other approved
          healthcare essentials.
        </p>
        <a href="https://wa.me/254759485697?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20medical%20consumables."
          target="_blank"
          rel="noreferrer"
        >
          Enquire About Consumables →
        </a>
      </div>
    </div>

    <div className="supply-card">
      <img
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
        alt="Home healthcare and patient-care support"
      />
      <div className="supply-card-content">
        <span className="supply-category">CATEGORY 05</span>
        <h3>Home Healthcare Supplies</h3>
        <p>
          Home monitoring equipment, patient-care
          accessories, mobility aids and elderly-care
          essentials.
        </p>
        <a href="https://wa.me/254759485697?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20home%20healthcare%20supplies."
          target="_blank"
          rel="noreferrer"
        >
          Enquire About Home Supplies →
        </a>
      </div>
    </div>
  </div>

  <div className="supplies-availability">
    <div>
      <span className="section-label">PRODUCT ENQUIRIES</span>
      <h3>Looking for a Specific Medical Product?</h3>
      <p>
        Contact our team with the product name, specifications
        and quantity you need. We will assist with availability,
        pricing and delivery arrangements.
      </p>
    </div>

    <a
      href="https://wa.me/254759485697?text=Hello%20CICCIO%20MEDLINK%2C%20I%20would%20like%20to%20make%20a%20medical%20supplies%20enquiry."
      target="_blank"
      rel="noreferrer"
      className="supplies-main-btn"
    >
      WhatsApp Our Team →
    </a>
  </div>

  <div className="bulk-order-section">
    <div className="bulk-order-icon">✚</div>
    <div className="bulk-order-content">
      <span className="section-label">FOR ORGANISATIONS AND INSTITUTIONS</span>
      <h3>Bulk Orders and Institutional Enquiries</h3>
      <p>
        Healthcare facilities, clinics, hospitals, organisations
        and other institutions can contact us for bulk product
        enquiries and quotation requests.
      </p>
    </div>
    <a
      href="https://wa.me/254759485697?text=Hello%20CICCIO%20MEDLINK%2C%20I%20would%20like%20to%20request%20a%20bulk%20medical%20supplies%20quotation."
      target="_blank"
      rel="noreferrer"
      className="bulk-order-btn"
    >
      Request a Quotation →
    </a>
  </div>
</section>

<section className="online-shop-section" id="online-shop">
  <div className="shop-heading">
    <span className="section-label">CICCIO MEDLINK MEDICAL SUPPLIES</span>
    <h2>Explore Our Online Shop</h2>
    <p>
      Browse our demonstration catalogue of healthcare supplies.
      Our confirmed products, prices and ordering services will be
      published once the catalogue is approved.
    </p>
  </div>

  <div className="demo-notice">
    <strong>DEMONSTRATION SHOP</strong>
    <p>
      These product listings are for website development and testing
      only. They are not available for purchase. Prices, stock and
      checkout will be activated after management approval.
    </p>
  </div>

  <div className="shop-toolbar">
    <input
      type="text"
      placeholder="Search medical supplies..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />

    <button
      className="cart-toggle"
      onClick={() => setShowCart(!showCart)}
    >
      🛒 Demo Cart ({cartCount})
    </button>
  </div>

  <div className="category-filters">
    {categories.map((category) => (
      <button
        key={category}
        className={
          selectedCategory === category ? "active-filter" : ""
        }
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>

  <div className="shop-products-grid">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <div className="shop-product-card" key={product.id}>
          <div className="shop-product-image">
            <img src={product.image} alt={product.name} />
            <span>DEMO ONLY</span>
          </div>

          <div className="shop-product-info">
            <small>{product.category}</small>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-unavailable">
              Not available for purchase
            </p>

            <button onClick={() => addToCart(product)}>
              Add to Demo Cart
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="no-products">
        No demonstration products match your search.
      </p>
    )}
  </div>

  {showCart && (
    <div className="demo-cart-panel" id="cart">
      <div className="cart-heading">
        <h3>Your Demo Cart</h3>
        <button onClick={() => setShowCart(false)}>
          Close
        </button>
      </div>

      {cart.length === 0 ? (
        <p>Your demonstration cart is currently empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="demo-cart-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>Demonstration item only</p>
              </div>

              <div className="cart-quantity-controls">
                <button
                  onClick={() => updateCartQuantity(item.id, -1)}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateCartQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-cart-item"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <p className="cart-demo-warning">
            This is a demonstration cart. Orders and payments are
            not enabled.
          </p>
        </>
      )}
    </div>
  )}

  <div className="shop-contact">
    <h3>Looking for a specific medical supply?</h3>
    <p>
      Contact our team to enquire about available products and
      institutional supply requirements.
    </p>

    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Hello CICCIO MEDLINK, I would like to enquire about medical supplies."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      Enquire on WhatsApp
    </a>
  </div>
</section>


{/* CICCIO MEDLINK DIFFERENCE */}
<section className="difference-section" id="difference">
  <div className="difference-heading">
    <span className="section-label">THE CICCIO MEDLINK DIFFERENCE</span>
    <h2>More Than Healthcare. A Connected Healthcare Ecosystem.</h2>
    <p>
      We believe healthcare should work together. Our approach
      connects individuals and families with healthcare professionals,
      home-based care, medical supplies and future digital health
      solutions.
    </p>
  </div>

  <div className="ecosystem-grid">
    <div className="ecosystem-card">
      <div className="ecosystem-icon">👨‍👩‍👧‍👦</div>
      <h3>People & Families</h3>
      <p>
        Putting individuals, families and their healthcare needs
        at the centre of everything we do.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="ecosystem-icon">🩺</div>
      <h3>Healthcare Professionals</h3>
      <p>
        Connecting people with qualified healthcare professionals
        and compassionate care.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="ecosystem-icon">🏡</div>
      <h3>Home-Based Healthcare</h3>
      <p>
        Bringing appropriate healthcare services and support
        closer to individuals and families.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="ecosystem-icon">🏥</div>
      <h3>Healthcare Facilities</h3>
      <p>
        Building opportunities for collaboration and better
        healthcare coordination.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="ecosystem-icon">💊</div>
      <h3>Medical Supplies</h3>
      <p>
        Supporting access to essential medical equipment,
        consumables and home healthcare supplies.
      </p>
    </div>

    <div className="ecosystem-card">
      <div className="ecosystem-icon">💻</div>
      <h3>Digital Health & Technology</h3>
      <p>
        Developing a future connected digital health experience
        that can improve access and coordination.
      </p>
    </div>
  </div>
</section>

{/* OUR FUTURE DIRECTION */}
<section className="future-section" id="future">
  <div className="future-content">
    <span className="section-label">OUR FUTURE DIRECTION</span>

    <h2>Building a More Connected Healthcare Future.</h2>

    <p>
      CICCIO MEDLINK is growing with a long-term vision of connecting
      people, healthcare professionals, medical services, facilities
      and technology into an accessible healthcare ecosystem.
    </p>

    <div className="future-list">
      <div>
        <span>01</span>
        <div>
          <h3>Expanding Home Healthcare</h3>
          <p>
            Strengthening access to professional home-based healthcare
            and compassionate care services.
          </p>
        </div>
      </div>

      <div>
        <span>02</span>
        <div>
          <h3>Physical Healthcare Facilities</h3>
          <p>
            Working towards a wider network of healthcare facilities
            and service locations.
          </p>
        </div>
      </div>

      <div>
        <span>03</span>
        <div>
          <h3>Connected Digital Health</h3>
          <p>
            Exploring digital solutions for healthcare access,
            coordination and patient support.
          </p>
        </div>
      </div>

      <div>
        <span>04</span>
        <div>
          <h3>Medical Supplies Network</h3>
          <p>
            Developing opportunities to expand access to essential
            healthcare supplies and equipment.
          </p>
        </div>
      </div>

      <div>
        <span>05</span>
        <div>
          <h3>Regional & Global Partnerships</h3>
          <p>
            Building strategic relationships that can support
            responsible growth beyond Kenya.
          </p>
        </div>
      </div>
    </div>

    <p className="future-note">
      These are long-term development ambitions. They should not be
      understood as services or facilities already operational.
    </p>
  </div>
</section>


{/* HEALTH HUB */}
<section className="health-hub-section" id="health-hub">
  <div className="health-hub-heading">
    <span className="section-label">CICCIO MEDLINK HEALTH HUB</span>
    <h2>Knowledge That Supports Better Health.</h2>
    <p>
      Explore health information, educational resources and
      healthcare developments designed to empower individuals,
      families and communities to make informed health decisions.
    </p>
  </div>

  <div className="health-hub-feature">
    <div className="health-hub-image">
      <img
        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=85"
        alt="Healthcare professional discussing health information"
      />
    </div>

    <div className="health-hub-feature-content">
      <span>HEALTH EDUCATION</span>
      <h3>Your Journey Towards Better Health Starts With Knowledge.</h3>
      <p>
        Understanding health conditions, prevention, wellness and
        available healthcare options can help individuals and
        families make more informed decisions.
      </p>
      <a href="#health-categories" className="btn btn-primary">
        Explore Health Topics
      </a>
    </div>
  </div>

  <div className="health-categories" id="health-categories">
    <div className="health-category-card">
      <span>01</span>
      <h3>Health Facts</h3>
      <p>
        Understand important health facts and common healthcare
        questions through accessible educational information.
      </p>
    </div>

    <div className="health-category-card">
      <span>02</span>
      <h3>Disease Awareness</h3>
      <p>
        Learn about common health conditions, warning signs,
        prevention and the importance of professional care.
      </p>
    </div>

    <div className="health-category-card">
      <span>03</span>
      <h3>Medical News</h3>
      <p>
        Follow relevant healthcare developments, medical
        announcements and emerging health trends.
      </p>
    </div>

    <div className="health-category-card">
      <span>04</span>
      <h3>Medical History</h3>
      <p>
        Discover important milestones and developments that
        have shaped modern healthcare.
      </p>
    </div>

    <div className="health-category-card">
      <span>05</span>
      <h3>Scientific Discoveries</h3>
      <p>
        Explore medical research, scientific discoveries and
        innovations contributing to healthcare progress.
      </p>
    </div>

    <div className="health-category-card">
      <span>06</span>
      <h3>Preventive Health</h3>
      <p>
        Discover educational resources about healthy habits,
        screening, prevention and general wellbeing.
      </p>
    </div>

    <div className="health-category-card">
      <span>07</span>
      <h3>Family Health</h3>
      <p>
        Access educational information supporting the health
        and wellbeing of individuals and families.
      </p>
    </div>

    <div className="health-category-card">
      <span>08</span>
      <h3>Elderly Care</h3>
      <p>
        Learn about ageing, compassionate support, safety
        and wellbeing for older adults.
      </p>
    </div>

    <div className="health-category-card">
      <span>09</span>
      <h3>Wellness Education</h3>
      <p>
        Explore general wellbeing, healthy lifestyles and
        practical health education.
      </p>
    </div>

    <div className="health-category-card">
      <span>10</span>
      <h3>Healthcare Innovation</h3>
      <p>
        Discover how technology, innovation and new approaches
        are shaping the future of healthcare.
      </p>
    </div>
  </div>

  <div className="health-hub-disclaimer">
    <strong>Medical Information Disclaimer</strong>
    <p>
      Information shared through the CICCIO MEDLINK Health Hub
      is intended for general educational purposes only. It is
      not a substitute for professional medical advice,
      diagnosis or treatment. Always consult a qualified
      healthcare professional about individual health concerns.
    </p>
  </div>
</section>


{/* PARTNERSHIPS & INVESTMENT */}
<section
  className="partnerships-section"
  id="partnerships"
>
  <div className="partnerships-heading">
    <span className="section-label">
      PARTNERSHIPS & INVESTMENT
    </span>

    <h2>
      Together, We Can Build a More Connected Healthcare Future.
    </h2>

    <p>
      CICCIO MEDLINK welcomes meaningful partnerships and
      investment opportunities that support accessible,
      inclusive and innovative healthcare.
    </p>
  </div>

  <div className="partnerships-intro">
    <div className="partnerships-intro-content">
      <h3>Growing Through Collaboration and Innovation.</h3>

      <p>
        Our long-term vision is to develop an integrated
        healthcare ecosystem connecting individuals, families,
        healthcare professionals, facilities, medical suppliers
        and technology.
      </p>

      <p>
        We recognise that achieving this vision requires
        collaboration, expertise, infrastructure, innovation
        and strategic investment.
      </p>

      <p>
        We welcome conversations with organisations and
        individuals who share our commitment to improving
        healthcare accessibility and experience.
      </p>

      <a href="#partnership-enquiry" className="btn btn-primary">
        Explore Partnership Opportunities
      </a>
    </div>

    <div className="partnerships-image">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85"
        alt="Professionals collaborating during a business meeting"
      />
    </div>
  </div>

  <div className="partnership-opportunities">
    <div className="partnership-card">
      <span>01</span>
      <h3>Investment Opportunities</h3>
      <p>
        Engage with us on opportunities supporting healthcare
        infrastructure, service expansion and long-term
        ecosystem development.
      </p>
    </div>

    <div className="partnership-card">
      <span>02</span>
      <h3>Healthcare Partnerships</h3>
      <p>
        Explore collaboration with healthcare professionals,
        hospitals, clinics and other healthcare organisations.
      </p>
    </div>

    <div className="partnership-card">
      <span>03</span>
      <h3>Medical Supply Partnerships</h3>
      <p>
        Connect with us on medical equipment, healthcare
        consumables, distribution and supply opportunities.
      </p>
    </div>

    <div className="partnership-card">
      <span>04</span>
      <h3>Technology Partnerships</h3>
      <p>
        Explore digital health, healthcare technology,
        software development and innovation opportunities.
      </p>
    </div>

    <div className="partnership-card">
      <span>05</span>
      <h3>Institutional Collaboration</h3>
      <p>
        Engage in opportunities with institutions,
        organisations and development partners interested
        in healthcare accessibility.
      </p>
    </div>

    <div className="partnership-card">
      <span>06</span>
      <h3>Strategic Business Partnerships</h3>
      <p>
        Build relationships that support responsible growth,
        operational development and wider healthcare access.
      </p>
    </div>
  </div>

  <div className="partnership-enquiry" id="partnership-enquiry">
    <div className="partnership-enquiry-heading">
      <span className="section-label">
        LET'S CONNECT
      </span>

      <h2>Start a Partnership Conversation.</h2>

      <p>
        Tell us about your organisation, investment interest
        or potential collaboration. Our team will get in touch.
      </p>
    </div>

    <form
      className="partnership-form"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const message = `
PARTNERSHIP & INVESTMENT ENQUIRY

Name: ${formData.get("name")}
Organisation: ${formData.get("organisation")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Country: ${formData.get("country")}
Enquiry Type: ${formData.get("enquiryType")}
Area of Interest: ${formData.get("interest")}

Message:
${formData.get("message")}
        `;

        window.open(
          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }}
    >
      <div className="partnership-form-grid">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Organisation / Company</label>
          <input
            type="text"
            name="organisation"
            placeholder="Enter organisation name"
          />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
          />
        </div>

        <div className="form-group">
          <label>Type of Enquiry *</label>
          <select name="enquiryType" required defaultValue="">
            <option value="" disabled>
              Select enquiry type
            </option>
            <option>Investment</option>
            <option>Healthcare Partnership</option>
            <option>Medical Supply Partnership</option>
            <option>Technology Partnership</option>
            <option>Institutional Collaboration</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Area of Interest</label>
        <input
          type="text"
          name="interest"
          placeholder="Briefly describe your area of interest"
        />
      </div>

      <div className="form-group">
        <label>Your Message *</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your proposed partnership or investment interest..."
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Partnership Enquiry
      </button>

      <p className="form-note">
        Submitting this form opens WhatsApp with your enquiry
        prepared for sending. It does not automatically store
        or submit information to CICCIO MEDLINK.
      </p>
    </form>
  </div>
</section>


{/* WHY CHOOSE CICCIO MEDLINK */}
<section className="why-choose-section" id="why-choose">
  <div className="why-choose-heading">
    <span className="section-label">WHY CHOOSE CICCIO MEDLINK</span>

    <h2>Healthcare With People at the Heart of Everything.</h2>

    <p>
      We are building a healthcare experience centred on
      accessibility, compassion, professionalism and meaningful
      connections between people and healthcare services.
    </p>
  </div>

  <div className="why-choose-content">
    <div className="why-choose-image">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85"
        alt="Healthcare professional supporting a patient"
      />
    </div>

    <div className="why-choose-list">
      <div className="why-choose-item">
        <span>01</span>
        <div>
          <h3>Convenient Healthcare Access</h3>
          <p>
            Home-based healthcare services that help bring
            appropriate care closer to individuals and families.
          </p>
        </div>
      </div>

      <div className="why-choose-item">
        <span>02</span>
        <div>
          <h3>Compassionate and Patient-Centred Care</h3>
          <p>
            Respecting every person's dignity, needs,
            circumstances and preferences.
          </p>
        </div>
      </div>

      <div className="why-choose-item">
        <span>03</span>
        <div>
          <h3>Professional Healthcare Support</h3>
          <p>
            Promoting responsible healthcare delivery through
            appropriately qualified professionals.
          </p>
        </div>
      </div>

      <div className="why-choose-item">
        <span>04</span>
        <div>
          <h3>Family-Focused Support</h3>
          <p>
            Recognising the important role families play in
            supporting health, recovery and wellbeing.
          </p>
        </div>
      </div>

      <div className="why-choose-item">
        <span>05</span>
        <div>
          <h3>Continuity and Follow-Up</h3>
          <p>
            Encouraging appropriate follow-up, care coordination
            and ongoing support according to individual needs.
          </p>
        </div>
      </div>

      <div className="why-choose-item">
        <span>06</span>
        <div>
          <h3>Connected Healthcare Vision</h3>
          <p>
            Working towards a future that connects people,
            professionals, medical supplies and digital health.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="why-choose-bottom">
    <h3>Healthcare Should Be Accessible, Connected and Human.</h3>
    <p>
      CICCIO MEDLINK — Serving You With Dignity, Compassion & Skill.
    </p>
    <a href="#booking" className="btn btn-primary">
      Book a House Call
    </a>
  </div>
</section>


{/* WHERE WE SERVE */}
<section className="coverage-section" id="coverage">
  <div className="coverage-heading">
    <span className="section-label">WHERE WE SERVE</span>

    <h2>Healthcare That Comes Closer to You.</h2>

    <p>
      CICCIO MEDLINK currently coordinates house-call and
      home-based healthcare enquiries across selected areas
      of Nairobi, Kenya.
    </p>
  </div>

  <div className="coverage-content">
    <div className="coverage-map">
      <iframe
        title="CICCIO MEDLINK Nairobi service coverage areas"
        src="https://www.google.com/maps?q=Westlands%2C%20Nairobi%2C%20Kenya&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>

    <div className="coverage-details">
      <h3>Our Nairobi Coverage Areas</h3>

      <p>
        Our house-call and home-care enquiries cover the
        following neighbourhoods:
      </p>

      <div className="coverage-area-list">
        <div><span>01</span> Westlands</div>
        <div><span>02</span> Parklands</div>
        <div><span>03</span> Riverside</div>
        <div><span>04</span> Kilimani</div>
        <div><span>05</span> Kileleshwa</div>
        <div><span>06</span> Karen</div>
        <div><span>07</span> Muthaiga</div>
        <div><span>08</span> Runda</div>
        <div><span>09</span> Lavington</div>
      </div>

      <div className="coverage-note">
        <strong>Important Service Information</strong>
        <p>
          These are service coverage areas, not nine physical
          branches. Every house-call request is confirmed
          according to the specific location, clinician
          availability and nature of the service required.
        </p>
      </div>

      <a href="#booking" className="btn btn-primary">
        Book a House Call
      </a>
    </div>
  </div>

  <div className="coverage-bottom">
    <h3>Are You Within Our Service Areas?</h3>
    <p>
      Contact our team to confirm availability and arrange
      appropriate healthcare support.
    </p>

    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        "Hello CICCIO MEDLINK, I would like to confirm house-call availability in my area."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      WhatsApp Our Team
    </a>
  </div>
</section>


{/* CONTACT US & HOUSE CALL BOOKING */}
<section className="contact-section" id="contact">
  <div className="contact-heading">
    <span className="section-label">CONTACT CICCIO MEDLINK</span>
    <h2>We Are Here to Bring Healthcare Closer.</h2>
    <p>
      Have a question or need healthcare support at home?
      Reach out to our team. We will be happy to assist you.
    </p>
  </div>

  <div className="contact-content">
    <div className="contact-details">
      <h3>Get in Touch With Us</h3>
      <p>
        Connect with CICCIO MEDLINK for house-call enquiries,
        healthcare services, medical supplies and partnerships.
      </p>

      <div className="contact-info-item">
        <span>Phone & WhatsApp</span>
        <a href="tel:+254759485697">+254 759 485 697</a>
      </div>

      <div className="contact-info-item">
        <span>General Enquiries</span>
        <a href="mailto:info.cicciomedlink@gmail.com">
          info.cicciomedlink@gmail.com
        </a>
      </div>

      <div className="contact-info-item">
        <span>Careers & Opportunities</span>
        <a href="mailto:hr.cicciomedlink01@gmail.com">
          hr.cicciomedlink01@gmail.com
        </a>
      </div>

      <div className="contact-info-item">
        <span>Location</span>
        <p>Nairobi, Kenya</p>
      </div>

      <div className="contact-info-item">
        <span>Website</span>
        <a href="https://www.cicciomedlink.co.ke" target="_blank" rel="noreferrer">
          www.cicciomedlink.co.ke
        </a>
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          "Hello CICCIO MEDLINK, I would like to make an enquiry."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary contact-whatsapp"
      >
        WhatsApp Our Team
      </a>
    </div>

    <div className="booking-form-container" id="booking">
      <h3>Request a House Call</h3>
      <p>
        Complete the form below and our team will receive your
        enquiry through WhatsApp.
      </p>

      <form
        className="booking-form"
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const message = `
HOUSE CALL ENQUIRY - CICCIO MEDLINK

Full Name: ${formData.get("fullName")}
Phone Number: ${formData.get("phone")}
Email: ${formData.get("email")}
Service Required: ${formData.get("service")}
Preferred Location: ${formData.get("location")}
Message: ${formData.get("message")}

Please contact me regarding this enquiry.
          `;

          window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <div className="booking-form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Required</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>Select a service</option>
              <option value="Doctor at Home">Doctor at Home</option>
              <option value="Professional Nursing Care">Professional Nursing Care</option>
              <option value="Elderly and Home-Based Care">Elderly and Home-Based Care</option>
              <option value="Chronic Care Support">Chronic Care Support</option>
              <option value="Wound Care">Wound Care</option>
              <option value="Health Assessments">Health Assessments</option>
              <option value="Medical Supplies">Medical Supplies</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Your Location / Neighbourhood</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Westlands, Kilimani, Karen"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us how we can assist you."
            required
          ></textarea>
        </div>

        <p className="booking-form-note">
          Please do not include sensitive medical information in
          this general enquiry form. House-call visits are confirmed
          according to clinician availability and location.
        </p>

        <button type="submit" className="btn btn-primary">
          Send House Call Enquiry
        </button>
      </form>
    </div>
  </div>
</section>
</main>

{/* PROFESSIONAL WEBSITE FOOTER */}
<footer className="main-footer">
  <div className="footer-content">

    {/* BRAND INFORMATION */}
    <div className="footer-brand">
      <img src="/logo.jpeg" alt="CICCIO MEDLINK Logo" />

      <h3>CICCIO MEDLINK</h3>
      <p className="footer-parent">Under CICCIO IMPERIAL LEGACY</p>

      <p className="footer-tagline">
        Serving You With Dignity, Compassion & Skill.
      </p>

      <p className="footer-description">
        Connecting people, healthcare professionals and essential
        medical services through compassionate care, innovation
        and accessible healthcare solutions.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-column">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#services">Our Services</a>
      <a href="#care-plans">Compassionate Care Plans</a>
      <a href="#supplies">Medical Supplies</a>
      <a href="#health-hub">Health Hub</a>
      <a href="#partnerships">Partnerships & Investment</a>
      <a href="#contact">Contact Us</a>
    </div>

    {/* CUSTOMER SUPPORT */}
    <div className="footer-column">
      <h3>Customer Support</h3>

      <a href="tel:+254759485697">+254 759 485 697</a>

      <a href="mailto:info.cicciomedlink@gmail.com">
        General Enquiries
      </a>

      <a href="mailto:hr.cicciomedlink01@gmail.com">
        Careers & Opportunities
      </a>

      <p>Nairobi, Kenya</p>

      <a href="https://www.cicciomedlink.co.ke" target="_blank" rel="noreferrer">
        www.cicciomedlink.co.ke
      </a>
    </div>

    {/* SOCIAL MEDIA */}
    <div className="footer-column">
      <h3>Connect With Us</h3>

      <a
        href="https://www.instagram.com/_ciccio_medlink?rpxt=MTd5b3p5cHVyZTYydA=="
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>

      <a
        href="https://www.tiktok.com/@cicciomedlink?_r=1&_t=ZS-9BMoxmMQ8NI"
        target="_blank"
        rel="noreferrer"
      >
        TikTok
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61595502365671"
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>

      <a href="#booking">Book a House Call</a>
      <a href="#online-shop">Explore Medical Supplies</a>
    </div>

  </div>

  {/* FOOTER BRAND MESSAGE */}
  <div className="footer-brand-message">
    <h3>Connecting Healthcare. Empowering People.</h3>
    <p>Building a Healthier World.</p>
  </div>

  {/* LEGAL INFORMATION */}
  <div className="footer-legal">
    <p>Privacy Policy</p>
    <p>Terms and Conditions</p>
    <p>Medical Information Disclaimer</p>
    <p>Shipping and Returns</p>
  </div>

  {/* COPYRIGHT */}
  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} CICCIO MEDLINK.
      All Rights Reserved.
    </p>

    <p>Under CICCIO IMPERIAL LEGACY | Nairobi, Kenya</p>
  </div>
</footer>


      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with CICCIO MEDLINK on WhatsApp"
      >
        <span>☏</span>
        <small>Chat with us</small>
      </a>

    </div>
  );
}

export default App;
