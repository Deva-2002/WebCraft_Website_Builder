import dotenv from "dotenv";
dotenv.config();

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

import Anthropic from "@anthropic-ai/sdk";
import { getSystemPrompt } from "./prompt.ts";

const client = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: CLAUDE_API_KEY,
});

async function main() {
    client.messages.stream({
    messages: [
        {role: 'user',
        content: "create a basic html page of 15 lines"}
    ],
    model: 'claude-opus-4-1-20250805',
    max_tokens: 1024,
    system:getSystemPrompt()
}).on('text', (text) => {
    console.log(text);
});
}

main();
