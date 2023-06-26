import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAMnC2nLDuAss52Wawjie51Co89-Xw-SMU",
        authDomain: "uasapi-210f2.firebaseapp.com",
        databaseURL: "https://uasapi-210f2-default-rtdb.firebaseio.com",
        projectId: "uasapi-210f2",
        storageBucket: "uasapi-210f2.appspot.com",
        messagingSenderId: "162536168551",
        appId: "1:162536168551:web:249e6c097e0d69344488c2",
        measurementId: "G-GW9Z9CV4ZF"
      };
      

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app);

}

export default StartFirebase;