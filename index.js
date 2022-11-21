const TelegramApi = require("node-telegram-bot-api");
const { startOptions, managerOptions } = require("./otptions");

const token = "5412375881:AAFpKyiz4w_J9QVu63VJT7B6aMzkjGK1EUA";

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.setMyCommands([{ command: "/start", description: "Выбор роли" }]);

  bot.on("message", (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const userName = msg.chat.first_name;

    if (text === "/start") {
      // отправка сообщения пользователю по id чата
      return bot.sendMessage(chatId, `Привет, ${userName}!`, startOptions);
    }

    return bot.sendMessage(chatId, "Я тебя не понимаю :(");
  });

  bot.on("callback_query", (query) => {
    const data = query.data;
    const chatId = query.message.chat.id;

    switch (data) {
      case "participant":
        // 1. проверить в каких компаниях есть данный юзер
        // 2. предложить на выбор одну из компаний
        return bot.sendMessage(chatId, "Проверка на наличие вас в базе...");

      case "manager":
        // 0. регистрация новой компании или редактирование имеющейся
        // 1. проверить является ли юзер организатором
        // 2. если является
        return bot.sendMessage(chatId, "Хотите зарегестрировать новую компанию или редактировать уже имеющуюся?", managerOptions);
    }
  });
};

start();
