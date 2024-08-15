import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api";
import { useSettingStore } from "../lib/zustand/settings-store";

export default function Settings() {
  const [userClientLibraries, setUserClientLibraries] = useState<string[]>([]);

  // Use Zustand hook at the top level
  const userLibraries = useSettingStore((state) => state.userLibraries);
  console.log("userLibraries: ", userLibraries);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const directories = event.target.value.split("\n").filter(Boolean);
    setUserClientLibraries(directories);
  };

  // Initialize Settings
  useEffect(() => {
    if (userLibraries && Array.isArray(userLibraries)) {
      const libraryPaths = userLibraries.map((library) => library.directory);
      setUserClientLibraries(libraryPaths);
    }
  }, [userLibraries]);

  // Update Settings
  useEffect(() => {
    if (userLibraries && Array.isArray(userLibraries)) {
      const libraryPaths = userLibraries.map((library) => library.directory);
      if (
        JSON.stringify(userClientLibraries) !== JSON.stringify(libraryPaths)
      ) {
        console.log("userClientLibraries: ", userClientLibraries);
        const newSettings = { userLibraryPaths: userClientLibraries };
        invoke("update_settings", { newSettings })
          .then(() => {
            console.log("Settings updated!");
          })
          .catch((error) => {
            console.error("Failed to update settings:", error);
          });
      }
    }
  }, [userClientLibraries, userLibraries]);

  return (
    <div>
      <div className="font-light pb-4">Settings</div>
      <div className="flex p-2 flex-row justify-between">
        <div className="pt-2 min-w-[250px]">Library Directories</div>
        <div className="flex flex-col w-full">
          <textarea
            className="bg-neutral-950 p-2 px-4 rounded-md outline-none resize-none"
            placeholder="Enter directories, one per line"
            rows={4}
            onChange={handleTextareaChange}
            value={userClientLibraries.join("\n")}
          />
        </div>
      </div>
    </div>
  );
}
