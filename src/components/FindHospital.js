import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {getAuth, sendSignInLinkToEmail } from "firebase/auth";
import ReactMarkdown from "react-markdown";

const FindHospital = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hospitalsData, setHospitalsData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [exported, setExported] = useState(false);
  const [sharedLink, setSharedLink] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [markdownText, setMarkdownText] = useState("");

    const firebaseConfig = {
      apiKey: "AIzaSyAWv7f_oQBKK5n6uOn9NNP05WgWBBFyDKA",
      authDomain: "carefinderapp.firebaseapp.com",
      databaseURL: "https://carefinderapp-default-rtdb.firebaseio.com",
      projectId: "carefinderapp",
      storageBucket: "carefinderapp.appspot.com",
      messagingSenderId: "1086219684158",
      appId: "1:1086219684158:web:a856a4dc7c4d339662c46f",
    }
  

    const firebaseApp = initializeApp(firebaseConfig);
    const database = getDatabase(firebaseApp);
    const hospitalsRef = ref(database, "hospitals");

    useEffect(() => {
    const fetchHospitals = () => {
      onValue(hospitalsRef, (snapshot) => {
        const hospitals = snapshot.val();
        if (hospitals) {
          setHospitalsData(Object.values(hospitals));
        }
      });
    };

  const generateLink = async () => {
    try {
      const auth = getAuth(firebaseApp);
      const actionCodeSettings = {
        url: window.location.href,
        handleCodeInApp: true,
      };
      const link = await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      setSharedLink(link);
    } catch (error) {
      console.log("Link generation error:", error);
    }
  };

  fetchHospitals();
  generateLink();
  }, [firebaseApp, email, hospitalsRef]);

  useEffect(() => {
    if (hospitalsData.length > 0) {
      const results = hospitalsData.filter(
        (hospital) =>
          hospital.name &&
          hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, hospitalsData]);

  const nearbyCities = ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleExport = async () => {
    try {
      const csvData = convertToCSV(searchResults);
      // Code for exporting hospitals to CSV
      setExported(true);
    } catch (error) {
      console.log("Export error:", error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleShareByEmail = async () => {
    try {
      await sendSignInLinkToEmail(firebaseApp.auth(), email, {
        url: window.location.href,
        handleCodeInApp: true,
      });
      setIsEmailSent(true);
    } catch (error) {
      console.log("Email sending error:", error);
    }
  };

  const handleGenerateLink = async () => {
    try {
      const auth = getAuth(firebaseApp);
      const actionCodeSettings = {
        url: window.location.href,
        handleCodeInApp: true,
      };
      const link = await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      setSharedLink(link);
    } catch (error) {
      console.log("Link generation error:", error);
    }
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((hospital) =>
      Object.values(hospital)
        .map((value) => `"${value}"`)
        .join(",")
    );
    return `${headers}\n${rows.join("\n")}`;
  };

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value);
  };



  return (
    <div className="App">
      <div className="hospital">
        <div><input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        /></div>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City</option>
          {nearbyCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          onClick={handleExport}
          disabled={searchResults.length === 0 || exported}
        >
          Export Hospitals
        </button>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleShareByEmail} disabled={!email || isEmailSent}>
          Share by Email
        </button>
        <button onClick={handleGenerateLink} disabled={!email || sharedLink}>
          Generate Shareable Link
        </button>
        {sharedLink && <p>Shareable Link: {sharedLink}</p>}
      </div>
      <ul>
        {searchResults.map((hospital, index) => (
          <li key={index}>{hospital.name}</li>
        ))}
      </ul>
      <div>
        <textarea value={markdownText} onChange={handleMarkdownChange} />
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default FindHospital;
