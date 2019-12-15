import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyAs2nZGrlB1dlEA2IWjz62d7vWLnfK_aVg',
  authDomain: 'notetoself-fe763.firebaseapp.com',
  databaseURL: 'https://notetoself-fe763.firebaseio.com',
  projectId: 'notetoself-fe763',
  storageBucket: 'notetoself-fe763.appspot.com',
  messagingSenderId: '512913889715',
  appId: '1:512913889715:web:6e3db713e2f5cd845613c6',
  measurementId: 'G-52K8NR0Z00'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
