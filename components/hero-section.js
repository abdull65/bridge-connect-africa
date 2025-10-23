class CustomHero extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #1e293b;
        }

        .slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease;
        }

        .slide.active {
          opacity: 1;
          z-index: 2;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 3;
        }

        img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.8);
        }

        .content {
          position: relative;
          z-index: 4;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 960px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .slide.active .content {
          opacity: 1;
          transform: translateY(0);
        }

        .slide.active h1 {
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.2s;
        }

        .slide.active p {
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.6s;
        }

        .slide.active .buttons {
          animation: fadeUp 1s ease forwards;
          animation-delay: 1s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h1 {
          color: #fff;
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        span {
          color: #7ad2d5;
        }

        p {
          color: #e5e7eb;
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }

        .buttons {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          align-items: center;
          justify-content: center;
        }

        .btn {
          padding: 0.75rem 2rem;
          font-weight: 600;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-primary {
          background-color: #7ad2d5;
          color: #1e293b;
        }

        .btn-primary:hover {
          background-color: #7ad2d5;
          transform: scale(1.05);
        }

        .btn-outline {
          border: 2px solid #fff;
          color: #fff;
          background: transparent;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
        }

        /* Controls */
        .controls {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #7ad2d5;
          transform: scale(1.3);
        }

        .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
         height: 50px;
          width: 50px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.3);
          color: white;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          z-index: 10;
          padding: 0.5rem 1rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .prev {
          left: 30px;
        }

        .next {
          right: 30px;
        }

        @media (min-width: 640px) {
          h1 {
            font-size: 3.5rem;
          }

          .buttons {
            flex-direction: row;
            justify-content: center;
          }
        }
      </style>

      <section>
        <div class="slide active">
          <img src="https://bridgeconnectafrica.org/wp-content/uploads/2024/12/Untitled-1-scaled.jpg" alt="African youth in community" />
          <div class="overlay"></div>
          <div class="content">
            <h1>Bridge <span>Connect</span>, <span>Africa</span></h1>
            <p>Promoting equitable access to quality education and healthcare, protecting children's right, promoting sustainability and providing digital platforms for advocacy.</p>
            <div class="buttons">
              <a href="#about" class="btn btn-primary">Learn More</a>
              <a href="#get-involved" class="btn btn-outline">Get Involved</a>
            </div>
          </div>
        </div>

        <div class="slide">
          <img src="https://bridgeconnectafrica.org/wp-content/uploads/2024/12/DSC00851-scaled.jpg" alt="African women empowerment" />
          <div class="overlay"></div>
          <div class="content">
            <h1>Empowering <span>Women</span> and <span>Youth</span> Across Africa</h1>
            <p>Through education and advocacy, we promote leadership, inclusion, and social justice for all.</p>
            <div class="buttons">
              <a href="#programs" class="btn btn-primary">Our Programs</a>
              <a href="#donate" class="btn btn-outline">Donate Now</a>
            </div>
          </div>
        </div>

        <div class="slide">
          <img src="https://bridgeconnectafrica.org/wp-content/uploads/2024/12/DSC08399-scaled.jpg" alt="Community development" />
          <div class="overlay"></div>
          <div class="content">
            <h1>Building <span>Stronger Communities</span> Through Connection</h1>
            <p>We work to strengthen civic participation and create opportunities for sustainable growth across Africa.</p>
            <div class="buttons">
              <a href="#impact" class="btn btn-primary">See Impact</a>
              <a href="#volunteer" class="btn btn-outline">Join Us</a>
            </div>
          </div>
        </div>

        <button class="nav-btn prev">❮</button>
        <button class="nav-btn next">❯</button>
        <div class="controls"></div>
      </section>
    `;

    const slides = this.shadowRoot.querySelectorAll(".slide");
    const controls = this.shadowRoot.querySelector(".controls");
    const prev = this.shadowRoot.querySelector(".prev");
    const next = this.shadowRoot.querySelector(".next");
    let current = 0;
    let interval;

    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      controls.appendChild(dot);
    });
    const dots = this.shadowRoot.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
      showSlide((current - 1 + slides.length) % slides.length);
    }

    function goToSlide(i) {
      showSlide(i);
      resetInterval();
    }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 7000);
    }

    next.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prev.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    interval = setInterval(nextSlide, 7000);

    // Swipe gestures
    let startX = 0;
    this.shadowRoot.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
    this.shadowRoot.addEventListener("touchend", (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 50) prevSlide();
      if (diff < -50) nextSlide();
      resetInterval();
    });
  }
}

customElements.define("custom-hero", CustomHero);
