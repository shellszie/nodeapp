import OpenAI from "openai";
const openai = new OpenAI();

// console.log(process.env);
// console.log("api key = " + $OPENAI_API_KEY);

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);
console.log(completion.choices);