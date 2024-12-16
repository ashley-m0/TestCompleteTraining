function foo()
{

  // Ugly way
  //Sys.Process("Notepad").Window("Notepad", "Untitled - Notepad", 1).Window("NotepadTextBox", "", 1).Keys("Hello from Memory.");
  
  // Using Name Mapping
  //NameMapping.Sys.NotepadApp.NotepadMainWindow.NotepadTextBox.Keys("Hello from Name Mapping.");
  
  // Using Aliases
  Aliases.NotepadTextBox.Keys("Hello from Aliases");
  
}