import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);


  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-up
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle sign-up error
        console.log("Sign-up error:", error);
      });
  };

  return (
    <div className="signup">
      <div className="signupdiv">
        <h1>Create An Account</h1>
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Name" />
          <label for="email">Email Address</label>
          <input typFe="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
          <label for="password" >Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          <button onclick={handleSignUp}>Create Account</button>
        <p>OR</p>
        sign up with Email
        <div className="icon">
          <FontAwesomeIcon className="fa" icon={faGoogle} />
          <FontAwesomeIcon className="fa" icon={faFacebook} />
          <FontAwesomeIcon className="fa" icon={faAppleWhole} />
        </div>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
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

export default Signup;
