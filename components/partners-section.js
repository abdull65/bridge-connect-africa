class CustomPartners extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          text-align: center;
          background: #f9fafb;
          padding: 4rem 1rem;
        }
        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          color: #4b5563;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }
        .logos-carousel {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .logos-track {
          display: flex;
          align-items: center;
          gap: 3rem;
          animation: scroll 40s linear infinite;
        }
        .logos-track:hover {
          animation-play-state: paused;
        }
        .logos-track img {
          height: 60px;
          object-fit: contain;
          transition: transform 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.8;
        }
        .logos-track img:hover {
          transform: scale(1.1);
          filter: grayscale(0%);
          opacity: 1;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .logos-track img {
            height: 45px;
          }
        }
      </style>

      <section>
        <h2>Our Partners & Sponsors</h2>
        <p class="subtitle">
          We are proud to collaborate with global and regional organizations that share our vision for an empowered Africa.
        </p>

        <div class="logos-carousel">
          <div class="logos-track">
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/jobberman.png" alt="jobberman" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/CGE.png" alt="CGE" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/PEPFAR.png" alt="united state mission nigeria" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/prb.png" alt="PRB" /></a>
            <a href="#" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EU" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/007.png" alt="USAID" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/008.png" alt="pace" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/002.png" alt="africird" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/001.png" alt="education as a vaccine" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/009.png" alt="connected development" /></a>

            <!-- Duplicate set for infinite loop -->
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/jobberman.png" alt="jobberman" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/CGE.png" alt="CGE" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/PEPFAR.png" alt="united state mission nigeria" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/prb.png" alt="PRB" /></a>
            <a href="#" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EU" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/007.png" alt="USAID" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/008.png" alt="pace" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/002.png" alt="africird" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/001.png" alt="education as a vaccine" /></a>
            <a href="#" target="_blank"><img src="https://bridgeconnectafrica.org/wp-content/uploads/2025/01/009.png" alt="connected development" /></a>

            </div>
        </div>
      </section>
    `;
  }
}

customElements.define("custom-partners", CustomPartners);
