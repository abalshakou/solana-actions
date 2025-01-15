
# Project: Next.js + Telegram Bot with Solana Actions

This project combines a **Next.js** web application, a **Telegram bot**, and integration with the **Solana blockchain** using the **Solana Actions API**. The bot and web application can interact with Solana to perform actions like  sending transactions.

---

## 📋 Table of Contents
1. [Features](#-features)
2. [Technologies](#-technologies)
3. [Installation](#-installation)
4. [Running the Project](#-running-the-project)
5. [Solana Actions API Integration](#-solana-actions-api-integration)
6. [Project Structure](#-project-structure)
7. [Additional Commands](#-additional-commands)
8. [License](#-license)

---

## 🌟 Features
- **Next.js**: Server-side rendering and static site generation.
- **Telegram Bot**: Built using the `telegraf` library and TypeScript.
- **Solana Actions API**: Interact with the Solana blockchain to:
    - Send and receive transactions.
- **Integration**: The bot, Next.js, and Solana integration run simultaneously using `concurrently` or `PM2`.

---

## 🛠 Technologies
- [Next.js](https://nextjs.org/) — React framework.
- [Telegraf](https://telegraf.js.org/) — Telegram bot framework.
- [TypeScript](https://www.typescriptlang.org/) — Programming language.
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) — JavaScript API for Solana.
- [Concurrently](https://www.npmjs.com/package/concurrently) — Utility to run multiple commands concurrently.
- [PM2](https://pm2.keymetrics.io/) — Process manager for Node.js.

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your Telegram bot token and Solana network configuration:
      ```env
      TELEGRAM_BOT_TOKEN=your-bot-token
      ```

---

## 🏃 Running the Project

### Development
To run in development mode:
```bash
npm run dev
```

### Production
1. Build the project:
   ```bash
   npm run build
   ```

2. Run Next.js, the Telegram bot, and Solana integration simultaneously:
   ```bash
   npm run start:all
   ```

   Alternatively, use PM2 for process management:
   ```bash
   npm install pm2 -g
   pm2 start ecosystem.config.js
   ```

---

## 🔗 Solana Actions API Integration

The project uses the **Solana Web3.js** library to interact with the Solana blockchain. Here are the key functionalities:


### 1. **Send Transactions**
- The bot can send SOL tokens from one wallet to another.
- Example command in Telegram:
  ```
  /send <from-wallet> <to-wallet> <amount>
  ```

---

## 📂 Project Structure
```
.
├── telegram-bot/            # Telegram bot source code
│   ├── index.ts             # Main bot file

├── public/                  # Static files
├── src/                     
│   ├── app/                 # Next.js pages
│   │   └── api/             # Solana API endpoints
│   └── ...                  # Other pages
|
├── .env                     # Environment variables
├── ecosystem.config.js      # PM2 configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Documentation
```

---

## 🛠 Additional Commands

- **Run the bot separately**:
  ```bash
  npm run bot
  ```

- **Run Next.js separately**:
  ```bash
  npm run start
  ```

- **TypeScript type checking**:
  ```bash
  npx tsc --noEmit
  ```

- **Code formatting** (if using Prettier):
  ```bash
  npx prettier --write .
  ```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Report bugs or suggest improvements via [Issues](https://github.com/abalshakou/solana-actions/issues).
2. Submit Pull Requests with fixes or new features.

---
