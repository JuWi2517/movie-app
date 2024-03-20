import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACQe7lYYEet-KR2X26IpLJXNYLWt5mQhA",
    authDomain: "weather-app-45af4.firebaseapp.com",
    projectId: "weather-app-45af4",
    storageBucket: "weather-app-45af4.appspot.com",
    messagingSenderId: "70218685177",
    appId: "1:70218685177:web:dc8ba476c1673b706ea028"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { app, auth };