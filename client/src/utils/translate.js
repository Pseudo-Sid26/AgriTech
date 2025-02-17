const API_KEY = "AIzaSyBxZA3gLH7po1pkDO6tN1_oodFJ6scp3iQ"; // Replace with your actual key

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: "text",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Return original text in case of error
  }
};
