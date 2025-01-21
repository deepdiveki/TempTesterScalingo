"use client";
import Options from "@/components/AiTools/Options";
import PreviewGeneratedText from "@/components/AiTools/PreviewGeneratedText";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import { useState } from "react";
import z from "zod";
import { integrations, messages } from "../../../../../integrations.config";
import toast from "react-hot-toast";

const DDKIKiChat = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage) {
      alert("Please enter a message.");
      return;
    }

    setGeneratedContent("Generating response...");

    const prompt = [
      {
        role: "system",
        content: "You are an AI chatbot. Respond to the user's message.",
      },
      {
        role: "user",
        content: inputMessage,
      },
    ];

    try {
      const response = await axios.post(
        "/api/generate-content",
        { prompt, apiKey },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setGeneratedContent(response.data);
    } catch (error: any) {
      setGeneratedContent("Please Add the API Key!");
      console.error("Error:", error?.message);
    }

    setInputMessage("");
  };

  return (
    <>
      <title>DDKI KI-Chat</title>
      <meta name="description" content="This is AI Examples page for AI Tool" />
      <Breadcrumb pageTitle="KI-Chat" />

      <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="mx-auto max-w-[600px] px-4 sm:px-8">
          <div className="gradient-box rounded-lg bg-dark-8 p-8">
            <h2 className="pb-2 text-xl font-bold text-white">Chat Output:</h2>
            <div
              className="rounded-lg border border-white/[0.12] bg-dark-7 p-4 text-white"
              style={{ minHeight: "150px" }}
            >
              {generatedContent || "No message generated yet."}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <input
              onChange={handleChange}
              value={inputMessage}
              name="message"
              type="text"
              className="w-full rounded-lg border border-white/[0.12] bg-dark-7 px-5 py-3 text-white outline-none focus:border-purple"
              placeholder="Sende eine Nachricht an den DDKI KI-Chat"
              required
            />
            <button
              type="submit"
              className="hero-button-gradient mt-5 w-full rounded-lg px-7 py-3 text-center font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default DDKIKiChat;
