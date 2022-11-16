import { collection, Timestamp, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { db } from "../firebaseConfig"

export interface Message {
  text: string;
  createdAt: Timestamp;
  uid: string;
}

const messageConverter = {
    toFirestore: (msg: Message) => {
      return msg
    },
    fromFirestore: (
      snapshot: QueryDocumentSnapshot<Message>,
      options?: SnapshotOptions
    ) => {
      const data = snapshot.data(options);
      return data
    }

}


export const messages = collection(db, "messages").withConverter(
    messageConverter
);
