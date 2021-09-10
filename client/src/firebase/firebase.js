import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
      apiKey: "AIzaSyD0_015o-3hZknO8q_MAV0iWIU7f0v7NsE",
      authDomain: "lessons-app-f9674.firebaseapp.com",
      projectId: "lessons-app-f9674",
      storageBucket: "lessons-app-f9674.appspot.com",
      messagingSenderId: "524749651821",
      appId: "1:524749651821:web:892ad4961291fc23a22464",
      measurementId: "G-D37V9HQWBH"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
    storage,
    firebase as default
}