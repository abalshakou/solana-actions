 import { Telegraf, Markup } from 'telegraf';
 import * as dotenv from 'dotenv';

 dotenv.config();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

 if (!BOT_TOKEN) {
     throw new Error('TELEGRAM_BOT_TOKEN is not defined in .env');
 }

// Инициализация бота
const bot = new Telegraf(BOT_TOKEN);

// Команда /start с кнопкой
bot.start((ctx) => {
    ctx.reply(
        'Привет! Нажмите кнопку, чтобы перейти по ссылке:',
        Markup.inlineKeyboard([
            Markup.button.url('Перейти по ссылке', 'https://dial.to/devnet?action=solana-action:http://localhost:3000/api/actions/donate'),
        ])
    );
});

// Команда /link с кнопкой
bot.command('link', (ctx) => {
    ctx.reply(
        'Нажмите кнопку, чтобы перейти по ссылке:',
        Markup.inlineKeyboard([
            Markup.button.url('Перейти по ссылке', 'https://dial.to/devnet?action=solana-action:http://localhost:3000/api/actions/donate'),
        ])
    );
});

// Обработка текстовых сообщений
bot.on('text', (ctx) => {
    const text = ctx.message.text;
    if (text.toLowerCase().includes('ссылка')) {
        ctx.reply('Вот ваша ссылка: https://dial.to/devnet?action=solana-action:http://localhost:3000/api/actions/donate');
    } else {
        ctx.reply('Я не понимаю ваше сообщение. Используйте команду /link.');
    }
});

// Запуск бота
bot.launch();

console.log('Бот запущен...');