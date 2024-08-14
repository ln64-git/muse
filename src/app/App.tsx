import { useEffect } from "react";
import Display from "../components/display";
import Header from "../components/header";
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import "./App.css";

import { invoke } from "@tauri-apps/api";

function App() {
  useEffect(() => {
    function fetchUserSettings() {
      invoke("greet", { name: "World" }).then((response) =>
        console.log(response)
      );
      console.log("got");
    }
    fetchUserSettings();
  }, []);

  return (
    <main>
      <div className="h-screen overflow-hidden flex text-neutral-400">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-grow h-full bg-neutral-950 pr-4 pb-1">
            <div className="bg-neutral-900 rounded-lg h-full flex flex-col justify-between">
              <div className=" rounded-lg bg-neutral-900"></div>
              <div className=" rounded-lg h-full">
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
