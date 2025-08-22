import dotenv from "dotenv";
dotenv.config();
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: CLAUDE_API_KEY,
});
//till part 3 done
async function main() {
    await client.messages.stream({
        messages: [{ role: 'user', content: "Hello" }],
        model: 'claude-opus-4-1-20250805',
        max_tokens: 1024,
    }).on('text', (text) => {
        console.log(text);
    });
}
main();
//# sourceMappingURL=index.js.map