class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --nav-bg: #1e293b;
          --nav-bg-scrolled: #1e293b;
          --accent: #20c997;
          --text-color: white;
        }

        nav {
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: calc(100% - 50px);
          margin: 0 auto;
          top: -80px; /* Initially hidden for slide-down */
          z-index: 1000;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.4s ease;
        }

        nav.visible {
          top: 0;
          opacity: 1;
          transform: translateY(0);
        }

        nav.scrolled {
          background: var(--nav-bg-scrolled);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
          height: 90px;
          width: 90px;
          border-radius: 50%;
          object-fit: cover;
        }

        .logo span {
          color: var(--accent);
        }

        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        a {
          color: var(--text-color);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
        }

        a:hover {
          color: var(--accent);
        }

        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }

        a:hover::after,
        a.active::after {
          width: 100%;
        }

         .donate-btn {
          background: var(--accent);
          color: white;
          padding: 0.55rem 1.3rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          animation: pulse 2s infinite;
        }

        .donate-btn:hover {
          background: transparent;
          color: var(--accent);
          animation: none;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 1.8rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .mobile-menu-btn:active {
          transform: scale(0.9);
        }

        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: var(--nav-bg-scrolled);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            clip-path: circle(0px at 90% -10%);
            transition: all 0.5s ease-out;
          }

          ul.open {
            clip-path: circle(1000px at 90% -10%);
          }

          .mobile-menu-btn {
            display: block;
          }

          .donate-btn {
            margin-top: 1rem;
          }
        }

        /* Fade-in animation */
        ul li {
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeIn 0.6s ease forwards;
        }

        ul li:nth-child(1) { animation-delay: 0.1s; }
        ul li:nth-child(2) { animation-delay: 0.2s; }
        ul li:nth-child(3) { animation-delay: 0.3s; }
        ul li:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>

      <nav>
        <a href="/" class="logo">
          <img src="https://bridgeconnectafrica.org/wp-content/uploads/2021/02/cropped-BCAI.png" alt="Bridge Connect logo" />
        </a>

        <button class="mobile-menu-btn" id="menu-btn">
          ☰
        </button>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#donate" class="donate-btn">💌 Donate Now</a></li>
        </ul>
      </nav>
    `;

    const nav = this.shadowRoot.querySelector('nav');
    const menuBtn = this.shadowRoot.querySelector('#menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    const links = this.shadowRoot.querySelectorAll('a');

    // Slide-down reveal
    setTimeout(() => {
      nav.classList.add('visible');
    }, 300);

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });

    // Mobile toggle
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      menuBtn.textContent = menu.classList.contains('open') ? '✖' : '☰';
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuBtn.textContent = '☰';
      });
    });

    // Scroll spy
    window.addEventListener('scroll', () => {
      const fromTop = window.scrollY + 80;
      links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
