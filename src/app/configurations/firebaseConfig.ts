import {firebase} from '@react-native-firebase/auth';
export const firebaseConfig = () => {
  const androidCredentials = {
    clientId:
      '290745426365-eoctplr77u5fian0dlg15jdo2q6cgg49.apps.googleusercontent.com',
    appId: '1:290745426365:android:a277777fe25c55db1232d4',
    apiKey: 'AIzaSyBGxHMkZuIaWhEuIK24SllbbqW',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: 'qcar-13ebb',
  };
  firebase.initializeApp(androidCredentials);
};
