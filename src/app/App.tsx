import "./App.css";
import { useEffect } from "react";
import Display from "../components/display";
import Header from "../components/header";
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import { invoke } from "@tauri-apps/api";
import { useSettingStore } from "../lib/zustand/settings-store";

function App() {
  // const setUserLibraries = useSettingStore((state) => state.setUserLibraries);

  // useEffect(() => {
  //   const fetchUserSettings = async () => {
  //     try {
  //       const settingsJson: string = await invoke("fetch_settings");
  //       const settings: Settings = JSON.parse(settingsJson);
  //       console.log("settings: ", settings);
  //       // Directly set the libraries in the Zustand store
  //       const libraries: Library[] = settings.user_libraries;
  //       setUserLibraries(libraries);
  //     } catch (error) {
  //       console.error("Error fetching user settings:", error);
  //     }
  //   };
  //   // Fetch user settings on component mount
  //   fetchUserSettings();
  // }, [setUserLibraries]);

  return (
    <main>
      <div className="h-screen overflow-hidden flex text-neutral-400">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-grow h-full bg-neutral-950 pr-4 pb-1">
            <div className="bg-neutral-900 rounded-lg h-full flex flex-col justify-between">
              <div className="rounded-lg bg-neutral-900"></div>
              <div className="rounded-lg h-full">
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
