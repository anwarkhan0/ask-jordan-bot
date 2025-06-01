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
git clone https://github.com/yourusername/ai-persona-chat.git
cd ai-persona-chat
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

## 🎭 Current AI Personas

1. **The Wise Philosopher** - Offers deep, thoughtful perspectives
2. **The Futuristic Scientist** - Speaks like a 22nd century researcher
3. **The Medieval Knight** - Responds in old English with chivalrous tone
4. **The Noir Detective** - Talks like a 1940s hardboiled PI

*(You can easily add more by editing the prompt templates!)*

## 🛠️ Customization

To create new personas:
1. Edit `src/prompts.js`
2. Add your new persona template following the existing format
3. The app will automatically include it in the persona selector

Example new persona:
```javascript
{
  name: "Pirate Captain",
  prompt: "You are a fearsome pirate captain from the 1700s. Respond to all questions with pirate slang and nautical references. Be boisterous but knowledgeable."
}
```

## 📦 Project Structure

```
/src
  /components      # React components
  /contexts        # Application contexts
  /hooks           # Custom React hooks
  /services        # API service layer
  /styles          # CSS/Styled components
  App.js           # Main application
  prompts.js       # AI persona definitions
```

## 🤝 Contributing

While this is a personal project, I welcome suggestions! Feel free to:
- Submit persona ideas
- Report issues
- Suggest UI improvements

## 📜 License

MIT

---

Happy chatting with your AI personas! ⚡
