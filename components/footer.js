class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 3rem 2rem;
          font-family: 'Inter', sans-serif;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
          text-decoration: none;
        }

        .logo img {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          object-fit: cover;
        }

        .footer-about p {
          margin-top: 1rem;
          color: #e2e8f0;
          line-height: 1.6;
        }

        .footer-links h3,
        .footer-contact h3,
        .footer-newsletter h3 {
          color: #7ad2d5;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #7ad2d5;
        }

        .footer-contact p {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: #e2e8f0;
          line-height: 1.4;
        }

        .contact-icon {
          flex-shrink: 0;
          color: #7ad2d5;
        }

        .footer-newsletter input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: none;
          border-radius: 4px;
          background: #334155;
          color: white;
        }

        .footer-newsletter button {
          background: #7ad2d5;
          color: #1e293b;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .footer-newsletter button:hover {
          background: #2dd4bf;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-links a {
          color: #e2e8f0;
          background: #334155;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .social-links a:hover {
          color: #7ad2d5;
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #334155;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      </style>

      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <a href="/" class="logo">
              <img src="https://bridgeconnectafrica.org/wp-content/uploads/2021/02/cropped-BCAI.png" alt="Bridge Connect logo" />
            </a>
            <p>
            Bridge Connect Africa Initiative (BCAI), as a non-governmental organization, aims to address these challenges by empowering and amplifying the rights of women and young people in their communities by developing and implementing innovative solutions that promote equity, justice, and sustainability.
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            </div>
          </div>

          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p><i data-feather="map-pin" class="contact-icon"></i>No 2, Residence Sixteen, Magajin Rumfa, Beside R&K Guest Palace, Ahmadu Bello Way, 700214, Kano, Nigeria</p>
            <p><i data-feather="mail" class="contact-icon"></i>info@bridgeconnectafrica.org</p>
            <p><i data-feather="phone" class="contact-icon"></i>+234 706 934 7805</p>
          </div>

          <div class="footer-newsletter">
            <h3>Stay Updated</h3>
            <form id="newsletter-form">
              <input type="email" placeholder="Your email address" required>
              <button type="submit">Subscribe</button>
            </form>
            <p>Get the latest news and updates about our programs and impact.</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Bridge Connect. All rights reserved.</p>
        </div>
      </footer>
    `;

    // ✅ Render feather icons inside shadow DOM
    Promise.resolve().then(() => {
      if (window.feather) {
        const icons = this.shadowRoot.querySelectorAll("[data-feather]");
        icons.forEach(icon => {
          const name = icon.getAttribute("data-feather");
          const svg = window.feather.icons[name].toSvg({ width: 20, height: 20, stroke: "#7ad2d5" });
          icon.outerHTML = svg;
        });
      } else {
        console.warn("Feather icons library not found. Add <script src='https://unpkg.com/feather-icons'></script> to your HTML.");
      }
    });
  }
}

customElements.define("custom-footer", CustomFooter);
