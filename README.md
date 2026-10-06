# MetaTube

Personal fork of [GlassTube](https://github.com/audiojoe4444/GlassTube) for Meta Ray-Ban Display.

Your YouTube subscriptions on **Meta Ray-Ban Display** glasses. It's a 600×600 web app that you drive with the Neural Band or touchpad (arrows, select and back).

- **Home:** Continue watching, New from subscriptions, Channels with new videos, Trending, Liked videos and Your playlists, shown as shelves of thumbnails. A big artwork panel at the top shows details for whatever is highlighted, so the cards themselves can be pure thumbnails.
- **Subscriptions:** your feed grouped into Today / Yesterday / This week / Earlier.
- **Channels:** every channel you follow, A–Z, as round avatars. Open one to see its Latest uploads, Popular uploads and Playlists.
- **Search:** uses the glasses keyboard, and keeps your recent searches as one-tap chips.
- **Video page:** shows a big thumbnail, title, stats and description, then **Play / Resume**, **Start over** and **Channel**.
- **Player:** has **Back, −15s, Play/Pause, +15s**. The controls fade away after 4 seconds, and any press brings them back.
- **Extras from the best third-party apps** (SmartTube, NewPipe, FreeTube):
  - Hide Shorts
  - Auto-skip sponsor segments with SponsorBlock (yellow marks on the progress bar show where they are)
  - Remembers where you stopped in each video
  - Red progress bars on thumbnails, and greyed-out thumbnails for videos you've watched
  - Hide watched videos
  - Choose the Trending region
- **Sign-in on your phone:** the glasses show a short code, and you type it at google.com/device. You never have to type a password on the glasses.
- **Try the demo:** works with no setup at all, so you can test the app first.

---

## 1. Put it on GitHub Pages (web interface)

1. Create a new **public** repository, e.g. `glasstube`.
2. Click **Add file → Upload files** and drag in *everything* in this folder, including the `icons` folder. Then commit.
3. Go to **Settings → Pages**. Under *Source*, pick **Deploy from a branch**, choose **main** and **/ (root)**, then click **Save**.
4. After a minute your app is live at `https://<your-username>.github.io/glasstube/`.
5. In the **Meta AI app**, go to Display Glasses settings → **App connections → Web apps** and add that URL.

You can use **Try the demo** straight away. To see your own subscriptions, do step 2 below.

## 2. Google setup (one time, about 10 minutes)

1. Go to <https://console.cloud.google.com/> and create a project, e.g. "MetaTube".
2. Go to **APIs & Services → Library**, search for **YouTube Data API v3** and click **Enable**.
3. Go to **APIs & Services → OAuth consent screen** (now called "Google Auth Platform"):
   - User type: **External**. App name: MetaTube. Use your email for the contact fields.
   - **Data access / Scopes:** add `.../auth/youtube.readonly`.
   - **Audience / Test users:** add your own Google account (the one that owns your YouTube account).
4. Go to **Credentials → Create credentials → OAuth client ID**:
   - Application type: **TVs and Limited Input devices**.
   - Copy the **Client ID** and **Client secret**.
5. *(Optional)* Go to **Credentials → Create credentials → API key**. You only need this if you want the "Browse without signing in" option.
6. On GitHub, open `config.js`, click the ✏️ pencil, paste in your values and commit:

```js
CLIENT_ID: "1234-abc.apps.googleusercontent.com",
CLIENT_SECRET: "GOCSPX-…",
API_KEY: "",   // optional
```

7. On the glasses, choose **Sign in with Google**. On your phone, go to **google.com/device**, enter the code and approve. Google will say the app "isn't verified". That's expected for a personal app: tap **Continue**.

> **Stay signed in for more than 7 days:** while the Google app is in *Testing*, Google ends your sign-in every week. To stop that, open the OAuth consent screen / Audience page and click **Publish app** (to "In production"). It still works without verification for up to 100 users, with the same "unverified" warning.

> **Client secret in a public repo:** for the "TVs and Limited Input devices" client type, Google treats the secret as non-confidential, because it ships inside every TV app. Your account is still protected, since every sign-in has to be approved on your phone.

## Automatic backup to GitHub (optional, recommended)

Glasses software updates can wipe a web app's saved data. MetaTube can keep an **encrypted** copy of your settings, Google sign-in, recent searches and watch progress in a private gist in *your own* GitHub account, and restore it automatically.

1. On github.com, go to profile picture → **Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic)**. Name it, set *No expiration*, tick **only `gist`**, and copy the key (it starts `ghp_`). You can reuse the same key as GlassCast.
2. In the **Meta AI app**, edit MetaTube's web-app address so it ends with `?sync=ghp_yourkey` (use `&sync=` if the address already has a `?`).
3. Open MetaTube → **Settings**. Under your name it should say **"● Backed up to GitHub · just now"**.

The key only ever lives in the app address, never in the code or the repo. The backup is a secret gist called `glasstube-backup.json`, encrypted with AES-256 using a key made from your token. If the key ever leaks, delete it in GitHub's token settings and make a new one. A backup made with the old key is never overwritten. Settings will say "made with a different key", and you can delete the old gist on gist.github.com to start fresh.

## Controls

| Gesture / key | Action |
|---|---|
| Swipe ← → ↑ ↓ (arrow keys) | Move between thumbnails, shelves and tabs |
| Pinch / tap (Enter) | Select |
| Back (Escape / Backspace) | Go back. On the player, it returns to the video page |
| Any press while a video plays | Shows the controls again |

## Good to know

- **Quota:** Google gives each project 10,000 API units a day for free. Normal browsing uses about 50–100 units per feed refresh, because feeds are cached for 15 minutes. A search costs 100 units. If people share your app, they share your quota.
- **What the YouTube API can't do:** it can't read your Watch Later or your YouTube watch history, so MetaTube keeps its own resume points on the glasses. Videos you watch here won't appear in YouTube's history.
- **Some videos won't play:** a few uploaders block playback outside youtube.com, and those videos show a message instead. Ads can still appear, because they come from YouTube's own player.
- **Updating:** edit or upload files on GitHub and the glasses pick up the change on the next launch.

Version 1.1.0
