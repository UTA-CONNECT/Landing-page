// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO8ktHyj4xjeR1Pl062QkNYZ7exCCCIFE",
    authDomain: "uta-conne.firebaseapp.com",
    projectId: "uta-conne",
    storageBucket: "uta-conne.appspot.com",
    messagingSenderId: "161018803676",
    appId: "1:161018803676:web:7e086c9af1e90703bccb19",
    measurementId: "G-KCS7BSHSED"
};

firebase.initializeApp(firebaseConfig);

document.getElementById('auth').addEventListener('click', (e) => {
    if (!firebase.auth().currentUser) {
        signIn();
    } else {
        signOut();
    }
})

document.getElementById('auth').addEventListener('touchend', (e) => {
    if (!firebase.auth().currentUser) {
        signIn();
    } else {
        signOut();
    }
})

function signOut() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('[firebase-script] [signOut] ok');
      }).catch((error) => {
        // An error happened.
        console.log('[firebase-script] [signOut] fail', error);
      });
}

function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log('result', result);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(`error`, error);
        });

}