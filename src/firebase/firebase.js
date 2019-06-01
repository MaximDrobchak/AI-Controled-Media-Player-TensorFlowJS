import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDs6D0mBTScHVgI1Zc-41A6NOsUG_LDd1E',
  authDomain: 'my-base-app.firebaseapp.com',
  databaseURL: 'https://my-base-app.firebaseio.com',
  projectId: 'my-base-app',
  storageBucket: 'my-base-app.appspot.com',
  messagingSenderId: '1053450346606',
};

class Firebase {
  constructor () {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
