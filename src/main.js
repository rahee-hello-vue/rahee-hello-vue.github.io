import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQSvWHfwX5n1HQ97Iqzx4nwQilQqC0AHo",
  authDomain: "github-vue-4f2c2.firebaseapp.com",
  projectId: "github-vue-4f2c2",
  storageBucket: "github-vue-4f2c2.appspot.com",
  messagingSenderId: "798192312720",
  appId: "1:798192312720:web:a5d3f86e539a6506f3d315",
  measurementId: "G-CL54T5B5T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
