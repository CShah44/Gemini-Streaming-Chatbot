"use client";

import { useChat } from "ai/react";
import { Bot, Loader2, Send, User2 } from "lucide-react";
import Markdown from "./components/markdown";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/gemini",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-12 text-black space-y-5">
      {RenderForm()}
      {RenderMessages()}
    </main>
  );

  function RenderForm() {
    return (
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-row gap-2 items-center h-full"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={isLoading ? "Generating..." : "Ask Something..."}
          disabled={isLoading}
          className="text-right focus:placeholder-transparent border-b border-dashed outline-none w-full px-4 py-2 text-blue-800 disabled:bg-transparent"
        />
        <button
          type="submit"
          className="rounded-full shadow-md border flex flex-row"
        >
          {isLoading ? (
            <Loader2
              onClick={stop}
              className="p-3 w-10 h-10 stroke-stone-700 animate-spin"
            />
          ) : (
            <Send className="p-3 w-10 h-10 stroke-stone-700" />
          )}
        </button>
      </form>
    );
  }

  function RenderMessages() {
    return (
      <div className="flex flex-col-reverse w-full text-left gap-3 whitespace-pre-wrap">
        {messages.map((message, index) => (
          <div
            key={index}
            className={` ml-10 relative p-4 shadow-md rounded-md ${
              message.role === "user" ? "bg-stone-300" : "bg-stone-50"
            }`}
          >
            <Markdown text={message.content} />
            {message.role === "user" ? (
              <User2 className="absolute top-2 -left-10 p-1 shadow-md rounded-full" />
            ) : (
              <Bot
                className={`${
                  isLoading && index === messages.length - 1 && "animate-bounce"
                } absolute top-2 -left-10 p-1 shadow-md rounded-full`}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}
