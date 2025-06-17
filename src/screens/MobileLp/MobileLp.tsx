import React from "react";
import { Button } from "../../components/ui/button";
import { CoachSection } from "./sections/CoachSection";
import { CommunitySection } from "./sections/CommunitySection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ImageSection } from "./sections/ImageSection";
import { InterviewsSection } from "./sections/InterviewsSection";
import { SocialSection } from "./sections/SocialSection";
import { TitleSection } from "./sections/TitleSection";
import { TitleWrapperSection } from "./sections/TitleWrapperSection";

export const MobileLp = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-white">
      <header className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-white shadow-[0px_1px_0px_#e4e4e4]">
        <div className="relative w-32 h-[22.84px]">
          <div className="relative h-[18px] top-0.5">
            <img
              className="absolute h-[18px] top-0 left-[60px]"
              alt="Doctor"
              src="/logoEidos.png"
            />
          </div>
        </div>

        <Button className="bg-[#8462d6] text-white font-bold text-sm shadow-[inset_0px_2px_0px_#ffffff40]">
          Accelerate Job Search
        </Button>
      </header>

      <TitleSection />
      <ImageSection />
      <TitleWrapperSection />
      <CoachSection />
      <HowItWorksSection />
      <SocialSection />
      <InterviewsSection />
      <CommunitySection />
    </div>
  );
};
