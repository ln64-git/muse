import "./App.css";
import Display from "../components/display";
import Header from "../components/header";
import Player from "../components/player";
import Sidebar from "../components/sidebar";

function App() {
  return (
    <main>
      <div className="h-screen flex text-neutral-400">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-grow h-full bg-neutral-950 pr-4 pb-1 overflow-hidden">
            <div className="bg-neutral-900 rounded-lg h-full flex flex-col">
              <div className="flex-grow overflow-y-auto">
                <Display />
              </div>
              <Player />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
