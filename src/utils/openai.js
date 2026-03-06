import OpenAI from "openai";
import { VITE_GROQ_API_KEY } from "./constants";
const groq = new OpenAI({
  apiKey: VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export default groq;
