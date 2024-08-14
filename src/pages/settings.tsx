import { useEffect, useState } from "react";

export default function Settings() {
  const [userDirs, setUserDirs] = useState<string[]>([]);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const directories = event.target.value.split("\n");
    setUserDirs(directories);
  };

  useEffect(() => {
    // TODO - Update database with userDirs using Tauri function
  }, userDirs);

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
          />
        </div>
      </div>
    </div>
  );
}
