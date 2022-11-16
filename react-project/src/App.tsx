import { auth } from './firebaseConfig';
import './App.css';
import GetMessage from './components/GetMessage';
import SendMessage from './components/SendMessage';

function App() {
  return (
    <div>
      <h2 className='header'>チャットルーム</h2>
      <div className='msgs'>
        <h3>{auth.currentUser?.displayName}</h3>
        <GetMessage/>
        <SendMessage/>
      </div>
    </div>
  );
}

export default App;
