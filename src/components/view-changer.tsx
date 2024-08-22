import { useState } from "react";
import { ListViewIcon } from "../icon/icons";

export default function ViewChanger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative  ">
      <div
        onClick={toggleDrawer}
        className="cursor-pointer flex items-center p-2 min-h-[50px] min-w-[50px] hover:scale-105 justify-center rounded-lg transition-all duration-300 transform  hover:bg-neutral-900 hover:brightness-150"
      >
        <ListViewIcon className="text-neutral-500 m-" />
      </div>

      {isOpen && (
        <div className="absolute z-20 p-1 top-0  right-12  bg-neutral-800 rounded-lg shadow-lg transition-all duration-300">
          <ul className="flex ">
            <li className="text-neutral-400 cursor-pointer flex items-center justify-center p-1 px-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:brightness-150 ">
              List
            </li>
            <li className="text-neutral-400 cursor-pointer flex items-center justify-center p-1 px-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:brightness-150">
              Grid
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
