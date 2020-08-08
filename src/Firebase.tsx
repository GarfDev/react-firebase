import React from "react";
import firebase from "firebase";
import FirebaseContext from "./FirebaseContext";
import { FirebaseConfig } from "./types";

interface Props {
  name?: string;
  config: FirebaseConfig;
  children: React.ReactChild;
}

export default function Firebase(props: Props) {
  return (
    <FirebaseContext.Provider value={firebase.initializeApp(props.config, props.name)}>
      {props.children}
    </FirebaseContext.Provider>
  );
}
