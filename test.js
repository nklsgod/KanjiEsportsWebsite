import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: "League of Legends", image: "/img/lol.png", id: "lol" },
    { name: "Valorant", image: "/img/valorant.png", id: "valorant" },
    { name: "Creators", image: "/img/lol.png", id: "creators" },
  ];

  const teams = {
    lol: [
      { name: "Emlyune", role: "Top", image: "/img/leona.png" },
      { name: "Emlyune", role: "Top", image: "/img/leona.png" },
      { name: "Emlyune", role: "Top", image: "/img/leona.png" },
      { name: "Emlyune", role: "Top", image: "/img/leona.png" },
      { name: "Emlyune", role: "Top", image: "/img/leona.png" },
    ],
    valorant: [
      { name: "Codex", role: "Duellist", image: "/img/Jett.png" },
      { name: "NKLS", role: "Flex", image: "/img/raze.png" },
      { name: "Easy", role: "IGL", image: "/img/omen.png" },
      { name: "Tommylee", role: "Sentinal", image: "/img/cypher.png" },
      { name: "Samueljackson", role: "Flex", image: "/img/sova.png" },
    ],
    r6: [
      { name: "Operator 1", role: "Support", image: "/img/operator1.png" },
      { name: "Operator 2", role: "Fragger", image: "/img/operator2.png" },
    ],
    creators: [
      { name: "Creator 1", role: "Content", image: "/img/creator1.png" },
      { name: "Creator 2", role: "Streamer", image: "/img/creator2.png" },
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
          <a className="nav-link" href="https://sacrarium.gg/collections/kanji-esports">
            SHOP
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">
            Team
          </a>
        </li>
      </ul>
    </div>
    <div className="mx-auto order-0">
      <a className="navbar-brand mx-auto" href="#home">
        <img src="/img/logo.webp" alt="Kanji Esports" className="navbar-logo" />
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
          backgroundImage: "url('/img/test.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }} >
        <div className="hero-content">
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
  {/* About Us Section */}
      <section
        className="about-section section"
        id="about"
        style={{
          backgroundImage: "url('/img/aboutUs.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                Kanji Esports is a premier esports organization dedicated to fostering talent and promoting competitive gaming. Our teams compete in a variety of games and are known for their skill, dedication, and sportsmanship.
              </p>
              <p>
                We believe in the power of esports to bring people together and create unforgettable experiences. Join us on our journey to the top!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section" id="team">
        <div className="container text-center">
          {!selectedGame && (
            <>
              <h2 className="mb-5">Meet Our Squads</h2>
              <p>At Kanji Esports we have many teams in a wide variety of games.</p>
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
              >
                Back to Games
              </button>
              <h2 className="text-center mb-5">
                {games.find((game) => game.id === selectedGame)?.name} Team Roster
              </h2>
              <div className="row justify-content-center">
                {teams[selectedGame]?.map((player, index) => (
                  <div key={index} className="col-md-4 col-sm-6 player-card">
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
          <h2 className="mb-5">Visit Our Shop</h2>
          <img src="/img/shop.png" alt="Shop Banner" className="img-fluid" />
        </div>
      </section>
  {/* contact Us Section */}
  <section
        className="about-section section"
        id="about"
        style={{
          backgroundImage: "url('/img/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <h2>Contact Us</h2>
              <p>
                This is a new section with the text on the right side and the image on the left side. You can add more content here as needed.
              </p>
              <p>
                Feel free to customize this section to fit your needs. You can add more text, images, or any other content you want.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;