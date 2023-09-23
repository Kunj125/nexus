import './App.css';
import Lobby from './components/Lobby';
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";

function App() {
  return <div className='App'>
    <div className='logo-container'>
      <img className="logo" src="/logo.png" alt="logo" />
      <p>Nexus</p>
    </div>

    <div class="main">
      <VideoPlayer />
      <Lobby>
        <Notifications />
      </Lobby>
    </div>
  </div>
}

export default App;
