# REACT-FIREBASE

<p>
  <a href="https://www.npmjs.com/package/@garfdev/react-firebase" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@garfdev/react-firebase.svg">
  </a>
  <a href="https://github.com/GarfDev/react-firebase" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

A simple react library to interage your application with firebase.

This repository contains:

1. [Firebase wrapper](/src/Firebase.tsx) to initialize firebase and provide it though application.
2. [useFirebase hook](/src/useFirebase.ts) to get firebase instance where needed

If you have any suggestion, request of error, please kindy create an issues on [react-firebase github repository](https://github.com/GarfDev/react-firebase).


## Table of Contents

- [Install](#install)
- [Quick start](#quickstart)
- [Contributing](#contributing)
- [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm i @garfdev/react-firebase
```

## Quickstart

In this state setting up is dead simple. First is create a `FirebaseConfig.ts` file:

```js

const FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export default FirebaseConfig;
``` 

Then wrap `<Firebase />` with previous FirebaseConfig around your `<App />` component:

```tsx
  <React.StrictMode>
    <Firebase config={FirebaseConfig} name="your_firebase_name">
      <App />
    </Firebase>
  </React.StrictMode>,
```

In component, simply use `useFirebase` hook:

```tsx
function App() {
  const firebase = useFirebase();
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

A full demo project can found in [react-firebase-demo](https://github.com/GarfDev/react-firebase-context-demo).


## Contributing

Feel free to dive in! [Open an issue](https://github.com/GarfDev/react-firebase/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[MIT](LICENSE) © GarfDev
