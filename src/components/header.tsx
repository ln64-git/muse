import React from "react";

export default function Header() {
  return (
    <>
      <div className="bg-neutral-950 h-[76px] flex items-center">
        <button className="p-2 ml-4 text-xl hover:filter hover:brightness-120  rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-neutral-900 hover:shadow-lg ">
          Muse
        </button>
      </div>
    </>
  );
}
