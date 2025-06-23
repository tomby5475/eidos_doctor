import React from "react";

const messages = [
  {
    sender: "other",
    text: "Okay, so I've been looking for a new job for three months now. I need your advice on my portfolio. Can you help me? 😊",
    avatar: "/photo-1.png",
  },
  {
    sender: "self",
    text: "Well, then why do we need mentors? Zoom or Meet now?",
  },
  {
    sender: "other",
    text: "Yes, please! Thank you! I'm sharing the link now ❤️",
    avatar: "/photo-1.png",
  },
  {
    sender: "self",
    text: "Let's do that! 💪",
  },
];

export const ImageSection = (): JSX.Element => {
  // Track bubble counts for each sender type
  let otherBubbleCount = 0;
  let selfBubbleCount = 0;

  return (
    <div className="bg-crosses relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
      <div className="flex flex-col gap-6 px-4 py-8 max-w-[928px] mx-auto w-full md:gap-y-4">
        {messages.map((message, index) => {
          // Increment counters and determine desktop positioning
          let desktopTranslateClass = "";
          
          if (message.sender === "other") {
            otherBubbleCount++;
            desktopTranslateClass = otherBubbleCount === 1 ? "md:translate-x-28" : "md:translate-x-8";
          } else {
            selfBubbleCount++;
            desktopTranslateClass = selfBubbleCount === 1 ? "md:translate-x-[-48px]" : "md:translate-x-4";
          }

          return (
            <div
              key={index}
              className={`w-full flex ${
                message.sender === "self" ? "justify-end" : "justify-start"
              }`}
            >
              <div className={`flex items-end gap-2 md:gap-4 max-w-[600px] ${desktopTranslateClass}`}>
                {message.sender === "other" && message.avatar && (
                  <div
                    className="w-[30px] h-[30px] bg-cover bg-center rounded-full shrink-0"
                    style={{ backgroundImage: `url(${message.avatar})` }}
                  />
                )}

                <div
                  className={`px-3 py-1.5 rounded-[18px] ${
                    message.sender === "self"
                      ? "bg-[#0060d5] text-white"
                      : "bg-[#262628] text-label-colordarkprimary"
                  } w-full md:w-[267px]`}
                >
                  <p className="font-['SF_Pro_Text-Regular',Helvetica] font-normal text-lg tracking-[-0.41px] leading-[22px]">
                    {message.text}
                  </p>
                </div>

                {message.sender === "self" && (
                  <div className="w-[30px] h-[30px]" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};