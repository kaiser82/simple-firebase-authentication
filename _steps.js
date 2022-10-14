/*
    INITIAL SETUP

    1. visit: console.firebase.google.com
    2. create a new firebase project.
    3. visit docs (go to docs)
    4. docs -> build -> authentication -> web -> get started.
    5. register web app > firebase project home> click web > give name and register
    6. install firebase for your project: npm install firebase
    7. dangerous: get firebase config and put it in firebase.init.js
    8. export app from firebase.init.js

    SETUP PROVIDER

    9. create auth using getAuth from firebase by using app from firebase.init.js
    10. create a google authProvider by using "new GoogleAuthProvider()"
    11. go to firebase > build > authentication > sign in method
    12. enable google sign in method
    12. create a button for google sing in method with a click handler
    13.inside the event handler, call signInWithPopup with auth, provider
    14. after signInWithPopup .then result , error

    DISPLAY DATA

    

    ADD A NEW SIGN IN METHOD

    1. enable the sign in method
    2. crete github, twitter, tb, etc. app create
    3. get clientId and secret
    4.

*/