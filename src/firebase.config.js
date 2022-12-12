import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAEqPZXVlyLQXudJTOZTSWCQBXetlzc7to',
  authDomain: 'house-marketplace-app-63825.firebaseapp.com',
  projectId: 'house-marketplace-app-63825',
  storageBucket: 'house-marketplace-app-63825.appspot.com',
  messagingSenderId: '223557128429',
  appId: '1:223557128429:web:43dff402cd995b4604bce4',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
