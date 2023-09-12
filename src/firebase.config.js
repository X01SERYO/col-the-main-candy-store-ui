// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDN5ATD9WD7TuCxH0IZAEXm7AxdVRaCX6Q',
  authDomain: 'col-the-main-candy-store-98421.firebaseapp.com',
  projectId: 'col-the-main-candy-store-98421',
  storageBucket: 'col-the-main-candy-store-98421.appspot.com',
  messagingSenderId: '467240899496',
  appId: '1:467240899496:web:332b662b6f7a341cbcc39d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
