import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBOV_-Ft086P_M5bAQv_fccmfDeKj5ETus',
  authDomain: 'netflix-101b1.firebaseapp.com',
  projectId: 'netflix-101b1',
  storageBucket: 'netflix-101b1.appspot.com',
  messagingSenderId: '390338481624',
  appId: '1:390338481624:web:457c433a32dd722eee36ad',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export default storage;
