import Header from "../components/header";
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import { useUserStore } from "../lib/zustand/user-store";
import "./App.css";

function App() {
  const currentPage = useUserStore((state) => state.currentPage);
  console.log("currentPage: ", currentPage);
  // const setCurrentPage = useUserStore((state) => state.setCurrentPage);

  return (
    <main>
      <div className="h-screen flex text-neutral-400">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-grow h-full bg-neutral-950 pr-2 pb-1">
            <div className="bg-neutral-900 rounded-lg h-full flex flex-col justify-between">
              <div className=" rounded-lg bg-neutral-900"></div>
              <div className=" rounded-lg h-full"></div>
              <Player />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
