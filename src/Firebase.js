// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import  {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = process.env.REACT_APP_API_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "smrt-attdns.firebaseapp.com",
  projectId: "smrt-attdns",
  storageBucket: "smrt-attdns.appspot.com",
  messagingSenderId: "605755038951",
  appId: "1:605755038951:web:1ff077cf7a4e60fabbd642"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;

