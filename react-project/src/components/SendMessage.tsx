import React from "react";
import '../App.css';
// import { auth} from "../firebaseConfig";
import { addDoc, Timestamp } from "firebase/firestore";
import { messages as messageCollection } from "./Collection";
import { Input } from "@mui/material";
import { Send } from "@mui/icons-material"

function SendMessage() {

  const [send, setSend] = React.useState("")
  // const {uid, photoURL} = auth.currentUser;

  async function sendMessage(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (send === '') {
      return
    }
    const chat = {
      text: send,
      createdAt: Timestamp.fromDate(new Date),
      // photoURL: "",
      // uid: auth.currentUser?.uid
    }
    await addDoc(messageCollection, chat);
    setSend("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setSend(e.target.value)}
            value={send}
          />
        <Send
          style={{ color: "#7AC2FF", marginLeft: "5px" }}
        />
        </div>
      </form>
    </div>
  )

}
export default SendMessage;
