/*
  MetaTube configuration
  -----------------------
  Fill these in once (see README.md → "Google setup"). Edit this file straight
  on GitHub with the pencil icon, commit, and the app picks it up.

  CLIENT_ID / CLIENT_SECRET
    From a Google Cloud OAuth client of type "TVs and Limited Input devices".
    This is what lets you sign in by typing a short code on your phone instead
    of on the glasses. Google treats this kind of secret as non-confidential
    (it ships inside TV apps), so it is OK for it to live in a public repo.

  API_KEY (optional)
    A YouTube Data API v3 key. Only needed for "Browse without signing in".
*/
window.GT_CONFIG = {
  CLIENT_ID: "1006502556657-e1ifrj4ct1l4so2jiqq97kedu7ge5c90.apps.googleusercontent.com",
  CLIENT_SECRET: "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",
  API_KEY: "",

  REGION: "GB",          // default Trending region (changeable in Settings)
  FEED_CHANNELS: 40      // how many of your most-active subscriptions to build the feed from
};
