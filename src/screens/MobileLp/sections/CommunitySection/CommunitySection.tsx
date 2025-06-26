import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CommunitySection = (): JSX.Element => {
  const benefitsList = [
    "Get a monthly newsletter packed with insights and reviews of digital products and design tools.",
    "Discover how psychology can reshape your approach to digital design challenges.",
    "Dive into the works of iconic designers, the evolution of everyday objects, and key moments in design history.",
    "Access actionable tips, thought-provoking essays, and career-boosting strategies to refine your skills, spark creativity, and empower your journey as a designer.",
    "Sign up for one-on-one mentoring and personalized consultations to help you grow your design career.",
  ];

  return (
    <section
      id="community"
      className="flex flex-col items-center gap-8 px-4 py-8 w-full"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <h3 className="w-full [font-family:'Inter',Helvetica] font-bold text-[#e10091] text-base text-center leading-6">
          Expand your horizons
        </h3>

        <h2 className="w-full [font-family:'Asap',Helvetica] font-bold text-[#2d323c] text-5xl text-center leading-[normal]">
          Join Eidos Design community
          <br />
          to boost your career
        </h2>

        <p className="w-full [font-family:'Inter',Helvetica] font-medium text-[#565f6e] text-base text-center leading-6 md:max-w-[617px]">
          We explore new ideas, embrace challenges, and discover what it takes
          to design a better, more thoughtful digital world.
        </p>
      </div>

      <Card className="relative w-full rounded-[32px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_100%,rgba(89,50,158,1)_0%,rgba(39,12,85,1)_100%)] border-0">
        <CardContent className="relative z-10 flex flex-col gap-8 p-8 lg:p-16 pb-0">
          <img className="w-[223.08px] h-10" alt="Logo" src="/logoWhite.svg" />

          <div className="w-full max-w-[297px] md:max-w-[424px] flex flex-col gap-4">
            {benefitsList.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 w-full">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/vector.svg" alt="checkIcon" />
                </div>
                <p className="flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-sm leading-6">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <Button className="w-[196px] h-[54px] p-4 bg-[#ffdb3e] text-[#191400] font-bold text-lg rounded-lg shadow-[inset_0px_2px_0px_#ffffff40] hover:bg-[#ffdb3e]/90">
            <a
              href="https://eidosdesign.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4"
            >
              Become a member
            </a>
          </Button>

          <img
            className="bottom-0 right-0 self-end mr-[-32px] 
                      md:absolute md:self-auto md:mr-0 
                      md:w-[520px] md:h-[540px]
                      "
            alt="New PLATO"
            src="/new-plato-3.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
