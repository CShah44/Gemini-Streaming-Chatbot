import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export async function POST(req: Request, res: Response) {
  const reqBody: {
    messages: any;
  } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest", {}),
    // prompt: prompt,
    messages: reqBody.messages,
  });

  return result.toDataStreamResponse();
}
