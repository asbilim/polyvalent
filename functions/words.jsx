import axios from "axios";

const wordsEndpoint = process.env.BACKEND_URL + "/api/word-items/";
const wordItemsEndpoint = process.env.BACKEND_URL + "/api/word-items/";

export const getWords = async () => {
  try {
    const response = await axios.get(wordsEndpoint, {
      next: { tags: ["words"] },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const createWordItems = async (data) => {
  try {
    const response = await axios.post(wordItemsEndpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error creating word item:", error);
    throw error;
  }
};
