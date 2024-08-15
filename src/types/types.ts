// This is the type I need to convert rust type to this format
interface Library {
  directory: string;
}

interface Settings {
  user_libraries: Library[];
}
