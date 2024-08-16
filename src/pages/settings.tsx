import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api";
import { debounce } from "lodash";

export default function Settings() {
  const [initialLibraries, setInitialLibraries] = useState<Library[]>([]);
  const [textareaContent, setTextareaContent] = useState("");

  // Fetch initial settings on component mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsJson: string = await invoke("fetch_settings");
        const settings: Settings = JSON.parse(settingsJson);
        const libraries = settings.user_libraries || [];
        setInitialLibraries(libraries); // Store initial state for comparison
        // Initialize the textarea content
        setTextareaContent(libraries.map((lib) => lib.directory).join("\n"));
      } catch (error) {
        console.error("Error fetching user settings:", error);
      }
    };
    fetchSettings();
  }, []);
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaContent(event.target.value);
  };

  useEffect(() => {
    const updateSettings = debounce(async () => {
      const directories = textareaContent.split("\n").filter(Boolean);
      const newLibraries = directories.map((directory) => ({
        directory,
      }));
      // Only update if there are changes
      if (JSON.stringify(newLibraries) !== JSON.stringify(initialLibraries)) {
        // Optimistically update the backend
        const newSettings = {
          user_libraries: newLibraries,
        };
        try {
          await invoke("update_settings", { newSettings });
          console.log("Settings updated!");
          setInitialLibraries(newLibraries); // Update the initial state after successful sync
        } catch (error) {
          console.error("Failed to update settings:", error);
          setTextareaContent(
            initialLibraries.map((lib) => lib.directory).join("\n")
          ); // Revert to previous content on failure
        }
      }
    }, 500);
    updateSettings();
    return () => {
      updateSettings.cancel();
    };
  }, [textareaContent, initialLibraries]);

  return (
    <div>
      <div className="font-light pb-4">Settings</div>
      <div className="flex p-2 flex-row justify-between">
        <div className="pt-2 min-w-[250px]">Library Directories</div>
        <div className="flex flex-col w-full">
          <textarea
            className="bg-neutral-950 p-2 px-4 rounded-md outline-none resize-none"
            placeholder="Enter directories, one per line"
            rows={3}
            wrap="off"
            onChange={handleTextareaChange}
            value={textareaContent}
          />
        </div>
      </div>
    </div>
  );
}
