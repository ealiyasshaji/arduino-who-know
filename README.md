[![💻 Built at TinkerSpace](https://img.shields.io/badge/Built%20at-TinkerSpace-blueviolet?style=for-the-badge&label=%F0%9F%92%BBBuilt%20at&labelColor=turquoise&color=white)](https://tinkerhub.org/tinkerspace)
# Arduino WHO-KNOW? 🔌

Your comprehensive guide to Arduino circuit boards with detailed specifications, components, and compatible modules.

![Arduino WHO-KNOW?](https://img.shields.io/badge/Arduino-Guide-00979D?style=for-the-badge&logo=arduino&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Live Demo

Check out the live application: [Arduino WHO-KNOW?](https://frabjous-tartufo-5084c3.netlify.app)

## 📋 Table of Contents

- [Features](#-features)
- [Arduino Boards Included](#-arduino-boards-included)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔍 **Board Explorer**
- Browse through 25+ Arduino boards with detailed specifications
- High-quality board images with zoom functionality
- Comprehensive technical specifications for each board

### 🤖 **AI Project Assistant**
- Interactive chatbot that recommends Arduino boards based on your project description
- Smart analysis of project requirements (WiFi, sensors, size constraints, etc.)
- Instant board suggestions with detailed reasoning

### ⚖️ **Board Comparison Tool**
- Side-by-side comparison of any two Arduino boards
- Compare specifications, features, and capabilities
- Easy-to-read comparison tables

### 🔎 **Advanced Search**
- Search boards by name, microcontroller, or features
- Real-time filtering and results
- Intuitive search interface

### 📱 **Responsive Design**
- Fully responsive design that works on all devices
- Mobile-first approach with touch-friendly interactions
- Beautiful UI with smooth animations and transitions

## 🔧 Arduino Boards Included

Our database includes comprehensive information for these Arduino boards:

### **Classic Series**
- Arduino UNO R3 & R4
- Arduino Nano & Nano Every
- Arduino Mega 2560
- Arduino Leonardo
- Arduino Micro
- Arduino Pro Mini

### **IoT & Connectivity**
- Arduino MKR WiFi 1010
- Arduino MKR GSM 1400
- Arduino MKR NB 1500
- Arduino MKR WAN 1310
- Arduino MKR Fox 1200
- Arduino Nano 33 IoT
- Arduino Yún & Yún Rev 2

### **Professional & Industrial**
- Arduino Portenta H7
- Arduino Portenta C33
- Arduino Due
- Arduino Zero
- Arduino MKR Vidor 4000

### **Specialized Boards**
- Arduino Nicla Vision (Computer Vision)
- Arduino Nicla Sense ME (Environmental Sensing)
- Arduino Lilypad (Wearables)
- Arduino Esplora (Gaming/Interactive)
- Arduino Ethernet (Network Applications)

Each board entry includes:
- 📸 High-resolution images
- 🔧 Complete technical specifications
- 🧩 Compatible modules and shields
- 📝 Detailed component descriptions
- 💡 Use case recommendations

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ealiyasshaji/arduino-who-know.git
   cd arduino-who-know
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Usage

### Exploring Boards
1. **Browse the board list** on the left sidebar
2. **Search for specific boards** using the search bar
3. **Click on any board** to view detailed specifications
4. **Click on board images** to view them in full size

### Using the AI Assistant
1. **Click the chat button** in the bottom-right corner
2. **Describe your project** (e.g., "I want to build a WiFi-enabled temperature monitor")
3. **Get instant recommendations** with detailed explanations
4. **Click on suggested board names** to view their specifications

### Comparing Boards
1. **Select a board** from the sidebar
2. **Click "Compare with another board"**
3. **Choose a second board** to compare
4. **View side-by-side specifications**

## 📁 Project Structure

```
arduino-who-know/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── BoardComparison.tsx    # Board comparison tool
│   │   ├── BoardDisplay.tsx       # Main board display component
│   │   ├── BoardSelector.tsx      # Board selection sidebar
│   │   ├── ImageModal.tsx         # Image zoom modal
│   │   ├── ProjectAssistant.tsx   # AI chatbot assistant
│   │   └── Tabs.tsx              # Tab navigation component
│   ├── data/
│   │   └── arduinoBoards.ts      # Complete Arduino boards database
│   ├── types/
│   │   └── arduino.ts            # TypeScript type definitions
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and building
- **Deployment**: Netlify for hosting
- **Code Quality**: ESLint for code linting

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Arduino Boards
1. Fork the repository
2. Add board data to `src/data/arduinoBoards.ts`
3. Follow the existing data structure
4. Include high-quality images and complete specifications
5. Submit a pull request

### Improving Features
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Reporting Issues
- Use the GitHub Issues tab to report bugs
- Provide detailed information about the issue
- Include steps to reproduce the problem

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Arduino Community** for creating amazing open-source hardware
- **React Team** for the excellent frontend framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Netlify** for free hosting and deployment

## 📞 Contact

**Ealiyasshaji** - [GitHub Profile](https://github.com/ealiyasshaji)
**AnirudhK** - [GitHub Profile]((https://github.com/slothrulez)

Project Link: [https://github.com/ealiyasshaji/arduino-who-know](https://github.com/ealiyasshaji/arduino-who-know)

---

⭐ **Star this repository** if you find it helpful!

Made with ❤️ for the Arduino community
