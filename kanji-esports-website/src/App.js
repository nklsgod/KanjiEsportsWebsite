import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: "League of Legends", image: "./img/lol.png", id: "lol" },
    { name: "Valorant", image: "./img/valorant.png", id: "valorant" },
    { name: "Creators", image: "./img/CCPreview.png", id: "creators" },
  ];

  const teams = {
    lol: [
      { 
        name: "Emlyune", 
        role: "Top", 
        image: "./img/leona.png",
        social: {
          twitter: "https://twitter.com/emlyune",
          twitch: "https://twitch.tv/emlyune",
          discord: "https://discord.com/emlyune"
        }
      },
      { 
        name: "Emlyune", 
        role: "Top", 
        image: "./img/leona.png",
        social: {
          twitter: "https://twitter.com/emlyune",
          twitch: "https://twitch.tv/emlyune",
          discord: "https://discord.com/emlyune"
        }
      },
      { 
        name: "Emlyune", 
        role: "Top", 
        image: "./img/leona.png",
        social: {
          twitter: "https://twitter.com/emlyune",
          twitch: "https://twitch.tv/emlyune",
          discord: "https://discord.com/emlyune"
        }
      },
      { 
        name: "Emlyune", 
        role: "Top", 
        image: "./img/leona.png",
        social: {
          twitter: "https://twitter.com/emlyune",
          twitch: "https://twitch.tv/emlyune",
          discord: "https://discord.com/emlyune"
        }
      },
      { 
        name: "Emlyune", 
        role: "Top", 
        image: "./img/leona.png",
        social: {
          twitter: "https://twitter.com/emlyune",
          twitch: "https://twitch.tv/emlyune",
          discord: "https://discord.com/emlyune"
        }
      },
    ],
    valorant: [
      { 
        name: "Codex", 
        role: "Duellist", 
        image: "./img/Jett.png",
        social: {
          twitter: "https://twitter.com/codex",
          twitch: "https://twitch.tv/codex",
          discord: "https://discord.com/codex"
        }
      },
      { 
        name: "NKLS", 
        role: "Flex", 
        image: "./img/raze.png",
        social: {
          twitter: "https://twitter.com/nklsgod",
          twitch: "https://twitch.tv/nkls",
          discord: "https://discord.com/nkls"
        }
      },
      { 
        name: "Easy", 
        role: "IGL", 
        image: "./img/omen.png",
        social: {
          twitter: "https://twitter.com/easy",
          twitch: "https://twitch.tv/easy",
          discord: "https://discord.com/easy"
        }
      },
      { 
        name: "Tommylee", 
        role: "Sentinal", 
        image: "./img/cypher.png",
        social: {
          twitter: "https://twitter.com/tommylee",
          twitch: "https://twitch.tv/tommylee",
          discord: "https://discord.com/tommylee"
        }
      },
      { 
        name: "Samueljackson", 
        role: "Flex", 
        image: "./img/sova.png",
        social: {
          twitter: "https://twitter.com/samueljackson",
          twitch: "https://twitch.tv/samueljackson",
          discord: "https://discord.com/samueljackson"
        }
      },
    ],
    r6: [
      { 
        name: "Operator 1", 
        role: "Support", 
        image: "./img/operator1.png",
        social: {
          twitter: "https://twitter.com/operator1",
          twitch: "https://twitch.tv/operator1",
          discord: "https://discord.com/operator1"
        }
      },
      { 
        name: "Operator 2", 
        role: "Fragger", 
        image: "./img/operator2.png",
        social: {
          twitter: "https://twitter.com/operator2",
          twitch: "https://twitch.tv/operator2",
          discord: "https://discord.com/operator2"
        }
      },
    ],
    creators: [
      { 
        name: "MisterKaoki", 
        role: "Content", 
        image: "./img/misterKaoki.png",
        social: {
          twitch: "https://www.twitch.tv/misterkaoki"
        }
      },
      { 
        name: "Creator 2", 
        role: "Streamer", 
        image: "./img/creator2.png",
        social: {
          twitter: "https://twitter.com/creator2",
          twitch: "https://twitch.tv/creator2",
          discord: "https://discord.com/creator2"
        }
      },
    ],
  };

  return (
    <>
    
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#shop">
                  SHOP
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="#home">
              <img src="./img/logo.webp" alt="Kanji Esports" className="navbar-logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".dual-collapse2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="hero-section section"
        id="home"
        style={{
          backgroundImage: "url('./img/test.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content" data-aos="fade-up">
          <h1>Welcome to Kanji Esports</h1>
          <div className="hero-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitch"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
          </div>
          <div className="hero-arrow">
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
      </header>


     {/* Team Section */}
     <section className="team-section section" id="team">
        <div className="container text-center">
          {!selectedGame && (
            <>
              <h2 className="mb-5" data-aos="fade-up">Meet Our Squads</h2>
              <p data-aos="fade-up">At Kanji Esports we have many teams in a wide variety of games.</p>
              <br />
            </>
          )}
          {!selectedGame ? (
            <div className="row">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="col-md-4 game-card"
                  onClick={() => setSelectedGame(game.id)}
                  data-aos="zoom-in"
                >
                  <img src={game.image} alt={game.name} className="img-fluid game-img" />
                  <h5 className="mt-3">{game.name}</h5>
                </div>
              ))}
            </div>
          ) : (
            <div className="team-display">
              <button
                className="btn btn-secondary mb-4"
                onClick={() => setSelectedGame(null)}
                data-aos="fade-up"
              >
                Back to Games
              </button>
              <h2 className="text-center mb-5" data-aos="fade-up">
                {games.find((game) => game.id === selectedGame)?.name} Team Roster
              </h2>
              <div className="row justify-content-center">
                {teams[selectedGame]?.map((player, index) => (
                  <div key={index} className="col-md-4 col-sm-6 player-card" data-aos="zoom-in">
                    <div className="player-card-inner">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="img-fluid player-img"
                      />
                      <div className="player-info">
                        <h3>{player.name}</h3>
                        <p className="player-role">{player.role}</p>
                        <div className="player-icons">
                          {player.social.twitter && (
                            <a href={player.social.twitter} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-twitter"></i>
                            </a>
                          )}
                          {player.social.twitch && (
                            <a href={player.social.twitch} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-twitch"></i>
                            </a>
                          )}
                          {player.social.discord && (
                            <a href={player.social.discord} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-discord"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Shop Section */}
<section className="shop-section section" id="shop">
  <div className="container text-center">
    <h2 className="mb-5" data-aos="fade-up">Visit Our Shop</h2>
    <a href="https://sacrarium.gg/collections/kanji-esports" target="_blank" rel="noopener noreferrer">
      <img src="./img/shop.png" alt="Shop Banner" className="img-fluid" data-aos="zoom-in" />
    </a>
  </div>
</section>

{/* About Us Section */}
<section
        className="about-section section"
        id="about"
        style={{
          backgroundImage: "url('./img/usAb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2>About Us</h2>
              <p>
                Kanji Esports is a premier esports organization dedicated to fostering talent and promoting competitive gaming. Our teams compete in a variety of games and are known for their skill, dedication, and sportsmanship.
              </p>
              <p>
                We believe in the power of esports to bring people together and create unforgettable experiences. Join us on our journey to the top!
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
\            </div>
          </div>
        </div>
      </section>
     {/* Contact Us Section */}
<section
  className="about-section section"
  id="contact"
  style={{
    backgroundImage: "url('./img/contact.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      {/* Image Section */}
      <div className="col-md-6" data-aos="fade-left">
      
      </div>
      {/* Contact Form Section */}
      <div className="col-md-6" data-aos="fade-right">
        <h2>Contact Us</h2>
        <p>
          Have questions or need help? Fill out the form below, and we'll get back to you as soon as possible!
        </p>
        <form action="/send-message" method="POST">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <p className="mt-4">
          Alternatively, reach out to us via email at{" "}
          <a href="mailto:info@example.com" style={{ color: "#fff" }}>
            info@example.com
          </a>{" "}
          or join our{" "}
          <a href="" style={{ color: "#fff" }}>
            Discord
          </a>.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="footer-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <h5>Impressum</h5>
              <a href="/impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
            </div>
            <div className="col-md-4">
              <h5>Datenschutz</h5>
              <a href="/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
            </div>
            <div className="col-md-4">
              <h5>Kontakt</h5>
              <a href="#contact" rel="noopener noreferrer">Kontakt</a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <p>&copy; 2025 Kanji Esports. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;