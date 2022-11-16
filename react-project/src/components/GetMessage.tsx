import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { messages as messageCollection, Message} from "./Collection";
import "../App.css"

function GetMessage() {
  const [getMessages, setGetMessages] = useState([] as Message[]);

  useEffect(() => {
    getDocs(messageCollection).then((docs) => {
      setGetMessages(docs.docs.map((d) => d.data()));
    });
  })

  return (
    <div>
      {getMessages.map(({text}) => (
        <div>
          <p>メッセージ:{text}</p>
        </div>
      ))}
    </div>
  )
}
export default GetMessage;
