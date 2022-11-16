import './App.css';
import GetMessage from './components/GetMessage';
import SendMessage from './components/SendMessage';
import SignOut from './components/SignOut';

function App() {
  return (
    <div>
      <SignOut />
      <div className='msgs'>
        <GetMessage/>
        <SendMessage/>
      </div>
    </div>
  );
}

export default App;
