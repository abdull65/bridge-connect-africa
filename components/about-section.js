class CustomAbout extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          background: #ffffff;
          padding: 3rem 1.5rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .text {
          flex: 1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .text.visible {
          opacity: 1;
          transform: translateY(0);
        }

        h2 {
          color: #1e293b;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        p {
          color: #334155;
          font-size: 1.1rem;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .btn {
          padding: 0.75rem 2rem;
          font-weight: 600;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background-color: #7ad2d5;
          color: #1e293b;
        }

        .btn-primary:hover {
          background-color: #1fb589;
          transform: scale(1.05);
        }

        .image-wrapper {
          flex: 1;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .image-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        @media (min-width: 1024px) {
          .container {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .image-wrapper {
            order: 2;
          }
          .text {
            order: 1;
          }
          h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 1023px) {
          .image-wrapper {
            order: 1;
          }
          .text {
            order: 2;
          }
        }
      </style>

      <section id="about">
        <div class="container">
          <div class="image-wrapper">
            <img src="https://bridgeconnectafrica.org/wp-content/uploads/2024/12/DSC00851-scaled.jpg" alt="Bridge Connect team" />
          </div>

          <div class="text">
            <h2>Who We Are</h2>
            <p>
              Bridge Connect Initiative (BCAI) empowers communities across Africa to create equitable, just, and sustainable futures through innovation, advocacy, and collaboration.
            </p>
            <p>
              We focus on <strong>Education</strong>, <strong>Health</strong>, <strong>Climate Change</strong>, <strong>Child Protection</strong>, and <strong>Digital Advocacy</strong> — driving positive change for women and youth.
            </p>
            <p>
              Since our founding, we’ve reached over <strong>50,000 young people</strong> across <strong>12 African countries</strong>, helping them become leaders of transformation.
            </p>
            <div>
              <a href="/about.html" class="btn btn-primary">More About Us</a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Animation on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.shadowRoot.querySelectorAll('.text, .image-wrapper').forEach(el => {
      observer.observe(el);
    });
  }
}

customElements.define("custom-about", CustomAbout);
