import React, { useState, useEffect } from 'react';

const TwitterFeed = ({ username }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch(`/api/tweets/${username}`); // Sie müssen einen Backend-Endpoint erstellen
        const data = await response.json();
        setTweets(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tweets:', error);
        setLoading(false);
      }
    };

    fetchTweets();
  }, [username]);

  if (loading) {
    return <div className="loading">Loading tweets...</div>;
  }

  return (
    <div className="twitter-feed-custom">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet-card">
          <div className="tweet-header">
            <img src={tweet.author_avatar} alt={tweet.author_name} className="tweet-avatar" />
            <div className="tweet-author">
              <span className="author-name">{tweet.author_name}</span>
              <span className="author-username">@{tweet.author_username}</span>
            </div>
          </div>
          <div className="tweet-content">{tweet.text}</div>
          {tweet.media && (
            <div className="tweet-media">
              <img src={tweet.media} alt="Tweet media" className="tweet-image" />
            </div>
          )}
          <div className="tweet-footer">
            <span className="tweet-date">{new Date(tweet.created_at).toLocaleDateString()}</span>
            <div className="tweet-stats">
              <span><i className="far fa-heart"></i> {tweet.likes}</span>
              <span><i className="fas fa-retweet"></i> {tweet.retweets}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwitterFeed; 