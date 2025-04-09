# 🎮 Simon Say Game

## 📌 About the Game

The **Simon Say Game** is a fun and interactive memory game that challenges players to repeat a growing sequence of colors. The game starts with a single color flashing on the screen. Your task is to remember it and click the same color. With every new level, the game adds one more color to the sequence, making it increasingly difficult.

The goal is to **match the entire color sequence in order** without making a mistake. If you click the wrong button, the game ends, and your score (the highest level reached) is displayed. You can restart the game anytime by pressing any key.

It’s a great way to test your memory and reflexes with a colorful and responsive interface!

---

## ⚙️ How the Game Works (As Coded)

- Game waits for **any keypress** to start.
- When started:
  - `levelUp()` is triggered.
  - A random color is picked from: `["palevioletred", "lawngreen", "yellow", "lightskyblue"]`.
  - That color is added to `gameSequence` and flashed visually with `.gameflash`.

- On each **button click**:
  - Button gets a quick `.userflash` animation.
  - Button's `id` is pushed to `userSequence`.
  - `checkAns()` compares user's input to `gameSequence`.

- Inside `checkAns()`:
  - ✅ If the latest input is correct:
    - If full sequence is matched → `levelUp()` after 1 sec.
  - ❌ If input is wrong:
    - Show **"Game Over"** in `<h2>`.
    - Log game over in console.
    - Call `reset()` to reset all game data.

- Game restarts on the next keypress.

---

## 🕹️ How to Play

1. **Open the game in your browser.**
2. Press **any key** to start.
3. Watch carefully — a color will flash. **Remember it!**
4. Click the **same color button**.
5. The next level begins with the **same sequence + one new color**.
6. Continue clicking the full sequence **in the correct order**.
7. If you make a mistake, the game ends and shows your level as your score.
8. Press any key again to play a new game.

---

Enjoy testing your memory skills with this classic and colorful Simon Say Game!
