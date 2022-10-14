import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider()
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch((error) => {
        console.log('error:', error)
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
          <button onClick={handleGithubSignIn}>GitHub Sign In</button>
        </>
      }
      {user.uid && <div>
        <p>User name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
