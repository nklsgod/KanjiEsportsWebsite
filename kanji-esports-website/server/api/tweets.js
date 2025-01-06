const express = require('express');
const router = express.Router();
const Twitter = require('twitter-v2');

const client = new Twitter({
  bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

router.get('/api/tweets/:username', async (req, res) => {
  try {
    const { username } = req.params;
    
    // Erst User-ID finden
    const user = await client.get('users/by/username/' + username);
    const userId = user.data.id;
    
    // Tweets abrufen
    const tweets = await client.get(`users/${userId}/tweets`, {
      max_results: 20,
      expansions: ['author_id', 'attachments.media_keys'],
      'tweet.fields': ['created_at', 'public_metrics'],
      'user.fields': ['profile_image_url'],
      'media.fields': ['url']
    });

    // Tweets formatieren
    const formattedTweets = tweets.data.map(tweet => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at,
      author_name: user.data.name,
      author_username: user.data.username,
      author_avatar: user.data.profile_image_url,
      likes: tweet.public_metrics.like_count,
      retweets: tweet.public_metrics.retweet_count,
      media: tweet.attachments?.media_keys?.map(key => 
        tweets.includes.media.find(m => m.media_key === key)?.url
      )[0]
    }));

    res.json(formattedTweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
});

module.exports = router; 