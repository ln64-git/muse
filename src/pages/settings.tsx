export default function Settings() {
  return (
    <div>
      <div className="font-light pb-4">Settings</div>
      <div className="flex p-2 flex-row justify-between">
        <div className="pt-2 min-w-[250px]">Library Directories</div>
        <div className="flex flex-col w-full">
          <textarea
            className="bg-neutral-950  p-2 px-4 rounded-md  outline-none resize-none"
            placeholder=""
            rows={4}
          />
        </div>
      </div>
    </div>
  );
}
