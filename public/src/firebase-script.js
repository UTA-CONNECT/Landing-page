document.getElementById('auth').addEventListener('click', (e) => {
    analytics.logEvent('hidden-auth-button-clicked', {
        status: 'ok',
        type: 'click'
    });
    if (!firebase.auth().currentUser) {
        signIn();
    } else {
        signOut();
    }
})

document.getElementById('auth').addEventListener('touchend', (e) => {
    analytics.logEvent('hidden-auth-button-clicked', {
        status: 'ok',
        type: 'touch'
    });
    if (!firebase.auth().currentUser) {
        signIn();
    } else {
        signOut();
    }
})

function setMyInfo({uid, displayName, email, emailVerified, photoURL} = userData) {
    console.log(`[firebase-script] [setMyInfo] user data`, {uid, displayName, email, emailVerified, photoURL})
    const db = firebase.firestore();
    db.collection("users").doc(uid).set({uid, displayName, email, emailVerified, photoURL})
    .then(() => {
        console.log("Document successfully written!");
        analytics.logEvent('setMyInfo', {
            status: 'ok',
            uid
        });
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        analytics.logEvent('setMyInfo', {
            status: 'fail',
            errorCode,
            errorMessage
        });
    });
}

function signOut() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('[firebase-script] [signOut] ok');
        analytics.logEvent('signOut', {
            status: 'ok',
        });
      }).catch((error) => {
        // An error happened.
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('[firebase-script] [signOut] fail', error);
        analytics.logEvent('signOut', {
            status: 'fail',
            errorCode,
            errorMessage
        });
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
            analytics.logEvent('signIn', {
                status: 'ok',
                uid: user.uid,
            });
            setMyInfo(user);
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
            analytics.logEvent('signIn', {
                status: 'fail',
                errorCode,
                errorMessage
            });
        });

}