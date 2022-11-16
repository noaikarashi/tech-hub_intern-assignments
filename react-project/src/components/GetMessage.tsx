import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { messages as messageCollection, Message} from "./Collection";
import "../App.css"
import { auth } from "../firebaseConfig";

function GetMessage() {
  const [getMessages, setGetMessages] = useState([] as Message[]);

  useEffect(() => {
    getDocs(messageCollection).then((docs) => {
      setGetMessages(docs.docs.map((d) => d.data()));
      // window.scroll(0, document.documentElement.scrollHeight - document.documentElement.clientHeight);
    });
  })

  return (
    <div className="msgs">
      {getMessages.map(({text, uid}) => (
        <div>
          <div className={`msg ${uid === auth.currentUser?.uid ? "sent" : "received"
            }`}
          >
          {auth.currentUser?.displayName}
          <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default GetMessage;
