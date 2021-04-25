![logo](/img/logo.jpg)
# Icebreakr - Middle Grounds App
An app to meet people around you anonymously.

---

Please view our backend here server: https://github.com/mikedandan/icebreakr-server

---

**Technology used**

* Javascript/JSX
* React Native Cli
* React Hooks
* Adobe XD
* Mongoose
* MongoDB
* Express Server
* Node.js
* JWT Authentication
* Bcrypt encryption
* Socket.io
* Heroku

---

**User Login**<br>
<img src="/img/login.gif" width="300"><br>
User is able to login with created email/password.  We validate that the email exists in our database and then validate the password with Bcrypt.  A token is then created and stored in Async storage.  User is then redirected to the dashboard.

---

**User Creation**
User is able to create an account using a valid email and password that meets our minimum requirements.  Password is encrypted using Bcrypt prior to being sent to our MongoDB hosted on Heroku.

---

**Dashboard**
<br>
<img src="/img/dashboard.gif" width="300"><br>
User is able to either join a local chat, join a specific event, or create an event.

---

**Group Chat**
<br>
<img src="/img/groupchat.gif" width="300"><br>
Upon joining the local chat, a filter is performed prior to the message history being loaded.  This filter compares the user's current location and the location of the messages stored in our database.  If the message is within .75 miles, the server will return the message to be displayed on the user's screen.  We used sockets to emit new messages that are sent from other devices.

---

**Create Event**
<br>
<img src="/img/createevent.gif" width="300"><br>
User is able to create an event.  The event name is used to generate a random unique event ID that is displayed after creation.  We used Google Maps api to generate geolocation coordinates based off of inputted location name.  All event information is stored on the database.

**Join Event**
<br>
<img src="/img/joinevent.gif" width="300"><br>
User is able to join an event using an unique event ID.  



---

**Acknowledgments**
Thank you UCI-Coding bootcamp for teaching us the awesome skills to be able to build this app.
