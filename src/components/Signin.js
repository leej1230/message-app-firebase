import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import {auth} from "../firebase.js";

function Signin() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return <div >
    <Button onClick={signInWithGoogle}>
        Sign in with Google
    </Button>
  </div>
}

export default Signin