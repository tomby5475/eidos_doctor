import React from "react";

// Define message data for better maintainability
const messages = [
  {
    sender: "other",
    text: "Yes, please! Thank you! I'm sharing the link now ❤",
    avatar: "/photo-1.png",
  },
  {
    sender: "self",
    text: "Well, then why do we need mentors? Zoom or Meet now?",
  },
  {
    sender: "other",
    text: "Okay, so I've been looking for a new job for three months now. I need your advice on my portfolio. Can you help me? 😊",
    avatar: "/photo-1.png",
  },
  {
    sender: "self",
    text: "Let's do that! 💪",
  },
];

export const ImageSection = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 px-4 py-8 w-full">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.sender === "self" ? "flex-col items-end" : "items-end"} gap-2 w-full`}
        >
          {message.sender === "other" && (
            <div
              className="w-[30px] h-[30px] bg-cover bg-center rounded-full"
              style={{ backgroundImage: `url(${message.avatar})` }}
            />
          )}

          <div
            className={`flex flex-col ${message.sender === "self" ? "items-start" : "items-end"} ${message.sender === "self" && index === messages.length - 1 ? "w-[165px]" : "flex-1"}`}
          >
            <div className="flex items-end w-full">
              {message.sender === "other" && (
                <div className="flex flex-col w-px h-5 items-start">
                  <img
                    className="mb-[-0.32px] relative w-[16.42px] h-[20.32px] ml-[-5.00px] mr-[-10.42px]"
                    alt="Container"
                    src="/container.svg"
                  />
                </div>
              )}

              <div
                className={`px-3 py-1.5 rounded-[18px] ${
                  message.sender === "self"
                    ? "bg-[#0060d5] text-white"
                    : "bg-[#262628] text-label-colordarkprimary"
                } flex-1`}
              >
                <div className="font-['SF_Pro_Text-Regular',Helvetica] font-normal text-lg tracking-[-0.41px] leading-[22px]">
                  {message.text}
                </div>
              </div>

              {message.sender === "self" && (
                <div className="mr-[-0.90px] rotate-180 flex flex-col w-px h-5 items-start">
                  <img
                    className="mt-[-0.32px] -rotate-180 relative w-[16.42px] h-[20.32px] ml-[-5.00px] mr-[-10.42px]"
                    alt="Container"
                    src="/container-1.svg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};