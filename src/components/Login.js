import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Firebase } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  

  const firebaseConfig = {
    apiKey: "AIzaSyAWv7f_oQBKK5n6uOn9NNP05WgWBBFyDKA",
    authDomain: "carefinderapp.firebaseapp.com",
    databaseURL: "https://carefinderapp-default-rtdb.firebaseio.com",
    projectId: "carefinderapp",
    storageBucket: "carefinderapp.appspot.com",
    messagingSenderId: "1086219684158",
    appId: "1:1086219684158:web:a856a4dc7c4d339662c46f",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  
  
const handleLogin = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Handle successful login
      const user = userCredential.user;
      setUser(user);
    })
    .catch((error) => {
      // Handle login error
      console.log("Login error:", error);
    });
};

const handleLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Handle successful logout
      setUser(null);
    })
    .catch((error) => {
      // Handle logout error
      console.log("Logout error:", error);
    });
};

const handleAddData = () => {
  const db = getFirestore();
  addDoc(collection(db, "users"), {
    email: email,
    password: password,
  })

    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id); 
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};




  return (
    <div className="signup">
      <div className="signupdiv">
        <h1>Welcome Back</h1>
        <p>Login using correct details!</p>
        <label for="email">Email Address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
        <label for="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Enter Password" />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>OR</p>
        <div className="icon">
        <FontAwesomeIcon className="fa" icon={faGoogle} />
        <FontAwesomeIcon className="fa" icon={faFacebook} />
        <FontAwesomeIcon className="fa" icon={faAppleWhole} />
      </div>
        <p>
          Already have an account? <Link to="/Signup">Signup</Link>
        </p>
      </div>
      <div className="signup2">
      <h1>CareFinder</h1>
      <h2>Join Our</h2>
      <h2>Community</h2>
      <p>Enjoy seamless access to medical services.</p>
      <img src="../Rectangle113.png" className="rect113" alt="hospital" />
      </div>
    </div>
  );
};

export default Login;
