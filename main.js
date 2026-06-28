'use strict';

// --- Services Rates Dataset (48 records) ---
const SERVICES_DATA = [
  // Forms & IDs
  { name: "Online Form Filling", price: "₹50–200", cat: "forms" },
  { name: "Government Scheme Registration", price: "₹100–300", cat: "forms" },
  { name: "Scholarship Form Fill-up", price: "₹100–300", cat: "forms" },
  { name: "College Admission Forms", price: "₹100–300", cat: "forms" },
  { name: "Job Application Forms", price: "₹50–200", cat: "forms" },
  { name: "Passport Application Assistance", price: "₹150–300", cat: "forms" },
  { name: "Voter ID Application/Correction", price: "₹100–200", cat: "forms" },
  { name: "Driving Licence Application Assistance", price: "₹100–300", cat: "forms" },
  { name: "Birth/Death Certificate Application Assistance", price: "₹100–300", cat: "forms" },
  { name: "Income/Caste/Residence Certificate Application", price: "₹100–300", cat: "forms" },
  { name: "Ration Card Application Assistance", price: "₹100–300", cat: "forms" },
  { name: "e-Shram Registration Assistance", price: "₹100–200", cat: "forms" },
  { name: "Labour Card Assistance", price: "₹100–300", cat: "forms" },
  { name: "Ayushman Bharat Registration Assistance", price: "₹100–200", cat: "forms" },
  { name: "PM-KISAN Registration Assistance", price: "₹100–300", cat: "forms" },

  // EPF & Portal Desk
  { name: "EPF (PF) Money Claim Assistance", price: "₹200–500", cat: "epf" },
  { name: "EPF KYC Update Assistance", price: "₹100–300", cat: "epf" },
  { name: "UAN Activation", price: "₹100–200", cat: "epf" },
  { name: "EPF Passbook Download", price: "₹50–100", cat: "epf" },
  { name: "Pension-related EPFO Assistance", price: "₹150–300", cat: "epf" },
  { name: "PAN–Aadhaar Linking Assistance", price: "₹100–200 + official fee", cat: "epf" },
  { name: "PAN Card (New/Correction) Assistance", price: "₹150–300 + official fee", cat: "epf" },
  { name: "Instant e-PAN Download Assistance", price: "₹50–100", cat: "epf" },
  { name: "Aadhaar PVC Download/Print Assistance", price: "₹30–100", cat: "epf" },
  { name: "Aadhaar Address Update Assistance*", price: "₹100–200 + official fee", cat: "epf" },
  { name: "DigiLocker Setup", price: "₹50–100", cat: "epf" },
  { name: "ABHA Health ID Creation", price: "₹50–100", cat: "epf" },

  // Utilities & Tickets
  { name: "Railway Ticket Booking", price: "₹30–80 service charge", cat: "utility" },
  { name: "Bus Ticket Booking", price: "₹20–50 service charge", cat: "utility" },
  { name: "Flight Ticket Booking", price: "₹200–500 service charge", cat: "utility" },
  { name: "Hotel Booking", price: "₹100–300 service charge", cat: "utility" },
  { name: "Electricity Bill Payment", price: "₹20–50", cat: "utility" },
  { name: "Mobile/DTH Recharge", price: "₹10–30", cat: "utility" },
  { name: "Document Typing", price: "₹30–60/page", cat: "utility" },
  { name: "Data Entry", price: "₹100–300/hour", cat: "utility" },
  { name: "PDF Merge/Split/Compress", price: "₹20–50", cat: "utility" },
  { name: "Word ↔ PDF Conversion", price: "₹20–50", cat: "utility" },
  { name: "Image to PDF", price: "₹20–50", cat: "utility" },
  { name: "Email Creation", price: "₹50–100", cat: "utility" },
  { name: "Resume Creation", price: "₹200–800", cat: "utility" },
  { name: "Resume Update", price: "₹100–300", cat: "utility" },
  { name: "Cover Letter", price: "₹100–300", cat: "utility" },

  // Tech & Design
  { name: "GST Registration Assistance", price: "₹500–1500", cat: "business" },
  { name: "MSME/Udyam Registration Assistance", price: "₹200–500", cat: "business" },
  { name: "Business Logo Design", price: "₹300–1500", cat: "business" },
  { name: "Canva Poster/Flyer", price: "₹200–1000", cat: "business" },
  { name: "Portfolio Website", price: "₹1000–5000", cat: "business" },
  { name: "Basic Website Deployment", price: "₹500–1500", cat: "business" }
];

