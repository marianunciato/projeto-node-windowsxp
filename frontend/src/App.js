import React, { useState } from 'react';
import Login from './Login';
import Chat from './Chat';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="App w-screen h-screen flex justify-center items-center flex-wrap">
      <div>
        <div className="bg-[#245DDA] shadow-inner w-full p-2 rounded-t-xl flex justify-between">
          <h1 className="titulo-chat  text-white text-lg ml-2">Chat room</h1>
          <span class="material-symbols-outlined flex justify-center items-center rounded-md bg-red-700 hover:bg-red-800 cursor-pointer border-2 text-white border-white mr-[1px]" onClick={handleRefresh}>
              close
          </span>
        </div>
        <div className="area-chat flex flex-col items-center border-x-4 border-b-4 border-[#245DDA] bg-[#F3F3F3] p-4">
          {!username ? <Login onLogin={handleLogin} /> : <Chat username={username} />}
        </div>
      </div>
    </div>
  );
}

export default App;