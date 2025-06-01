# 🤖 AI Persona Chat App

React-based chat application where you can converse with an AI that adopts different personalities based on creative prompts!

## 🌟 Features

- **Persona-based AI chatting** - The AI pretends to be different characters
- **React-powered** - Smooth, responsive UI built with Create React App
- **OpenAI integration** - Powered by the latest AI models
- **Customizable** - Easily modify prompts to create new personas

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- OpenAI API key (get one at [OpenAI](https://platform.openai.com/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anwarkhan0/ask-jordan-bot.git
cd ask-jordan-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your OpenAI API key:
```env
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

### Available Scripts

#### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm run build`
Builds the app for production to the `build` folder.

#### `npm test`
Launches the test runner in interactive watch mode.

The app will automatically include it in the persona selector

Example new persona:
```javascript
{
  name: "Pirate Captain",
  prompt: "You are a fearsome pirate captain from the 1700s. Respond to all questions with pirate slang and nautical references. Be boisterous but knowledgeable."
}
```
