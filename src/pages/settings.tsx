import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api";
import { debounce } from "lodash"; // Import debounce from lodash

export default function Settings() {
  const [userClientLibraries, setUserClientLibraries] = useState<Library[]>([]);
  const [initialLibraries, setInitialLibraries] = useState<Library[]>([]);

  // Fetch initial settings on component mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsJson: string = await invoke("fetch_settings");
        const settings: Settings = JSON.parse(settingsJson);

        const libraries = settings.user_libraries || [];
        setUserClientLibraries(libraries);
        setInitialLibraries(libraries); // Store initial state for comparison
      } catch (error) {
        console.error("Error fetching user settings:", error);
      }
    };

    fetchSettings();
  }, []);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // Convert directories into Library objects
    const directories = event.target.value.split("\n").filter(Boolean);
    const newLibraries = directories.map((directory) => ({
      directory,
    }));
    setUserClientLibraries(newLibraries);
  };

  useEffect(() => {
    const updateSettings = debounce(async () => {
      // Only update if there are changes
      if (
        JSON.stringify(userClientLibraries) !== JSON.stringify(initialLibraries)
      ) {
        // Optimistically update the backend
        const newSettings = {
          user_libraries: userClientLibraries,
        };

        try {
          await invoke("update_settings", { newSettings });
          console.log("Settings updated!");
          setInitialLibraries(userClientLibraries); // Update the initial state after successful sync
        } catch (error) {
          console.error("Failed to update settings:", error);
          setUserClientLibraries(initialLibraries); // Revert to previous state on failure
        }
      }
    }, 500);

    updateSettings();

    return () => {
      updateSettings.cancel();
    };
  }, [userClientLibraries, initialLibraries]);

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
            value={userClientLibraries.map((lib) => lib.directory).join("\n")}
          />
        </div>
      </div>
    </div>
  );
}
