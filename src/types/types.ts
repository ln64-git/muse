interface Track {
  id: string; // Unique identifier for the track
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: number; // Duration in seconds
  year: number;
  trackNumber: number;
  albumArtUrl?: string; // Optional URL to the album art image
  filePath: string; // Path to the MP3 file
}

// This is the type I need to convert rust type to this format
interface Library {
  id: string;
  directory: string;
  name?: string;
  tracks?: Track[];
}

interface Settings {
  user_libraries: Library[];
}
