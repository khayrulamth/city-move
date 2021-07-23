import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const manageInitialize = () => {
    firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

export const handleCreateAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            };
            return signedInUser;
        })
        .catch((error) => {
            var errorMessage = error.message;
            return errorMessage;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            };
            return signedInUser;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;

        });
}

export const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL
            };
            return signedInUser;
        })
        .catch((error) => {
            const errorMessage = error.message;
            return errorMessage;

        });
}

export const handleFbSignIn = ()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photoURL: photoURL
        };
        return signedInUser;
    })
    .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;

    });
}

export const handleGithubSignIn = ()=>{
    var provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photoURL: photoURL
        };
        return signedInUser;
    })
    .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;

    });
}