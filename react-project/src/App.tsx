import React, {useState, useMemo, useEffect} from 'react';
import db from './firebaseConfig';
import './App.css';
import { collection, doc, getDocs, getDoc, query } from 'firebase/firestore';

function App() {

  useEffect(() => {
    // const res = getDocs(query(collection(db, 'users')))
    // console.log(res.then(res => {console.log(res.docs)} ))
    // const Ref = db.collection('users')
    // const docSnap = getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Doc data:", docSnap.data());
    // } else {
    //   console.log("No such Doc");
    // }
  },[])
  useEffect(() => {
    (async()=>{
      const snapshot = await getDocs(collection(db, 'users'))
      snapshot.forEach((doc)=> {
        console.log(doc.id, doc.data)
      })
    })()

  }, [])

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChage = (e: { target: { value: any; }; }) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("")
  };

  const handleEdit = (id: number, editValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = editValue;
      }
      return todo;
    })
    setTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    })
    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <h2 className='chat-header'>チャットルーム</h2>
        <ul className='msg-content'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                className="inputText"
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={(e) => handleChecked(todo.id, todo.checked)}
              />
              <button onClick={() => handleDelete(todo.id)}>削除</button>
            </li>
          ))}
        </ul>
        <form className='chat-form' onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChage(e)}
            className="inputText"
          />
          <input type="submit" value="送信" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
