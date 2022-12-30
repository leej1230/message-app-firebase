import React, { useEffect, useState } from 'react'
import SignOut from './SignOut.js';
import SendMessage from './SendMessage.js';
import {auth, db} from "../firebase.js";

function MsgApp() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("SentAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <div><SignOut /></div>
      <div className='msgs'>
        {messages.map(({id,text,photoURL,uid}) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent":"received"}`}>
              <img src={photoURL} alt=""/>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default MsgApp