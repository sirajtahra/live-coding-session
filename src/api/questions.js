import questions from "../mock/questions.json";
import { fakePromiseTimeoutResponse } from "./config";

/**
 * @returns {Promise<Question>}
 * @typedef {{id: string; name: string; category: string}[]} Question
 */
async function fetchQuestions() {
  const response = await fakePromiseTimeoutResponse(questions);
  return response.data;
}

export default fetchQuestions;
