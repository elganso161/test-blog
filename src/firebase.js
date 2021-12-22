import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDho21Yo7SVLXnMqEplbUqd5eZ5o9QQiX8",
  authDomain: "auth-blog-48f0c.firebaseapp.com",
  projectId: "auth-blog-48f0c",
  storageBucket: "auth-blog-48f0c.appspot.com",
  messagingSenderId: "800894005351",
  appId: "1:800894005351:web:0e740af67f810215cd24c2",
};

const app = initializeApp(firebaseConfig);

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_ID,
// };

// const app = initializeApp(firebaseConfig);
