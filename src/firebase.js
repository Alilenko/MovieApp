import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqxdTH73MTbYlvkS6T2bWtMh4BXiGoLGo",
  authDomain: "movie-app-d044e.firebaseapp.com",
  projectId: "movie-app-d044e",
  storageBucket: "movie-app-d044e.appspot.com",
  messagingSenderId: "526666680680",
  appId: "1:526666680680:web:750b118fd53f2914f86edd"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)