import React, { useState, useEffect, useMemo, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

console.log('TWITCH_CLIENT_ID:', process.env.REACT_APP_TWITCH_CLIENT_ID);
console.log('TWITCH_CLIENT_SECRET:', process.env.REACT_APP_TWITCH_CLIENT_SECRET);

const TWITCH_CONFIG = {
  clientId: 'mkevdzrlpyh1rv808q65sk843zewcp',
  clientSecret: '2pls5km4og0tjgfaqgse95szn5wqsu'
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [selectedGame, setSelectedGame] = useState(null);
  const [twitchAccessToken, setTwitchAccessToken] = useState(null);
  const [mainChannelLive, setMainChannelLive] = useState(false);
  const [currentLiveStream, setCurrentLiveStream] = useState(null);
  const [selectedLolTeam, setSelectedLolTeam] = useState(null);

  const games = [
    { name: "League of Legends", image: `${process.env.PUBLIC_URL}/img/lolCat.png`, id: "lol" },
    { name: "Valorant", image: `${process.env.PUBLIC_URL}/img/valorantCat.png`, id: "valorant" },
    { name: "Creators", image: `${process.env.PUBLIC_URL}/img/contentCreator.png`, id: "creators" },
    { name: "Staff", image: `${process.env.PUBLIC_URL}/img/staffCat.png`, id: "staff" },

  ];

  const teams = useMemo(() => ({
    lol: {
      teams: {
        'Echolon': {
          image: `${process.env.PUBLIC_URL}/img/echolon_team.png`,
          players: [
            { 
              name: "Cluey", 
              role: "Top", 
              image: `${process.env.PUBLIC_URL}/img/chogath_lol.png`,
              social: {



                twitter: "https://x.com/Cluey_lol",
              }
            },
            { 
              name: "Zwickl", 
              role: "Jungle", 
              image: `${process.env.PUBLIC_URL}/img/nidalee_lol.png`,
              social: {
                twitter: "https://x.com/Zwickl18",
              }
            },
            { 
              name: "Giannis", 
              role: "Mid", 
              image: `${process.env.PUBLIC_URL}/img/syndra_lol.png`,
              social: {
                twitter: "https://x.com/GiannisMid",

              }
            },
            { 
              name: "Bukovskii", 
              role: "ADC", 
              image: `${process.env.PUBLIC_URL}/img/cogmaw_lol.png`,
              social: {
                twitter: "https://x.com/Bukovskii_Wil",
              }
            },
            { 
              name: "Henkindu", 
              role: "Support", 
              image: `${process.env.PUBLIC_URL}/img/bard_lol.png`,
              social: {
                twitter: " https://x.com/Henkindu",
              }
            },
            
            // ... weitere Spieler
          ]
        },
        'Spectre': {
          image: `${process.env.PUBLIC_URL}/img/spectre_team.png`,
          players: [
            { 
              name: "Poisonmyth", 
              role: "Support", 
              image: `${process.env.PUBLIC_URL}/img/poppy_lol.png`,
              social: {
                twitter: "https://x.com/Poisonmyth",
                twitch: "https://twitch.tv/emlyune",
              }
            },
            { 
              name: "Zazu", 
              role: "ADC", 
              image: `${process.env.PUBLIC_URL}/img/jinx_lol.png`,
              social: {
                twitter: "https://x.com/zazu_lol",
                twitch: "https://twitch.tv/zazu_lol",
              }
            },
            { 
              name: "iceeye", 
              role: "Jungle", 
              image: `${process.env.PUBLIC_URL}/img/zyra_lol.png`,
              social: {
                twitter: "https://x.com/iceeye_lol",
              }
            },
            { 
              name: "ER4S3D", 
              role: "Coach", 
              image: `${process.env.PUBLIC_URL}/img/Coach.png`,
              social: {
                twitter: "https://x.com/TRshadowwind",
              }
            },
            { 
              name: "Bleim", 
              role: "Coach", 
              image: `${process.env.PUBLIC_URL}/img/Coach.png`,
              social: {
                twitter: "https://x.com/1Bleim  ",
              }
            },
          ]
        },
        'Div 4': {
          image: `${process.env.PUBLIC_URL}/img/div4_team.png`,
          players: [
            // Academy Spieler
          ]
        }
      }
    },
    valorant: [
      { 
        name: "Codex", 
        role: "Duellist", 
        image: `${process.env.PUBLIC_URL}/img/Jett.png`,
        social: {
          twitter: "https://x.com/codexVAL",
        }
      },
      { 
        name: "NKLS", 
        role: "Flex", 
        image: `${process.env.PUBLIC_URL}/img/raze.png`,
        social: {
          twitter: "https://twitter.com/nklsgod",
        }
      },
      { 
        name: "Easy", 
        role: "IGL", 
        image: `${process.env.PUBLIC_URL}/img/omen.png`,
        social: {
          twitter: "https://twitter.com/easy",
        }
      },
      { 
        name: "Tommylee", 
        role: "Sentinal", 
        image: `${process.env.PUBLIC_URL}/img/cypher.png`,
        social: {
          twitter: "https://x.com/SxltyyVAL",
        }
      },
      { 
        name: "Samueljackson", 
        role: "Flex", 
        image: `${process.env.PUBLIC_URL}/img/sova.png`,
        social: {
          twitter: "https://x.com/s4muelVALO",
        }
      },
      { 
        name: "Aydurr", 
        role: "Coach", 
        image: `${process.env.PUBLIC_URL}/img/Coach.png`,
        social: {
          twitter: "https://twitter.com/ayydurensohn",
        }
      },
    ],
    r6: [
      { 
        name: "Operator 1", 
        role: "Support", 
        image: `${process.env.PUBLIC_URL}/img/operator1.png`,
        social: {
          twitter: "https://twitter.com/operator1",
          twitch: "https://twitch.tv/operator1",
          discord: "https://discord.com/operator1"
        }
      },
      { 
        name: "Operator 2", 
        role: "Fragger", 
        image: `${process.env.PUBLIC_URL}/img/operator2.png`,
        social: {
          twitter: "https://twitter.com/operator2",
          twitch: "https://twitch.tv/operator2",
          discord: "https://discord.com/operator2"
        }
      },
    ],
    creators: [
      { 
        name: "Emylune", 
        role: "Content", 
        image: `${process.env.PUBLIC_URL}/img/emylune.png`,
        social: {
          twitch: "https://www.twitch.tv/emylune_"
        }
      },
      { 
        name: "Aydurr", 
        role: "Valorant Coach & CC", 
        image: `${process.env.PUBLIC_URL}/img/aydurrpb.png`,
        social: {
          twitch: "https://www.twitch.tv/aydurr"
        }
      },
      { 
        name: "Kriimsii", 
        role: "Content Creator", 
        image: `${process.env.PUBLIC_URL}/img/kriimsii_cc.png`,
        social: {
          twitch: "https://www.twitch.tv/kriimsii"
        }
      },
    ],
    staff: [
      { 
        name: "Kloud", 
        role: "Founder & Owner", 
        image: `${process.env.PUBLIC_URL}/img/zyra_lol.png`,
        social: {
          twitter: "https://x.com/derkloud1"
        }
      },
      { 
        name: "Casz", 
        role: "Founder & Owner", 
        image: `${process.env.PUBLIC_URL}/img/riotgraves_lol.png`,
        social: {
          twitter: "https://x.com/casz_"
        }
      },
      { 
        name: "Nilox", 
        role: "Team-Manager League of Legends", 
        image: `${process.env.PUBLIC_URL}/img/dwgkennen_lol.png`,
        social: {
          twitter: "https://x.com/ews_nilox"
        }
      },
      { 
        name: "Forsaken", 
        role: "Head of LOL", 
        image: `${process.env.PUBLIC_URL}/img/lilia_lol.png`,
        social: {
          twitter: "https://x.com/Forsaken53ews"
        }
      },
      { 
        name: "Emylune", 
        role: "Team-Manager Valorant", 
        image: `${process.env.PUBLIC_URL}/img/spacegroovenami_lol.png`,
        social: {
          twitter: "https://x.com/EmyLune_tv"
        }
      },
    ],
  }), []);
  

  const getTwitchAccessToken = async () => {
    try {
      const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: TWITCH_CONFIG.clientId,
          client_secret: TWITCH_CONFIG.clientSecret,
          grant_type: 'client_credentials'
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Error getting Twitch access token:', error);
      return null;
    }
  };

  const checkIfLive = useCallback(async (username) => {
    if (!twitchAccessToken) return false;
    
    try {
      const response = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${username}`,
        {
          headers: {
            'Authorization': `Bearer ${twitchAccessToken}`,
            'Client-Id': TWITCH_CONFIG.clientId,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data && data.data.length > 0;
    } catch (error) {
      console.error('Error checking stream status:', error);
      return false;
    }
  }, [twitchAccessToken]);

  const checkMainChannel = useCallback(async () => {
    if (!twitchAccessToken) return false;
    try {
      const response = await fetch(
        'https://api.twitch.tv/helix/streams?user_login=kanjiesports',
        {
          headers: {
            'Authorization': `Bearer ${twitchAccessToken}`,
            'Client-Id': TWITCH_CONFIG.clientId,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data && data.data.length > 0;
    } catch (error) {
      console.error('Error checking main channel status:', error);
      return false;
    }
  }, [twitchAccessToken]);

  useEffect(() => {
    const initTwitchToken = async () => {
      const token = await getTwitchAccessToken();
      setTwitchAccessToken(token);
    };
    initTwitchToken();
  }, []);

  useEffect(() => {
    if (!twitchAccessToken) return;

    const checkStreams = async () => {
      const isMainChannelLive = await checkMainChannel();
      setMainChannelLive(isMainChannelLive);

      if (isMainChannelLive) {
        setCurrentLiveStream('kanjiesports');
        return;
      }

      for (const creator of teams.creators) {
        if (creator.social.twitch) {
          const username = creator.social.twitch.split('/').pop();
          const isLive = await checkIfLive(username);
          if (isLive) {
            setCurrentLiveStream(username);
            return;
          }
        }
      }
      
      setCurrentLiveStream(null);
    };

    checkStreams();
    const interval = setInterval(checkStreams, 300000);
    return () => clearInterval(interval);
  }, [teams.creators, twitchAccessToken, checkIfLive, checkMainChannel]);

  const renderPlayerCard = (player, index) => {
    return (
      <div key={index} className="col-md-4 col-sm-6 player-card">
        <div className="player-card-inner">
          <img
            src={player.image}
            alt={player.name}
            className="player-img"
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
    );
  };

  const parentDomain = process.env.NODE_ENV === 'development' ? 'localhost' : 'ihre-domain.de';

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-brand');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('navbar-brand-hidden');
        } else {
          navbar.classList.remove('navbar-brand-hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#achievements">
                  Erfolge
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#partners">
                  Partner
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="#home">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Kanji Esports" className="navbar-logo" />
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
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/test.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content" data-aos="fade-up">
          <h1>Welcome to Kanji Esports</h1>
          <div className="hero-icons">
            <a href="https://x.com/KanjiEsports" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.twitch.tv/kanjiesports" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitch"></i>
            </a>
            <a href="https://discord.gg/MDNbwHybxx" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
          </div>
          <div className="hero-arrow">
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
      </header>

      {/* Live Stream Section */}
      {currentLiveStream && (
        <section className="stream-section section" id="stream">
          <div className="container text-center">
            <h2 className="mb-4" data-aos="fade-up">
              {mainChannelLive ? 'Kanji Esports Live' : `${teams.creators.find(c => c.social.twitch.includes(currentLiveStream))?.name} is Live!`}
            </h2>
            <div className="stream-container" data-aos="fade-up">
              <iframe
                src={`https://player.twitch.tv/?channel=${currentLiveStream}&parent=${parentDomain}`}
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                title="Twitch Stream"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      <section className="team-section section" id="team">
        <div className="container text-center">
          {!selectedGame && (
            <>
              <h2 className="mb-5" data-aos="fade-up">Unsere Teams</h2>
              <p data-aos="fade-up">Bei Kanji Esports haben wir Teams in verschiedenen Spielen.</p>
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
          ) : selectedGame === 'lol' && !selectedLolTeam ? (
            <div className="team-display">
              <button
                className="btn btn-secondary mb-4"
                onClick={() => setSelectedGame(null)}
                data-aos="fade-up"
              >
                Zurück zur Übersicht
              </button>
              <h2 className="text-center mb-5" data-aos="fade-up">
                League of Legends Team auswählen
              </h2>
              <div className="row justify-content-center">
                {Object.entries(teams.lol.teams).map(([teamName, teamData], index) => (
                  <div
                    key={teamName}
                    className="col-md-4 game-card"
                    onClick={() => setSelectedLolTeam(teamName)}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="lol-team-card">
                      <img 
                        src={teamData.image} 
                        alt={`${teamName} Team`} 
                        className="lol-team-image"
                      />
                      <p>Team anzeigen</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedGame === 'lol' ? (
            <div className="team-display">
              <div className="d-flex justify-content-between mb-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedLolTeam(null)}
                  data-aos="fade-up"
                >
                  Zurück zu Teams
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedGame(null)}
                  data-aos="fade-up"
                >
                  Zurück zur Übersicht
                </button>
              </div>
              <h2 className="text-center mb-5" data-aos="fade-up">
                {selectedLolTeam} Roster
              </h2>
              <div className="row justify-content-center">
                {teams.lol.teams[selectedLolTeam]?.players?.map((player, index) => (
                  <div key={index} className="col-md-4 col-sm-6 player-card">
                    <div className="player-card-inner">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="player-img"
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
          ) : (
            <div className="team-display">
              <button
                className="btn btn-secondary mb-4"
                onClick={() => setSelectedGame(null)}
                data-aos="fade-up"
              >
                Zurück zur Übersicht
              </button>
              <h2 className="text-center mb-5" data-aos="fade-up">
                {games.find((game) => game.id === selectedGame)?.name} Team Roster
              </h2>
              <div className="row justify-content-center">
                {teams[selectedGame]?.map((player, index) => 
                  selectedGame === 'creators' ? renderPlayerCard(player, index) : (
                    <div key={index} className="col-md-4 col-sm-6 player-card">
                      <div className="player-card-inner">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="player-img"
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
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Neue Achievements Section */}
      <section className="achievements-section section" id="achievements">
        <div className="container text-center">
          <h2 className="mb-5" data-aos="fade-up">Unsere Erfolge</h2>
          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>Premiere 2024</h3>
                <p>Playoffs</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <h3>Relegation to Div 3 Primeleague </h3>
                <p>WON</p>
              </div>
            </div>
          </div>    
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="about-section section"
        id="about"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/usAb.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2>Über Uns</h2>
              <p>
                Kanji Esports ist eine führende E-Sport-Organisation, die sich der Förderung von Talenten und der Förderung des kompetitiven Gamings widmet. Unsere Teams treten in verschiedenen Spielen an und sind bekannt für ihr Können, ihre Hingabe und ihre Sportlichkeit.
              </p>
              <p>
                Wir glauben an die Kraft des E-Sports, Menschen zusammenzubringen und unvergessliche Erlebnisse zu schaffen. Begleite uns auf unserem Weg an die Spitze!
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Feed Section */}
      <section className="twitter-section section" id="social">
        <div className="container text-center">
          <h2 className="mb-5" data-aos="fade-up">Aktuelle Updates</h2>
          <div className="row justify-content-center">
            <div className="col-md-6" data-aos="fade-right">
              <h3 className="mb-4">Kanji Esports</h3>
              <div className="twitter-feed-container">
                <a 
                  className="twitter-timeline" 
                  href="https://twitter.com/KanjiEsports"
                  data-height="600"
                  data-theme="dark"
                  data-chrome="noheader nofooter noborders transparent"
                  data-tweet-limit="10"
                  data-dnt="true"
                  data-cards="visible"
                  data-conversation="none"
                  data-link-color="#00acee"
                >
                  Loading tweets...
                </a>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h3 className="mb-4">Kanji Valorant</h3>
              <div className="twitter-feed-container">
                <a 
                  className="twitter-timeline" 
                  href="https://twitter.com/kanjivalorant"
                  data-height="600"
                  data-theme="dark"
                  data-chrome="noheader nofooter noborders transparent"
                  data-tweet-limit="10"
                  data-dnt="true"
                  data-cards="visible"
                  data-conversation="none"
                  data-link-color="#00acee"
                >
                  Loading tweets...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section section" id="shop">
        <div className="container text-center">
          <h2 className="mb-5" data-aos="fade-up">Visit Our Shop</h2>
          <div className="shop-link" style={{ cursor: 'pointer' }}>
            <a 
              href="https://sacrarium.gg/collections/kanji-esports" 
              target="_blank" 
              rel="noopener noreferrer"
              className="shop-link-wrapper"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/img/shop.png`} 
                alt="Shop Banner" 
                className="img-fluid shop-image" 
                data-aos="zoom-in"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section section" id="partners">
        <div className="container text-center">
          <h2 className="mb-5" data-aos="fade-up">Our Partners</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 partner-card" data-aos="fade-up">
              <a href="https://sacrarium.gg" target="_blank" rel="noopener noreferrer">
                <img 
                  src={`${process.env.PUBLIC_URL}/img/sacarium.png`} 
                  alt="Sacrarium" 
                  className="img-fluid partner-logo"
                />
              </a>
              <h3 className="mt-4">Sacrarium</h3>
              <p>Official Merchandise Partner</p>
            </div>
            {/* Weitere Partner hier */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="about-section section"
        id="contact"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/contact.png)`,
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
              <h2>Kontakt</h2>
              <p>
                Hast du Fragen oder brauchst Hilfe? Fülle das Formular aus und wir melden uns schnellstmöglich bei dir!
              </p>
              <form action="/send-message" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Dein Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name eingeben"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Deine E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="E-Mail eingeben"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Deine Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Nachricht eingeben"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Nachricht senden
                </button>
              </form>
              <p className="mt-4">
                Alternativ kannst du uns auch per E-Mail unter{" "}
                <a href="mailto:info@example.com">info@example.com</a>{" "}
                erreichen oder unserem{" "}
                <a href="https://discord.gg/kanji-esports">Discord</a> beitreten.
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