// --- Bulletin & Advisory Posts Dataset ---
const BULLETIN_POSTS_DATA = [
  {
    id: 1,
    category: "EPF Portal Support",
    date: "June 2026",
    title: "EPF Withdrawal Guide: Steps to Avoid Claim Rejections",
    excerpt: "EPF withdrawals get rejected due to tiny details. Here is how to ensure your profile, bank credentials, and mobile fields match the UAN requirements.",
    content: `
      <div class="bulletin-article-meta">EPF Portal Support · June 2026</div>
      <h3 class="bulletin-article-title">EPF Withdrawal Guide: Steps to Avoid Claim Rejections</h3>
      <div class="bulletin-article-content">
        <p>EPF (Employees' Provident Fund) withdrawals are highly sensitive transactions. Over 35% of online withdrawal claims get rejected by the EPFO portal due to easily preventable documentation discrepancies. If you are planning to file a claim, verify these steps before submitting.</p>
        
        <h4>1. Critical Data Matching</h4>
        <p>Your Name, Father's Name, and Date of Birth (DOB) must match exactly across three critical nodes: your Aadhaar card, your UAN Member Profile, and your bank account. Even a one-letter spelling mismatch or middle-name omission will trigger an automatic rejection.</p>

        <h4>2. Bank Account & Cheque Verification</h4>
        <p>When applying online, you must upload a scanned copy of a cancelled cheque or bank passbook. Ensure the following criteria are met:</p>
        <ul>
          <li>Your Name must be clearly printed on the cheque leaf. Passbooks must contain a clear, stamped photograph.</li>
          <li>The bank account number and IFSC code must be completely readable in the scan.</li>
          <li>Upload only high-resolution JPG/PDF formats (between 100KB and 500KB).</li>
        </ul>

        <blockquote>
          "A major reason for claim rejections is uploading blurry passbook photos. Scan documents using proper high-resolution flatbed scanners, not phone cameras under dim lighting."
        </blockquote>

        <h4>3. Active Mobile Linkages</h4>
        <p>Since the EPFO portal uses multi-stage OTP confirmations, your Aadhaar must be linked to your active mobile number. Ensure your mobile number matches on both the EPFO profile and your Aadhaar database to receive verification OTPs without delay.</p>
      </div>
    `
  },
  {
    id: 2,
    category: "Academic Admissions",
    date: "June 2026",
    title: "WBSU Admissions: Student Pre-requisite Checklist",
    excerpt: "A complete guide to college admission forms under WBSU. Learn which documents to carry to ensure smooth submissions.",
    content: `
      <div class="bulletin-article-meta">Academic Admissions · June 2026</div>
      <h3 class="bulletin-article-title">WBSU Admissions: Student Pre-requisite Checklist</h3>
      <div class="bulletin-article-content">
        <p>The online admission cycle for undergraduate courses under West Bengal State University (WBSU) is highly competitive. With portal servers experiencing high loads during deadlines, filling your form accurately on the first attempt is critical. Prepare these documents beforehand.</p>

        <h4>1. Essential Academic Credentials</h4>
        <p>Have physical copies of your Secondary (Class 10) Admit Card (for Age Proof) and Higher Secondary (Class 12) Marksheet. Double-check that your total marks, subjects, and school details are entered exactly as they appear on your official marksheets.</p>

        <h4>2. Image & Signature Format Rules</h4>
        <p>Portals enforce strict size thresholds for photo and signature uploads:</p>
        <ul>
          <li><strong>Passport Photo:</strong> Color photograph on white background (sized between 10KB and 50KB).</li>
          <li><strong>Signature:</strong> Written in black ink on clean white paper (sized between 5KB and 20KB).</li>
        </ul>

        <blockquote>
          "We offer professional resizing and scanning desks to ensure your photos, marksheet scans, and signatures fit the university portal parameters exactly, avoiding file-size upload failures."
        </blockquote>

        <h4>3. Caste & Income Certificates</h4>
        <p>If you are claiming SC, ST, OBC, or EWS quotas, the reservation certificate must be issued by a competent authority in West Bengal. Ensure the certificate holder's name matches the applicant's name exactly. Stale income certificates are not accepted for fee concessions; get a fresh local certificate.</p>
      </div>
    `
  },
  {
    id: 3,
    category: "Government IDs",
    date: "June 2026",
    title: "Aadhaar Card Updates: Biometrics vs Address Update Guide",
    excerpt: "Understand the difference between online self-updates and biometric center updates to save time and money.",
    content: `
      <div class="bulletin-article-meta">Government IDs · June 2026</div>
      <h3 class="bulletin-article-title">Aadhaar Card Updates: Biometrics vs Address Update Guide</h3>
      <div class="bulletin-article-content">
        <p>Aadhaar card updates are categorized into two types: Demographic updates (name, DOB, address, gender) and Biometric updates (fingerprints, iris scan, facial photograph). Depending on what you need to change, the procedure and center requirements differ.</p>

        <h4>1. Demographic Online Address Updates</h4>
        <p>If you only need to update your residential address, this can be done online. You must provide a valid supporting document (such as an electricity bill, bank passbook, voter card, or rent agreement) showing your new address. Your Aadhaar must be linked to your mobile phone to complete the online OTP verification.</p>

        <h4>2. Biometric & Mobile Number Linkage</h4>
        <p>Changes to your mobile number, email ID, photo, or fingerprint biometrics CANNOT be done online. These require physical visits to an authorized Aadhaar Seva Kendra. Biometrics must be updated once when a child reaches 5 years, and again at 15 years.</p>

        <blockquote>
          "Do not fall for online scams claiming to update mobile numbers without visit. Aadhaar security rules require physical biometric authentication for mobile and photo changes."
        </blockquote>

        <h4>3. Verifying Status Updates</h4>
        <p>Once submitted, updates usually reflect within 7 to 15 working days. You can track status online using the Enrollment ID (EID) printed on the acknowledgement slip. Once generated, we can assist you with downloading and printing the secure PVC Aadhaar card directly at our desk.</p>
      </div>
    `
  }
];

