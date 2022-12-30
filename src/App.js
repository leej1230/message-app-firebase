import './App.css';
import SignIn from "./components/Signin.js";
import MsgApp from "./components/MsgApp.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";

function App() {
  const [user] = useAuthState(auth);
  return (
  <div>
    {/* If user has sth, go component line, else (if user is None) go signin component */}
    {user ? <MsgApp /> : <SignIn />}
  </div>
  );
}

export default App;
