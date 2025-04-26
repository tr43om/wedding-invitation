import { FormData } from "./types";

// Обновляем функцию sendToTelegram для лучшей обработки ошибок
export async function sendToTelegram(data: FormData) {
  try {
    // Получаем переменные окружения

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    // Проверяем наличие переменных окружения
    if (!botToken || !chatId) {
      console.warn(
        "Telegram configuration is missing. Using mock response for development."
      );
      // В режиме разработки или если переменные не настроены, просто возвращаем успешный ответ
      return { success: true, mock: true };
    }

    // Форматируем сообщение
    const message = `
🎉 Новая заявка на свадьбу!

👤 Гость: ${data.mainGuest}
✅ Присутствие: ${data.attending ? "Да" : "Нет"}

${
  data.additionalGuests && data.additionalGuests.length > 0
    ? `👥 Дополнительные гости:
${data.additionalGuests
  .filter((g) => g.name.trim() !== "")
  .map((g) => `- ${g.name}`)
  .join("\n")}`
    : ""
}

🍷 Предпочтения:
${data.preferences.strongAlcohol ? "- Крепкий алкоголь\n" : ""}${
      data.preferences.redWine ? "- Красное вино\n" : ""
    }${data.preferences.whiteWine ? "- Белое вино" : ""}
`.trim();

    // Отправляем сообщение в Telegram
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Telegram API error:", response.status, errorData);
      throw new Error(`Telegram API error: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    // Возвращаем ошибку, но не прерываем выполнение
    return { success: false, error: String(error) };
  }
}
