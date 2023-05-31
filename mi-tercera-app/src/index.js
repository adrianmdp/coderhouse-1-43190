import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeeycOPZyATnvAEgSbnuwDNDQvagnKJus",
  authDomain: "coderhouse-43190.firebaseapp.com",
  projectId: "coderhouse-43190",
  storageBucket: "coderhouse-43190.appspot.com",
  messagingSenderId: "1066448469030",
  appId: "1:1066448469030:web:267c42b3a1aed9f9267ae7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
