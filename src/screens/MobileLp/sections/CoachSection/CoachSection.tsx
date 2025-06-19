import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CoachSection = (): JSX.Element => {
  // Coach data that can be easily modified
  const coachData = {
    name: "Vadym Grin",
    position: "Head of Design at Atolls.",
    description:
      "15 years of experience, 5 years of teaching. Author of Emotional Digital Design.",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/vadimgrin/" },
      { name: "Substack", url: "https://eidosdesign.substack.com/" },
      { name: "Book", url: "#" },
    ],
    avatar: "/ellipse-3.png",
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col items-start gap-6 pt-0 pb-4 px-4 w-full">
        <div className="flex items-start gap-4 w-full">
          <div className="flex-shrink-0">
            <Avatar className="w-16 h-16">
              <AvatarImage src={coachData.avatar} alt={coachData.name} />
              <AvatarFallback>{coachData.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 flex-1">
            <div className="flex flex-col items-start w-full">
              <h3 className="font-bold text-[#2d323c] text-base leading-6 font-sans">
                {coachData.name}
              </h3>

              <p className="font-medium text-[#565f6e] text-sm leading-[21px] font-sans">
                {coachData.position}
                <br />
                {coachData.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {coachData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#322d2d] text-sm text-center leading-6 underline whitespace-nowrap font-sans"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <Button asChild variant="custom">
        <a
          href="https://eidosdesign.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accelerate Job Search
        </a>
      </Button>
    </Card>
  );
};
