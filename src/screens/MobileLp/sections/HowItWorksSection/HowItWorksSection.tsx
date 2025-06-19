import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Steps data
  const steps = [
    { number: "1", text: "Become a member of the Eidos Design Community" },
    { number: "2", text: "Submit your portfolio and CV" },
    { number: "3", text: "Get detailed and actionable feedback on your work" },
  ];

  // Benefits data
  const benefits = [
    { text: "Fast, individualized, private video report" },
    { text: "Action items in writing" },
    { text: "Quality you've never seen before" },
  ];

  // Cards data
  const processCards = [
    {
      bgImage: "/ellipse-8.svg",
      iconSrc: "/vector-10.svg",
      iconClass: "w-[24px] h-[22px]",
      iconPositionClass: "top-3 left-3",
      title: "Subscribe",
      content: (
        <>
          <span className="font-bold text-[#565f6e]">
            This service is completely free of charge.
          </span>
          <span className="font-medium text-[#565f6e]">
            <br />
            The only requirement is that you be a member of the{" "}
          </span>
          <span className="font-medium text-[#783cf5] underline">
            <a
              href="https://eidosdesign.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5a28c6]"
            ></a>
            Eidos Design
          </span>
          <span className="font-medium text-[#565f6e]"> community.</span>
        </>
      ),
    },
    {
      bgImage: "/ellipse-8.svg",
      iconSrc: "/vector-8.svg",
      iconPositionClass: "top-3 left-3",
      iconClass: "w-[24px] h-[22px]",
      title: "Request",
      content: (
        <>
          <span className="font-medium text-[#565f6e]">
            After subscribing, you will receive a welcome message. It will
            contain instructions, but, long story short:{" "}
          </span>
          <span className="font-bold text-[#565f6e]">
            just reply with your request!
          </span>
        </>
      ),
    },
  ];

  const benefitCards = [
    {
      bgImage: "/ellipse-8.svg",
      iconSrc: "/vector-9.svg",
      iconPositionClass: "top-3 left-3",
      iconClass: "w-[24px] h-[22px]",
      title: "Feedback within 48 hours",
      content: (
        <>
          <span className="font-medium">
            We understand how important it is to respond quickly to your
            requests. <br />
            We strive to provide prompt assistance.{" "}
          </span>
          <span className="font-bold">
            You will receive a report within 48 hours.
          </span>
        </>
      ),
    },
    {
      bgImage: "/ellipse-8.svg",
      iconSrc: "/vector-3.svg",
      iconPositionClass: "top-3 left-3",
      iconClass: "w-[24px] h-[22px]",
      title: "Detailed report, video and action items",
      content: (
        <>
          <span className="font-bold">
            We provide a quality you&apos;ve never experienced before.
          </span>
          <span className="font-medium">
            {" "}
            Our reports are created by designers who have passed countless
            interviews, and also hire for their teams.
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 py-8 w-full">
      <div className="gap-6 px-4 w-full flex flex-col items-start">
        {/* Steps Section */}
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex items-center gap-4 w-full">
            <h2 className="font-bold text-[#e10091] text-base leading-6">
              Steps
            </h2>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 w-full">
              <span className="font-bold text-[#e10091] text-sm leading-normal">
                {step.number}
              </span>
              <p className="flex-1 font-medium text-[#2d323c] text-base leading-normal">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Process Cards */}
        <div className="flex flex-col items-start gap-4 w-full">
          {processCards.map((card, index) => (
            <Card key={index} className="w-full border-[#e6e6e6]">
              <CardContent className="flex flex-col items-start gap-8 p-6">
                <div
                  className="relative w-12 h-12 bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <img
                    className={`absolute ${card.iconClass} ${card.iconPositionClass}`}
                    alt="Icon"
                    src={card.iconSrc}
                  />
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-bold text-[#2d323c] text-lg leading-normal font-['Asap',Helvetica]">
                    {card.title}
                  </h3>
                  <p className="w-full font-normal text-sm leading-6 text-transparent">
                    {card.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex items-center gap-4">
            <h2 className="font-bold text-[#e10091] text-base leading-6 text-center">
              What you&apos;ll get
            </h2>
          </div>

          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 w-full">
              <span className="font-bold text-[#e10091] text-sm leading-normal">
                +
              </span>
              <p className="flex-1 font-medium text-[#2d323c] text-base leading-normal">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-col items-start gap-4 w-full">
          {benefitCards.map((card, index) => (
            <Card key={index} className="w-full border-[#e6e6e6]">
              <CardContent className="flex flex-col items-start gap-8 p-6">
                <div
                  className="relative w-12 h-12 bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <img
                    className={`absolute ${card.iconClass} ${card.iconPositionClass}`}
                    alt="Icon"
                    src={card.iconSrc}
                  />
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-bold text-[#2d323c] text-lg leading-normal font-['Asap',Helvetica]">
                    {card.title}
                  </h3>
                  <p className="w-full font-normal text-[#565f6e] text-sm leading-6">
                    {card.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
