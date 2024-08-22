export default function ArtistListView({}: {}) {
  return (
    <div className="p-2 max-w-5xl mx-auto">
      <div className="flex items-center p-2 rounded-lg mb-2 cursor-pointer transition-transform duration-300 ease-out bg-neutral-800 hover:bg-neutral-700">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out bg-gradient-to-br from-neutral-800 to-neutral-700"></div>
        <div className="ml-4 text-neutral-300">Artist Name</div>
      </div>
    </div>
  );
}
