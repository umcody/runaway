<img src = "/frontend/mobile-app/assets/RunawayLogo.png" width = "100px">

# RUNAWAY
![frontend-mobile](https://github.com/umcody/runaway/workflows/frontend-mobile/badge.svg)

Runaway is a mobile application where people can chat privately with trained volunteers for mental support/peer.
Currently, the repo is divided into three parts: Mobile app/ Web app/ Backend.


Web App: https://github.com/umcody/runaway-web
Back End: https://github.com/codinggosu/runaway-backend

### Currently Supported Features:
#### Mobile APP
* User - Volunteer web socket chat
* Blog Feed
* Announcement Feed
* Resources
* Hotlines

#### Web APP
* User administration
* Blog/Announcement Creation
* User - Volunteer web socket chat
* Chat termination
* Queue Administration


## Set Up

Install all npm packages before running the application

```bash
npm install
```
## Starting

### Backend

To start the server on your localhost,

```bash
node server.js
```

or for more convenience (automatically restarting the server upon file change),

```bash
nodemon server.js
```
### Frontend - Web, Mobile App
```bash
npm start
```
