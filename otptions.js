module.exports = {
  startOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Участник", callback_data: "participant" },
          { text: "Организатор", callback_data: "manager" },
        ],
      ],
    }),
  },

  managerOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Новая компания", callback_data: "createNewGroup" },
          { text: "Существующая компания", callback_data: "editExistGroup" },
        ],
      ],
    }),
  },
};
