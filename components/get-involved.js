class CustomGetInvolved extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          background: linear-gradient(to right, #1e293b, #1d4ed8);
          color: white;
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.125rem;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.7;
          color: #e5e7eb;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #20c997;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .cta-btn {
          margin-top: 3rem;
          background: #20c997;
          color: #1e293b;
          font-weight: 600;
          padding: 0.9rem 2rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #fde68a;
          transform: scale(1.05);
        }

        @media (min-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1.25rem;
          }
        }
      </style>

      <section id="get-involved">
        <h2>Get Involved</h2>
        <p>
          Every action counts. Join us in building a more equal and informed Africa — where young people and women lead the change.
        </p>

        <div class="cards">
          <div class="card">
            <div class="icon">🤝</div>
            <h3>Volunteer</h3>
            <p>
              Join hands with us to organize campaigns, events, and training programs that create real community impact.
            </p>
          </div>

          <div class="card">
            <div class="icon">💡</div>
            <h3>Partner With Us</h3>
            <p>
              Collaborate to scale our initiatives, empower youth voices, and expand our reach across Africa.
            </p>
          </div>

          <div class="card">
            <div class="icon">💖</div>
            <h3>Donate</h3>
            <p>
              Support our mission by contributing to programs that foster gender equality, civic participation, and education.
            </p>
          </div>
        </div>

        <button class="cta-btn">Join the Movement</button>
      </section>
    `;
  }
}

customElements.define("custom-get-involved", CustomGetInvolved);
