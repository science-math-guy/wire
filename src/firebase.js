import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBT_HaLMCvtnaz9a0E0x7gDMsc6z45J9cY",
    authDomain: "todo-bd7ae.firebaseapp.com",
    projectId: "todo-bd7ae",
    storageBucket: "todo-bd7ae.appspot.com",
    messagingSenderId: "200648426224",
    appId: "1:200648426224:web:562debf7e37f6715ea3835",
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);