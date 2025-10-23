class CustomImpact extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          background: linear-gradient(135deg, #1e293b, #1e293b);
          color: white;
          padding: 5rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #7ad2d5;
          position: relative;
          z-index: 2;
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .stat {
          border-radius: 1rem;
          padding: 2rem 1rem;
          transition: all 0.3s ease;
        }

        .stat:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-5px);
        }

        .value {
          font-size: 3rem;
          font-weight: 800;
          color: #7ad2d5;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: baseline;
          gap: 0.3rem;
        }

        .label {
          font-size: 1.1rem;
          opacity: 0.9;
          color: #e0e7ff;
          margin-top: 0.5rem;
        }

        @media (min-width: 768px) {
          .stats {
            grid-template-columns: repeat(4, 1fr);
          }

          h2 {
            font-size: 2.5rem;
          }

          .value {
            font-size: 3.5rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat {
          opacity: 0;
          animation: fadeIn 0.6s ease forwards;
        }

        .stat:nth-child(1) { animation-delay: 0.1s; }
        .stat:nth-child(2) { animation-delay: 0.2s; }
        .stat:nth-child(3) { animation-delay: 0.3s; }
        .stat:nth-child(4) { animation-delay: 0.4s; }
      </style>

      <section id="impact">
        <h2>Our Impact Across Africa</h2>
        <div class="stats">
          <div class="stat">
            <p class="value"><span>+</span><span class="counter" data-target="50000">0</span></p>
            <span class="label">People Impacted</span>
          </div>
          <div class="stat">
            <p class="value"><span class="counter" data-target="75">0</span><span>%</span></p>
            <span class="label">Success Rate</span>
          </div>
          <div class="stat">
            <p class="value"><span>+</span><span class="counter" data-target="60">0</span></p>
            <span class="label">Communities Reached</span>
          </div>
          <div class="stat">
            <p class="value"><span>+</span><span class="counter" data-target="9500">0</span></p>
            <span class="label">Direct Beneficiaries</span>
          </div>
        </div>
      </section>
    `;

    const counters = this.shadowRoot.querySelectorAll(".counter");
    const speed = 150;

    const animateCounters = () => {
      counters.forEach(counter => {
        const update = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.textContent;
          const increment = target / speed;

          if (count < target) {
            counter.textContent = Math.ceil(count + increment);
            requestAnimationFrame(update);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        update();
      });
    };

    // Observe when section enters view
    const section = this.shadowRoot.querySelector("#impact");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(section);
  }
}

customElements.define("custom-impact", CustomImpact);
