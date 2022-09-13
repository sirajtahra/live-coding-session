import submissions from "../mock/submissions.json";
import { fakePromiseTimeoutResponse } from "./config";

/**
 * @returns {Promise<Submission>}
 * @typedef {{questionId: string; status: "CORRECT"|"INCORRECT"|"PARTIALLY_CORRECT"}[]} Submission
 */
async function fetchSubmissions() {
  const response = await fakePromiseTimeoutResponse(submissions);
  return response.data;
}

export default fetchSubmissions;
