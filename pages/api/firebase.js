import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

export const db = getFirestore();

// FIREBASE_API_KEY=AIzaSyBzOhPwCdVFF6IGfxEVpMXUXzjvMbX18OY
// FIREBASE_AUTH_DOMAIN=questionnaire-c4057.firebaseapp.com
// FIREBASE_DATABASE_URL=https://questionnaire-c4057.firebaseio.com
// FIREBASE_PROJECT_ID=questionnaire-c4057
// FIREBASE_STORAGE_BUCKET=questionnaire-c4057.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=687423603897
// FIREBASE_APP_ID=1:687423603897:web:10939e5f32c99b1439c768

//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,

// apiKey: 'AIzaSyBzOhPwCdVFF6IGfxEVpMXUXzjvMbX18OY',
// authDomain: 'questionnaire-c4057.firebaseapp.com',
// databaseURL: 'https://questionnaire-c4057.firebaseio.com',
// projectId: 'questionnaire-c4057',
// storageBucket: 'questionnaire-c4057.appspot.com',
// messagingSenderId: '687423603897',
// appId: '1:687423603897:web:10939e5f32c99b1439c768',