function getLink(target) {
  const isLocalServer = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const isFileProtocol = window.location.protocol === 'file:';

  const PRODUCTION_DOMAINS = {
    dev: 'https://pushkar-port.vercel.app',
    mkt: 'https://dmsite-sooty.vercel.app',
    cafe: 'https://esite-two.vercel.app'
  };

  const DEV_PORTS = {
    dev: 'http://localhost:5173',
    mkt: 'http://localhost:5174',
    cafe: 'http://localhost:5175'
  };

  const RELATIVE_PATHS = {
    dev: '../PushkarPort/index.html',
    mkt: '../dmsite/index.html',
    cafe: './index.html'
  };

  if (isFileProtocol) {
    return RELATIVE_PATHS[target];
  } else if (isLocalServer) {
    return DEV_PORTS[target];
  } else {
    return PRODUCTION_DOMAINS[target];
  }
}

// --- 1. CONFIGURATION: Change target counter metrics here ---
const trackerVariables = {
  aadhaarTarget: 150,      // "150+ Profile Updates"
  panTarget: 320,          // "320+ New & Corrections"
  epfTarget: 120,          // "120+ Claims Settled"
  examsTarget: 450         // "450+ Registrations Completed"
};

document.addEventListener('DOMContentLoaded', () => {

  // --- 0. Set dynamic cross-routing link hrefs ---
  document.querySelectorAll('.client-dev-btn').forEach(link => link.setAttribute('href', getLink('dev')));
  document.querySelectorAll('.client-marketing-btn').forEach(link => link.setAttribute('href', getLink('mkt')));

  // --- 0.1. Rotating Announcement Bar Messages ---
  const barMsgEl = document.getElementById('bar-rotating-msg');
  const barMessages = [
    '🛡️ Government Portals Verified Agent Partner Desk — Serving Ichapur since 2022',
    '📌 WBSU Admissions Open — Get your forms filled accurately today!',
    '⚡ EPF Claims settled in 48–72 hrs · Call +91 90076 34717',
    '🎓 JEE / NEET / State Exam registrations — Expert help, zero errors',
    '✅ 1,000+ customers served · Transparent pricing · No hidden fees',
  ];
  let barMsgIndex = 0;

  if (barMsgEl && barMessages.length > 1) {
    barMsgEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    setInterval(() => {
      barMsgEl.style.opacity = '0';
      barMsgEl.style.transform = 'translateY(-8px)';
      setTimeout(() => {
        barMsgIndex = (barMsgIndex + 1) % barMessages.length;
        barMsgEl.textContent = barMessages[barMsgIndex];
        barMsgEl.style.opacity = '1';
        barMsgEl.style.transform = 'translateY(0)';
      }, 350);
    }, 4000);
  }

  // --- 1. Interactive Document Checklist Selector ---
  const checklistSelector = document.getElementById('checklist-selector');
  if (checklistSelector) {
    checklistSelector.addEventListener('change', (e) => {
      const selectedValue = e.target.value;
      document.querySelectorAll('.checklist-list').forEach(list => {
        list.classList.remove('active');
      });
      const targetList = document.getElementById(`checklist-${selectedValue}`);
      if (targetList) {
        targetList.classList.add('active');
      }
    });
  }

  // --- 2. Mobile Menu Toggle ---
  const hamburger = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close menu when clicking navigation options
    const navLinks = navMenu.querySelectorAll('.nav-link:not(.ext-link)');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 3. Floating Navbar Scroll Blur Class ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- 4. Scroll Reveal Animations (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- 5. Live Trust Counter Increment Logic ---
  const counterSection = document.getElementById('counters');
  
  if (counterSection) {
    let countersRun = false;

    const runCounters = () => {
      if (countersRun) return;
      countersRun = true;

      const duration = 1800; // Counter runtime duration in ms
      const startTime = performance.now();

      const elAadhaar = document.getElementById('count-aadhaar');
      const elPan = document.getElementById('count-pan');
      const elEpf = document.getElementById('count-epf');
      const elExams = document.getElementById('count-exams');

      const animateCounters = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smoother load deceleration
        const easeOutQuad = progress * (2 - progress);

        if (elAadhaar) {
          elAadhaar.textContent = Math.floor(easeOutQuad * trackerVariables.aadhaarTarget) + '+';
        }
        if (elPan) {
          elPan.textContent = Math.floor(easeOutQuad * trackerVariables.panTarget) + '+';
        }
        if (elEpf) {
          elEpf.textContent = Math.floor(easeOutQuad * trackerVariables.epfTarget) + '+';
        }
        if (elExams) {
          elExams.textContent = Math.floor(easeOutQuad * trackerVariables.examsTarget) + '+';
        }

        if (progress < 1) {
          requestAnimationFrame(animateCounters);
        }
      };

      requestAnimationFrame(animateCounters);
    };

    // Trigger counters when counter section enters viewport
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    counterObserver.observe(counterSection);
  }

  // --- 6. Quick Form Request Contact Handler (WhatsApp Redirection) ---
  const WHATSAPP_PHONE = '919007634717'; // Configure your business WhatsApp phone number here
  const contactForm = document.getElementById('cafe-contact-form');
  const submitBtn = document.getElementById('cafe-submit-btn');
  const successMsg = document.getElementById('cafe-form-success');

  if (contactForm && submitBtn && successMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Disable submission panel during network redirect simulation
      submitBtn.disabled = true;
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Redirecting to WhatsApp...</span>';

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const serviceType = document.getElementById('service-type');
      const serviceText = serviceType ? serviceType.options[serviceType.selectedIndex].text : '';
      const details = document.getElementById('details').value;

      const messageText = `*New e-Services Inquiry*%0A` +
                          `---------------------------%0A` +
                          `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                          `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
                          `📑 *Requested Service:* ${encodeURIComponent(serviceText)}%0A` +
                          `📝 *Inquiry Details:* ${encodeURIComponent(details)}`;

      setTimeout(() => {
        // Clear all input values
        contactForm.reset();

        // Reveal success label
        successMsg.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // Redirect to WhatsApp
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${messageText}`, '_blank');

        // Auto close success notification
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }, 1000);
    });
  }

  // --- 8. Interactive Price Directory Handler & Component Actions ---
  const ratesGrid = document.getElementById('rates-list-grid');
  const searchInput = document.getElementById('dir-search-input');
  const clearBtn = document.getElementById('dir-clear-btn');
  const tabButtons = document.querySelectorAll('.dir-tab-btn');

  // Helper mapping: resolves checklist target or form category dynamically
  const getActionForService = (service) => {
    const name = service.name.toLowerCase();
    const cat = service.cat;

    if (name.includes('pan')) {
      return { target: 'checklist', value: 'pan' };
    } else if (name.includes('epf') || name.includes('uan') || name.includes('pension')) {
      return { target: 'checklist', value: 'epf' };
    } else if (name.includes('admission') || name.includes('scholarship')) {
      return { target: 'checklist', value: 'admission' };
    } else if (name.includes('voter')) {
      return { target: 'checklist', value: 'voter' };
    } else if (name.includes('passport')) {
      return { target: 'checklist', value: 'passport' };
    } else if (name.includes('licence') || name.includes('driving')) {
      return { target: 'checklist', value: 'driving' };
    } else if (name.includes('certificate') || name.includes('caste') || name.includes('income') || name.includes('residence')) {
      return { target: 'checklist', value: 'certificate' };
    } else if (name.includes('shram') || name.includes('labour')) {
      return { target: 'checklist', value: 'labour' };
    } else if (name.includes('ration')) {
      return { target: 'checklist', value: 'ration' };
    } else if (name.includes('address update')) {
      return { target: 'checklist', value: 'aadhaar_update' };
    }

    // Default fallbacks based on category
    if (cat === 'forms') {
      return { target: 'inquiry', value: 'government' };
    } else if (cat === 'epf') {
      return { target: 'inquiry', value: 'pf-claim' };
    } else if (cat === 'utility') {
      return { target: 'inquiry', value: 'printing' };
    } else if (cat === 'business') {
      return { target: 'inquiry', value: 'other' };
    }

    return { target: 'inquiry', value: 'other' };
  };

  // Cross-Routing Action Controller
  const executeServiceAction = (target, value, serviceName) => {
    if (target === 'checklist') {
      const selector = document.getElementById('checklist-selector');
      if (selector) {
        selector.value = value;
        selector.dispatchEvent(new Event('change'));
        
        const targetSection = document.getElementById('status-checker');
        if (targetSection) {
          const offset = navbar ? navbar.offsetHeight : 0;
          const position = targetSection.getBoundingClientRect().top + window.scrollY - offset - 10;
          
          window.scrollTo({
            top: position,
            behavior: 'smooth'
          });
          
          // Spotlight flash animation
          const card = document.querySelector('.checklist-helper-card');
          if (card) {
            card.classList.remove('spotlight-flash');
            void card.offsetWidth; // trigger reflow
            card.classList.add('spotlight-flash');
          }
        }
      }
    } else if (target === 'inquiry') {
      const formDropdown = document.getElementById('service-type');
      const detailsField = document.getElementById('details');
      const nameField = document.getElementById('name');
      
      if (formDropdown && detailsField) {
        formDropdown.value = value;
        detailsField.value = `Hello! I would like to inquire about: "${serviceName}". Please coordinate documents & processing details.`;
        
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const offset = navbar ? navbar.offsetHeight : 0;
          const position = contactSection.getBoundingClientRect().top + window.scrollY - offset - 10;
          
          window.scrollTo({
            top: position,
            behavior: 'smooth'
          });
          
          if (nameField) {
            setTimeout(() => {
              nameField.focus();
            }, 600);
          }
          
          // Spotlight flash animation
          const card = document.querySelector('.contact-form-card');
          if (card) {
            card.classList.remove('spotlight-flash');
            void card.offsetWidth; // trigger reflow
            card.classList.add('spotlight-flash');
          }
        }
      }
    }
  };

  if (ratesGrid) {
    let currentCategory = 'all';
    let searchQuery = '';

    const renderRates = () => {
      ratesGrid.innerHTML = '';

      const totalServices = SERVICES_DATA.length;
      const filtered = SERVICES_DATA.filter(service => {
        const matchesCategory = currentCategory === 'all' || service.cat === currentCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      // Update Search Match Counter Badge
      const matchCounter = document.getElementById('dir-match-counter');
      if (matchCounter) {
        if (searchQuery) {
          matchCounter.textContent = `Found ${filtered.length} matching service${filtered.length === 1 ? '' : 's'}`;
        } else {
          if (currentCategory === 'all') {
            matchCounter.textContent = `Showing all ${totalServices} services`;
          } else {
            const catName = document.querySelector(`.dir-tab-btn[data-category="${currentCategory}"]`).textContent.replace(/[^\w\s&]/g, '').trim();
            matchCounter.textContent = `Showing ${filtered.length} in ${catName}`;
          }
        }
      }

      if (filtered.length === 0) {
        ratesGrid.innerHTML = `
          <div class="no-results-card">
            <p>🔍 No matching services found in this catalog. However, we support 50+ additional digital portals and custom tasks! Please submit an inquiry below or contact us directly.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(service => {
        const cardAction = getActionForService(service);
        const card = document.createElement('div');
        card.className = 'directory-rate-card reveal';
        card.setAttribute('data-target-action', cardAction.target);
        card.setAttribute('data-target-value', cardAction.value);
        card.setAttribute('data-cat', service.cat);
        card.innerHTML = `
          <div class="rate-card-header">
            <span class="rate-icon">${getIconForCategory(service.cat)}</span>
            <h4>${service.name}</h4>
          </div>
          <div class="rate-value-wrap">
            <span class="rate-value">${service.price}</span>
            <span class="rate-action-icon">${cardAction.target === 'checklist' ? '📑' : '💬'}</span>
          </div>
        `;
        
        card.addEventListener('click', () => {
          executeServiceAction(cardAction.target, cardAction.value, service.name);
        });

        ratesGrid.appendChild(card);
      });
      
      // Initialize reveals for newly created cards
      const newReveals = ratesGrid.querySelectorAll('.reveal');
      if (newReveals.length > 0 && typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.02 });
        newReveals.forEach(el => observer.observe(el));
      }
    };

    const getIconForCategory = (cat) => {
      switch(cat) {
        case 'forms': return '📑';
        case 'epf': return '💰';
        case 'utility': return '🖨️';
        case 'business': return '💻';
        default: return '🛡️';
      }
    };

    // Category Tabs click binding
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderRates();
      });
    });

    // Search input field event listeners
    const handleSearchInput = () => {
      searchQuery = searchInput.value;
      if (clearBtn) {
        clearBtn.classList.toggle('visible', searchQuery.length > 0);
      }
      renderRates();
    };

    if (searchInput) {
      searchInput.addEventListener('input', handleSearchInput);
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        handleSearchInput();
        searchInput.focus();
      });
    }

    // Bento grids action click binding
    document.querySelectorAll('.bento-rate-card').forEach(card => {
      card.addEventListener('click', () => {
        const target = card.dataset.actionTarget;
        const value = card.dataset.actionValue;
        const serviceName = card.querySelector('h4').textContent;
        executeServiceAction(target, value, serviceName);
      });
    });

    renderRates();
  }

  // --- 7. Smooth Scrolling on Section Anchor clicks ---
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId || 'home');
      if (targetElement) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight : 0;
        const position = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 9. Bulletin Rendering & Modal logic ---
  const bulletinGrid = document.getElementById('bulletin-posts-grid');
  const bulletinModal = document.getElementById('bulletin-reader-modal');
  const bulletinModalContent = document.getElementById('bulletin-reader-content');
  const bulletinModalCloseBtn = document.getElementById('bulletin-modal-close-btn');
  const bulletinModalCloseBg = document.getElementById('bulletin-modal-close-bg');

  if (bulletinGrid && bulletinModal && bulletinModalContent) {
    BULLETIN_POSTS_DATA.forEach(post => {
      const card = document.createElement('div');
      card.className = 'bulletin-card reveal';
      card.innerHTML = `
        <div class="bulletin-card-meta">${post.category} · ${post.date}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="bulletin-read-more">Read Guide →</span>
      `;

      card.addEventListener('click', () => {
        // Render detailed content
        bulletinModalContent.innerHTML = post.content;
        
        // Re-inject close button since we overwrite innerHTML
        bulletinModalContent.appendChild(bulletinModalCloseBtn);

        // Open modal
        bulletinModal.classList.add('active');
        bulletinModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock scroll
      });

      bulletinGrid.appendChild(card);
    });

    // Modal close handlers
    const closeBulletinModal = () => {
      bulletinModal.classList.remove('active');
      bulletinModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore scroll
    };

    if (bulletinModalCloseBtn) bulletinModalCloseBtn.addEventListener('click', closeBulletinModal);
    if (bulletinModalCloseBg) bulletinModalCloseBg.addEventListener('click', closeBulletinModal);

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && bulletinModal.classList.contains('active')) {
        closeBulletinModal();
      }
    });
  }

  // --- 10. Live Status Tracker Widget Controller ---
  const trackerInput = document.getElementById('tracker-ref-input');
  const trackerBtn = document.getElementById('tracker-lookup-btn');
  const trackerVisualizer = document.getElementById('tracker-visualizer');

  if (trackerInput && trackerBtn && trackerVisualizer) {
    trackerBtn.addEventListener('click', () => {
      const refCode = trackerInput.value.trim().toUpperCase();
      if (!refCode) {
        alert('Please enter a valid Reference ID (e.g. EPF-2026).');
        trackerInput.focus();
        return;
      }

      // Disable button during simulation
      trackerBtn.disabled = true;
      const originalText = trackerBtn.textContent;
      trackerBtn.textContent = 'Connecting to Server...';
      trackerVisualizer.classList.remove('active');

      setTimeout(() => {
        // Set Reference Text
        const resRefId = document.getElementById('res-ref-id');
        if (resRefId) resRefId.textContent = refCode;

        // Reset all nodes
        const nodes = document.querySelectorAll('.progress-steps-wrapper .step-node');
        nodes.forEach(n => {
          n.classList.remove('active', 'processing');
          n.querySelector('.node-circle').textContent = n.dataset.step === '4' ? '🎉' : (n.dataset.step === '3' ? '⚙️' : '✓');
        });

        // Determine step & messages based on keyword
        let targetStep = 2; // Default verified
        let statusLabel = 'Verified & Awaiting Batch Upload';
        let detailMsg = '✅ Documents checked & authenticated by agent desk. Queue batch schedule scheduled for next portal upload cycle.';
        let progressPercent = '33%';

        if (refCode.includes('EPF')) {
          targetStep = 3;
          statusLabel = 'Processing on Portal';
          detailMsg = '⚙️ EPF Claim file successfully uploaded to NSDL/EPFO portal. Secure server link established. Estimated settlement: 48-72 hours.';
          progressPercent = '66%';
        } else if (refCode.includes('PAN')) {
          targetStep = 4;
          statusLabel = 'Completed & Dispatched';
          detailMsg = '🎉 PAN Card allocation completed. Digital e-PAN secure PDF sent to registered mobile number. Physical PVC card dispatched via SpeedPost.';
          progressPercent = '100%';
        } else if (refCode.includes('WBSU') || refCode.includes('ADMISSION') || refCode.includes('SCHOLARSHIP')) {
          targetStep = 2;
          statusLabel = 'Documents Verified';
          detailMsg = '✅ Academic marksheet details and photograph scaling checks passed. Form ready for secure submission batch.';
          progressPercent = '33%';
        } else {
          // Choose random step 2, 3 or 4 for any generic ID
          const randomVal = Math.floor(Math.random() * 3) + 2; // 2, 3, or 4
          if (randomVal === 2) {
            targetStep = 2;
            statusLabel = 'Documents Verified';
            detailMsg = '✅ Application details checked by support workstation. Core documents authenticated.';
            progressPercent = '33%';
          } else if (randomVal === 3) {
            targetStep = 3;
            statusLabel = 'Uploaded to Portal';
            detailMsg = '⚙️ Application packet submitted to official server. Waiting for agency backend batch approval signals.';
            progressPercent = '66%';
          } else {
            targetStep = 4;
            statusLabel = 'Completed';
            detailMsg = '🎉 e-Services desk processing completed. Application receipts and official acknowledgments dispatched.';
            progressPercent = '100%';
          }
        }

        // Apply visual updates to nodes
        nodes.forEach(n => {
          const stepVal = parseInt(n.dataset.step);
          if (stepVal < targetStep) {
            n.classList.add('active');
            n.querySelector('.node-circle').textContent = '✓';
          } else if (stepVal === targetStep) {
            n.classList.add('active');
            if (targetStep === 4) {
              n.querySelector('.node-circle').textContent = '🎉';
            } else if (targetStep === 3) {
              n.classList.add('processing');
              n.querySelector('.node-circle').textContent = '⚙️';
            } else {
              n.querySelector('.node-circle').textContent = '✓';
            }
          }
        });

        // Set progress bar fill (check vertical/horizontal responsiveness)
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
          if (window.innerWidth <= 640) {
            progressFill.style.width = '100%';
            progressFill.style.height = progressPercent;
          } else {
            progressFill.style.height = '100%';
            progressFill.style.width = progressPercent;
          }
        }

        // Set status labels
        const resStatusLabel = document.getElementById('res-status-label');
        if (resStatusLabel) {
          resStatusLabel.textContent = statusLabel;
          resStatusLabel.className = targetStep === 4 ? 'status-badge-active completed' : 'status-badge-active';
        }

        // Set detail notes
        const resDetailsMsg = document.getElementById('tracker-details-msg');
        if (resDetailsMsg) resDetailsMsg.innerHTML = detailMsg;

        // Show visualizer
        trackerVisualizer.classList.add('active');

        // Restore button state
        trackerBtn.disabled = false;
        trackerBtn.textContent = originalText;
      }, 1000);
    });

    // Also support triggering on Enter key
    trackerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        trackerBtn.click();
      }
    });
  }

});
