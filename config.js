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
  CLIENT_ID: "1014148886657-q9eoru70fs9om5c7pjphb20q2m31ppn4.apps.googleusercontent.com",
  CLIENT_SECRET: "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",
  API_KEY: "",

  REGION: "GB",          // default Trending region (changeable in Settings)
  FEED_CHANNELS: 40      // how many of your most-active subscriptions to build the feed from
};
