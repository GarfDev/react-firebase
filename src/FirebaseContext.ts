import firebase from "firebase";
import React from "react";

type firebaseApp = firebase.app.App;

const FirebaseContext = React.createContext({} as firebaseApp);

export default FirebaseContext;
