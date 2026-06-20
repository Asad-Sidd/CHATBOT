
export const knowledgeBase = {
  // ==========================================
  // CORE CONCEPTS & SETUP
  // ==========================================
  
  "What is Visual Studio Code (VS Code)?":
    "Visual Studio Code (VS Code) is a free, lightweight code editor built by Microsoft. Unlike a heavy IDE, it’s designed to be fast and modular. Out of the box, it comes with built-in Git support, an integrated terminal, powerful debugging tools, and access to a massive extension marketplace to customize your workflow.",

  "Why should I use VS Code over other editors?":
    "Developers love VS Code because it is incredibly fast and supports almost every programming language imaginable. It features smart IntelliSense for code completion, easy-to-use debugging capabilities, and can be heavily customized through thousands of third-party extensions.",

  "How do I install and set up VS Code?":
    "First, download VS Code from the official website and run the installer for your operating system. Once installed, it's super handy to sign in with your GitHub or Microsoft account to sync your settings across devices. To get started coding, navigate to 'File → Open Folder' and select your project directory.",

  "What is the difference between a workspace and a folder?":
    "In VS Code, a folder is just a single project directory on your computer. A workspace, however, is a customized environment that can include one or multiple folders, along with shared settings and configurations specific to that group of projects.",

  "What is the best initial setup for beginners?":
    "If you're just starting out, keep it simple: pick a color theme you like, install language support for what you're coding in, and grab Prettier for formatting and ESLint for finding errors. Be sure to enable Git integration, turn on 'Format on Save', and learn the shortcut to open the integrated terminal.",

  "What does an advanced VS Code setup look like?":
    "Power users often configure custom launch.json and tasks.json files for complex builds. An advanced setup might also utilize Dev Containers to create reproducible Docker environments, enable global settings sync, and establish automated CI tasks along with workspace-specific extension recommendations.",

  "How should I go about learning VS Code effectively?":
    "The best way to learn is by building small projects and forcing yourself to use the editor's features. Make a habit of using the Explorer and Search views daily, commit your code frequently using the Source Control tab, practice setting breakpoints for debugging, and only install extensions you actually need.",

  // ==========================================
  // INTERFACE & NAVIGATION
  // ==========================================

  "What is the Activity Bar?":
    "The Activity Bar is the narrow strip on the far left side of the window. It contains icons that let you quickly switch between the main views of the editor, such as the Explorer, Search, Source Control, Run and Debug, and Extensions panels.",

  "What is the Explorer view used for?":
    "The Explorer, located in the left sidebar, is your file manager. It displays your currently open files and folders, allowing you to browse your project, create or delete files, and manage your entire directory structure right from the editor.",

  "How is the Search view different from the Explorer?":
    "While the Explorer simply shows you a list of your files, the Search view allows you to search for specific text across all the files in your project. You can refine these searches using regular expressions (regex), case sensitivity, and specific folder scopes.",

  "How do I search across my entire project?":
    "To open the global search, press Ctrl+Shift+F on Windows/Linux or Cmd+Shift+F on Mac. Type your search term in the box, apply any filters (like case matching or regex), and hit Enter to see all occurrences.",

  "How can I use Regular Expressions (Regex) in search?":
    "When you have the Search view open, click the '.*' icon located inside the search bar to enable regular expressions. This allows you to search for complex text patterns and even use capture groups for advanced find-and-replace operations.",

  "What is the Command Palette and why is it useful?":
    "The Command Palette is arguably the most powerful feature in VS Code; it’s a searchable menu that lets you run almost any command without needing your mouse. You can open it by pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac).",

  "How do I use the Command Palette?":
    "Once you press Ctrl+Shift+P to open it, simply start typing what you want to do (for example, typing 'Format Document' or 'Git: Commit'). Select the correct command from the dropdown list and press Enter to execute it.",

  "What is Quick Open?":
    "Quick Open is a fast way to jump to any file in your workspace without hunting through the Explorer. Just press Ctrl+P (or Cmd+P on Mac), start typing the name of the file you want, and hit Enter.",

  "What are the most essential keyboard shortcuts?":
    "To speed up your workflow, memorize these: Ctrl+P to use Quick Open, Ctrl+Shift+P to access the Command Palette, Ctrl+` (backtick) to toggle the Integrated Terminal, Ctrl+Shift+F for global Search, and Ctrl+B to quickly show or hide the sidebar.",

  // ==========================================
  // CODING, FORMATTING & TERMINAL
  // ==========================================

  "What is IntelliSense?":
    "IntelliSense is Microsoft's intelligent code completion tool. As you type, it provides smart auto-completions, parameter hints for functions, and detailed symbol information to help you write code faster and with fewer errors.",

  "Why isn't IntelliSense working, and how do I enable it?":
    "IntelliSense is usually enabled by default. If it's not working, double-check that your language services (like JavaScript or TypeScript) are active, and ensure that the file you're working on is set to the correct language mode in the bottom right corner of the editor.",

  "How do I automatically format my code?":
    "You can format your active document by pressing Shift+Alt+F on Windows/Linux or Shift+Option+F on Mac. For an even smoother workflow, you can configure your settings to automatically format your code every time you save the file.",

  "What is the difference between a linter and a formatter?":
    "A linter scans your code for errors, bugs, and stylistic rules to ensure code correctness. A formatter, on the other hand, just rewrites the layout of your code (fixing whitespace, indentation, and structure). Most professional setups use both together.",

  "What is Prettier?":
    "Prettier is a highly popular, opinionated code formatter that enforces a consistent style across your entire codebase. Developers usually pair it with a linter like ESLint to handle both formatting and code correctness.",

  "What is ESLint?":
    "ESLint is a widely used linter specifically for JavaScript and TypeScript that analyzes your code to find problems. Depending on how you configure it, ESLint can even automatically fix many of the issues it finds.",

  "How do I open and use the Integrated Terminal?":
    "You can bring up the built-in terminal by pressing Ctrl+` (the backtick key) or by navigating to 'View → Terminal' in the top menu. This saves you from having to switch back and forth between your editor and a separate command line window.",

  "How do I run NPM scripts within VS Code?":
    "Open your integrated terminal and run 'npm install' to grab your dependencies. After that, you can run commands like 'npm run <script_name>'. If you have the right extensions installed, you can also run scripts by clicking a 'Run' button directly inside your package.json file.",

  // ==========================================
  // DEBUGGING & CONFIGURATION
  // ==========================================

  "What does debugging in VS Code actually do?":
    "The debugging tool allows you to run your code while having full control over its execution. You can pause the program using breakpoints, step through the code line-by-line, watch how variable values change, and inspect the call stack to track down bugs.",

  "How do I set a breakpoint for debugging?":
    "To pause your code at a specific line, simply click in the blank space (the left margin) right next to the line number. A red dot will appear, representing the breakpoint. You can then switch to the Run and Debug view to launch your session.",

  "What is the launch.json file used for?":
    "The launch.json file is VS Code's dedicated configuration file for debugging. It contains the instructions that tell the editor exactly how to launch your application, which environments to use, and what parameters to pass when starting a debug session.",

  "What is the tasks.json file used for?":
    "The tasks.json file is used to define custom build and run tasks—like compiling code, running automated tests, or triggering a linter. Once defined, you can easily execute these tasks from the Command Palette or the terminal without typing out long commands.",

  "What is the .vscode folder?":
    "The .vscode folder is a hidden directory automatically created in your workspace to hold project-specific configurations. This is typically where you'll find your settings.json, launch.json, tasks.json, and files that recommend specific extensions for the project.",

  "How do I edit my settings using the settings.json file?":
    "To edit your raw JSON configuration, open the Command Palette (Ctrl+Shift+P) and type 'Preferences: Open Settings (JSON)'. This allows you to directly edit the key-value pairs that control the editor's behavior.",

  "What is the difference between User Settings and Workspace Settings?":
    "User settings are applied globally to every instance of VS Code you open. Workspace settings are saved within a specific project's .vscode folder and will only apply when you are working inside that specific workspace, overriding the global User settings.",

  "What are .env files and how do I use them?":
    "A .env file is used to securely store sensitive environment variables (like API keys or database passwords) locally. VS Code and various tools can read from this file, but it is critical that you add .env to your .gitignore so you don't accidentally commit your secrets to a public repository.",

  "What is the difference between a compiler and an interpreter?":
    "While not strictly a VS Code feature, it's an important concept: A compiler translates all of your source code into executable machine code before it runs. An interpreter translates and executes your code line-by-line on the fly. VS Code supports both types of languages through extensions.",

  // ==========================================
  // SOURCE CONTROL (GIT)
  // ==========================================

  "What does Source Control mean in VS Code?":
    "The Source Control view is VS Code's visual interface for Git. It provides an easy way to see exactly which files have changed, view line-by-line differences, write commit messages, and push or pull code from remote repositories like GitHub.",

  "How do I initialize a new Git repository?":
    "Open the Source Control view in the Activity Bar and click the 'Initialize Repository' button. Alternatively, you can just open the integrated terminal and run the standard 'git init' command.",

  "How do I ignore files so Git doesn't track them?":
    "You use a file called .gitignore to list the names of files or folders you want Git to completely ignore. In VS Code, you just create a new file named .gitignore and type the paths in like any standard text file.",

  "What does it mean to stage changes, and how do I do it?":
    "Staging is the process of preparing files for a commit. In the Source Control panel, hover over the files listed under 'Changes' and click the '+' icon to move them into the 'Staged Changes' area, getting them ready to be committed.",

  "How do I commit my code?":
    "Once you have staged your files in the Source Control view, type a brief, descriptive message into the message box at the top of the panel, and then click the 'Commit' button to save that snapshot to your local repository.",

  "How do I push my commits to a remote repository?":
    "After you have committed your changes locally, click the '...' (More Actions) menu in the top right of the Source Control panel and select 'Push'. You can also achieve this using Git lens commands or the terminal.",

  "What does 'git diff' do and how do I see it?":
    "A 'git diff' highlights the exact line-by-line differences between your current changes and the last committed version. In VS Code, simply clicking on any modified file in the Source Control view will open a split window showing the old code next to your new changes.",

  // ==========================================
  // EXTENSIONS, THEMES & REMOTE WORK
  // ==========================================

  "What are VS Code extensions?":
    "Extensions are add-ons you can install to give the editor new capabilities. They provide support for new programming languages, frameworks, custom linters, formatters, debuggers, and aesthetic UI themes.",

  "How do I install a new extension?":
    "Click on the Extensions icon in the Activity Bar, use the search bar to find the specific tool or language support you need, and click the 'Install' button. Occasionally, you might need to reload the editor for the changes to take effect.",

  "What are Themes and how do I change them?":
    "Themes completely alter the colors and overall aesthetic of your editor's interface. You can browse and select new ones by opening the Command Palette and typing 'Preferences: Color Theme', or by navigating to it through the Settings menu.",

  "How do I change the editor font or font size?":
    "Open up your Settings (Ctrl+,) and type 'font family' or 'font size' into the search bar at the top to adjust your text preferences. You can also make these changes directly inside your settings.json file.",

  "What is Settings Sync?":
    "Settings Sync is a feature that backs up your customized VS Code setup (themes, shortcuts, extensions, and snippets) to the cloud using your Microsoft or GitHub account. This allows you to log into a new computer and instantly have your exact layout ready to go.",

  "What is Remote Development in VS Code?":
    "Remote Development allows you to run your UI locally while your actual source code and runtime environment are hosted elsewhere. This could be inside a local Docker container, a WSL Linux environment, or a completely remote server accessed via SSH.",

  "What are Dev Containers?":
    "Dev Containers use Docker to create a completely isolated and reproducible development environment. This is fantastic for teams because it guarantees everyone is working with the exact same toolchain, dependencies, and OS, regardless of what physical machine they are using.",

  "What is WSL (Windows Subsystem for Linux)?":
    "WSL is a compatibility layer that allows you to run a full Linux environment natively on a Windows machine. VS Code integrates seamlessly with WSL, letting you write code on Windows but execute it in a true Linux context for a much smoother workflow.",

  "How do I code on a remote server using SSH?":
    "By installing the 'Remote - SSH' extension, you can connect to any remote server that you have SSH access to. This allows you to browse folders, edit files, and run terminal commands on the remote machine as if the code was sitting right on your own hard drive."
};

export default knowledgeBase;