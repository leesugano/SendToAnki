# Anki Flashcard Sender

## Overview

Anki Flashcard Sender is a Chrome extension that allows users to send selected text from any webpage directly to Anki as flashcards. This project showcases my skills in HTML, CSS, and JavaScript, and utilizes the Chrome extension API.

![Anki Flashcard Sender](/Anki%20Flashcard%20Sender.png)

## Features

- 📚 Quickly create Anki flashcards from selected text
- 📋 Customizable front and back fields
- 📁 Choose the deck for your flashcards
- ⚙️ Remembers the last used deck for convenience

## Technologies Used

- **HTML**: For structuring the popup interface
- **CSS**: For styling the popup and content
- **JavaScript**: For extension logic and Anki integration
- **Chrome Extension API**: For context menus and popup functionality

## How to Use

1. **Select Text**: Highlight the text you want to send to Anki.
2. **Right-click**: Choose the **Anki Flashcard Sender** option.
3. **Popup**: The extension popup will appear.
4. **Enter Back Field**: Fill in the back field of your flashcard.
5. **Choose Deck**: Select the desired Anki deck.
6. **Send**: Click the **Send** button to add the flashcard to Anki.

## Development

1. **HTML**: Created the structure for the popup interface.
2. **CSS**: Applied styles to ensure a clean and user-friendly design.
3. **JavaScript**:
   - Implemented context menu functionality to capture selected text.
   - Interacted with the AnkiConnect API to send flashcards.
   - Managed user input and deck selection.

### Folder Structure

```plaintext
├── manifest.json       # Extension configuration
├── background.js       # Background script for context menu
├── content.js          # Script to handle selected text
├── popup.html          # HTML for the extension popup
└── popup.js            # JavaScript for popup functionality
```

## Skills Demonstrated

- **Extension Development**: Utilized Chrome Extension API for building a functional browser extension.
- **Web Development**: Applied HTML, CSS, and JavaScript to create an interactive user interface.
- **API Integration**: Integrated with AnkiConnect API for seamless flashcard creation.

## Future Enhancements

🚀 Add support for multiple Anki note types.
🌐 Enable usage on multiple browsers.
📊 Implement usage statistics and analytics.

## Author

Developed by Lee Sugano.