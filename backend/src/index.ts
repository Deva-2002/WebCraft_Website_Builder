import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { BASE_PROMPT, getSystemPrompt } from "./prompt.js";

const app = express();
app.use(express.json());
import { basePrompt as nodeBasePrompt } from "./default/node.js";
import { basePrompt as reactBasePrompt } from "./default/react.js";

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

import Anthropic from "@anthropic-ai/sdk";
// import { getSystemPrompt } from "./prompt.ts";

const anthropic = new Anthropic({
    // defaults to process.env["ANTHROPIC_API_KEY"]
    apiKey: CLAUDE_API_KEY,
});

app.post("/template", async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const response = await anthropic.messages.create({
            messages: [{ role: "user", content: prompt }],
            model: "claude-opus-4-1-20250805",
            max_tokens: 200,
            system: "Return either node or react based on what do you think this project should be. Only return a single word either 'node' or 'react'. Do not return anything extra"
        });

        const firstBlock = response.content[0];
        if (!firstBlock) {
            console.error("Empty response from LLM");
            return res.status(500).json({ message: "No response from model" });
        }

        const answer = (firstBlock.type === "text" ? firstBlock.text.trim().toLowerCase() : "").replace(/\W/g, "");

        if (answer === "react") {
            return res.json({
                prompts: [
                    BASE_PROMPT,
                    `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`
                ],
                uiPrompts: [reactBasePrompt]
            });
        }

        if (answer === "node") {
            return res.json({
                prompts: [
                    BASE_PROMPT,
                    `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${nodeBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`
                ],
                uiPrompts: [nodeBasePrompt]
            });
        }

        return res.status(403).json({ message: "You cant access this" });

    } catch (err) {
        console.error("Error in /template:", err);
        res.status(500).json({ message: "Internal server error", err });
    }
});


app.post('/chat', async (req, res) => {
    const message = req.body.message;

    const response = await anthropic.messages.create({
        messages: message,
        model: "claude-opus-4-1-20250805",
        max_tokens: 200,
        system: getSystemPrompt()
    });

    // console.log(response);

    res.json({

    })

})



app.listen(3000, () => {
    console.log('listening to port 3000')
})
