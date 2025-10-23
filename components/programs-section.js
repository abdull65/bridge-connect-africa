class CustomPrograms extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        section {
          background: #f9fafb;
          padding: 5rem 1.5rem;
        }
        h2 {
          color: #1e293b;
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 4rem;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .card {
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }
        .image {
          height: 200px;
          overflow: hidden;
        }
        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .card:hover img {
          transform: scale(1.05);
        }
        .content {
          padding: 1.5rem;
        }
        .icon {
          width: 3rem;
          height: 3rem;
          background: #7ad2d5;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        h3 {
          color: #1e293b;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        p {
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        a {
          color: #7ad2d5;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #d97706;
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
          h2 {
            font-size: 2.5rem;
          }
        }
      </style>

      <section id="programs">
        <h2>Our Focus Areas</h2>
        <div class="grid">
          <!-- Gender Equality -->
          <div class="card">
            <div class="image">
              <img src="http://static.photos/people/640x360/3" alt="Gender equality workshop" />
            </div>
            <div class="content">
              <div class="icon">
                <i data-feather="users"></i>
              </div>
              <h3>Gender Equality</h3>
              <p>
                Empowering young women and girls through education, leadership training, and advocacy programs that challenge gender stereotypes and promote equality.
              </p>
              <a href="#">Learn More <i data-feather="arrow-right"></i></a>
            </div>
          </div>

          <!-- Civic Engagement -->
          <div class="card">
            <div class="image">
              <img src="http://static.photos/people/640x360/4" alt="Civic engagement activity" />
            </div>
            <div class="content">
              <div class="icon">
                <i data-feather="heart"></i>
              </div>
              <h3>Civic Engagement</h3>
              <p>
                Encouraging active participation in democratic processes and community development through voter education, leadership programs, and civic education.
              </p>
              <a href="#">Learn More <i data-feather="arrow-right"></i></a>
            </div>
          </div>

          <!-- Access to Information -->
          <div class="card">
            <div class="image">
              <img src="http://static.photos/technology/640x360/5" alt="Youth accessing information" />
            </div>
            <div class="content">
              <div class="icon">
                <i data-feather="book-open"></i>
              </div>
              <h3>Access to Information</h3>
              <p>
                Bridging the digital divide by providing technology access, digital literacy programs, and creating platforms for knowledge sharing among African youth.
              </p>
              <a href="#">Learn More <i data-feather="arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>
    `;

    // Initialize Feather icons
    feather.replace();
  }
}

customElements.define("custom-programs", CustomPrograms);
