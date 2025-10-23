class CustomTestimonials extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          background: #f9fafb;
          padding: 5rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        h2 {
          font-size: 2rem;
          color: #1e293b;
          font-weight: 700;
          margin-bottom: 3rem;
        }

        .carousel {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .slide {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease;
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
        }

        .slide.active {
          opacity: 1;
          transform: translateX(0);
          position: relative;
        }

        .quote {
          font-style: italic;
          font-size: 1.125rem;
          color: #1e293b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .author {
          font-weight: 600;
          color: #1e293b;
        }

        .role {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        button {
          background: #1e293b;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        button:hover {
          background: #20c997;
          transform: scale(1.05);
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }
          .quote {
            font-size: 1.25rem;
          }
        }
      </style>

      <section id="testimonials">
        <h2>Voices from Our Community</h2>
        <div class="carousel">
          <div class="slide active">
            <p class="quote">
              “Bridge Connect helped me find my voice as a young woman. Their civic engagement programs gave me the confidence to lead initiatives in my community.”
            </p>
            <p class="author">Aisha Bello</p>
            <p class="role">Youth Leader, Nigeria</p>
          </div>
          <div class="slide">
            <p class="quote">
              “I learned so much about gender equality and how we can make a difference from the grassroots level. Their workshops were truly life-changing.”
            </p>
            <p class="author">Samuel Okoro</p>
            <p class="role">Community Volunteer, Ghana</p>
          </div>
          <div class="slide">
            <p class="quote">
              “The organization’s digital campaigns inspired me to take action in promoting access to education for girls in my local area.”
            </p>
            <p class="author">Fatoumata Diallo</p>
            <p class="role">Education Advocate, Senegal</p>
          </div>
        </div>

        <div class="controls">
          <button id="prev">‹ Prev</button>
          <button id="next">Next ›</button>
        </div>
      </section>
    `;

    const slides = this.shadowRoot.querySelectorAll(".slide");
    let current = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };

    this.shadowRoot.querySelector("#next").addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    this.shadowRoot.querySelector("#prev").addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    // Auto-rotate every 6 seconds
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);
  }
}

customElements.define("custom-testimonials", CustomTestimonials);
