# 2048 Game

A web-based implementation of the popular 2048 puzzle game built with HTML, CSS, and JavaScript.

> Beginner-friendly overview: You move the numbered squares with your keyboard's arrow keys. When two matching numbers bump into each other, they merge into a bigger number. Keep going to try to make 2048! You can open `index.html` in any browser—no setup needed.

## 🟢 Quick Start (No Setup Needed)

1. Download all the files in this folder to your computer.
2. Find the file named `index.html`.
3. Double‑click it to open in your web browser (Chrome, Edge, Firefox, etc.).
4. Click “Start Game” and play using your arrow keys.

If it doesn’t open: Right‑click `index.html` → Open with → choose your browser.

## 🎮 Game Overview

2048 is a single-player sliding block puzzle game where the objective is to slide numbered tiles on a grid to combine them and create a tile with the number 2048. The game continues beyond this point, allowing players to achieve higher scores.

## 🌟 Features

- **Classic 2048 Gameplay**: Slide tiles in four directions using arrow keys
- **Score Tracking**: Real-time score updates as you merge tiles
- **Responsive Design**: Clean, modern interface that works on different screen sizes
- **Visual Feedback**: Color-coded tiles that change appearance based on their value
- **Game States**: Welcome screen, active gameplay, and game over screen
- **Restart Functionality**: Easy restart option when the game ends
- **Smooth Animations**: Visual transitions for better user experience

## 🚀 How to Play

1. **Start the Game**: Click the "Start Game" button on the welcome screen
2. **Move Tiles**: Use the arrow keys on your keyboard:
   - ⬅️ Left Arrow: Move tiles left
   - ➡️ Right Arrow: Move tiles right
   - ⬆️ Up Arrow: Move tiles up
   - ⬇️ Down Arrow: Move tiles down
3. **Merge Tiles**: When two tiles with the same number touch, they merge into one
4. **Score Points**: Each merge adds the new tile's value to your score
5. **Reach 2048**: Try to create a tile with the number 2048 to win
6. **Continue Playing**: The game continues even after reaching 2048

## 🎯 Game Rules

- The game is played on a 4×4 grid
- Each turn, a new tile (2 or 4) appears in a random empty spot
- When tiles with identical numbers are adjacent, they can be merged into one tile
- The merged tile's value is the sum of the two original tiles
- After each move, a new tile appears if the move was valid
- The game ends when no more moves are possible (grid is full and no merges available)

## 🛠️ Technical Implementation

### File Structure

```
2048 Game/
├── index.html      # Main HTML structure
├── style.css       # Stylesheets and visual design
├── script.js       # Game logic and functionality
└── README.md       # Project documentation
```

### Simple File Guide (What each file does)

- `index.html`: The page you open in your browser. It shows the title, score, grid, and buttons.
- `style.css`: Makes the game look nice (colors, sizes, positions).
- `script.js`: The “brains” of the game—how tiles move, merge, and how the score updates.
- `README.md`: This help document.

### Technologies Used

- **HTML5**: Semantic markup and game grid structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic, event handling, and DOM manipulation

### Key Components

#### HTML (`index.html`)

- Semantic HTML structure with proper accessibility
- 4×4 grid layout using individual tile elements
- Score display and game state overlays
- Start screen and game over modals

#### CSS (`style.css`)

- Modern, clean design with carefully chosen color palette
- Grid layout using CSS Grid for perfect tile alignment
- Responsive design principles
- Color-coded tiles for different values (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048)
- Smooth hover effects and transitions

#### JavaScript (`script.js`)

- **Game State Management**: Board representation using 2D array
- **Movement Logic**: Efficient tile sliding and merging algorithms
- **Board Rotation**: Clever technique to handle all four directions using a single movement function
- **Random Tile Generation**: 90% chance for value 2, 10% chance for value 4
- **Game Over Detection**: Checks for available moves and empty spaces
- **Event Handling**: Keyboard input processing for arrow keys

## 🚀 Getting Started

### Option 1: Direct File Opening

1. Download all project files
2. Open `index.html` in your web browser
3. Start playing immediately

### Option 2: Git clone (Recommended)

1. Open your terminal (Command Prompt, PowerShell, or Git Bash)
2. Run the following command to clone the repository:
   ```sh
   git clone https://github.com/Bhavani-Rupa/2048-Game-using-HTML-CSS-JavaScript
   ```
3. Navigate into the project folder:
   ```sh
   cd 2048-game
   ```
4. Open `index.html` in your web browser to start playing

### Simple Controls and Goal

- Use your keyboard arrow keys to slide the tiles.
- Matching numbers combine (2+2→4, 4+4→8, …).
- Your score increases with each merge.
- Try to create a tile with the number 2048. You can keep playing beyond that!

### Tips for Beginners

- Keep your largest number in a corner if you can.
- Avoid swiping randomly—think about how tiles will combine.
- If a move doesn’t change anything, a new tile won’t appear.

## ❓ FAQ

- Do I need to install anything? No. Just open `index.html` in your browser.
- It opens as text instead of a game—what happened? You probably opened it in a code editor. Right‑click `index.html` → Open with → choose your browser.
- The game doesn’t respond to keys. Click anywhere inside the page once, then try the arrow keys again.
- How do I restart? When the game ends, click “Start New Game,” or refresh the page.
- Can I play on my phone? Yes, it loads, but this version is optimized for keyboard play.

## 🧰 Troubleshooting

- If nothing happens when double‑clicking `index.html`, try opening your browser first, then drag and drop `index.html` into it.
- If you still see nothing, check that all files (`index.html`, `style.css`, `script.js`) are in the same folder.

**Enjoy playing 2048! 🎮**
