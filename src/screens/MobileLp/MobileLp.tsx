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
          <img
            className="h-[18px] object-contain"
            alt="Doctor"
            src="/logoEidos.png"
          />
        </div>
        <nav className="hidden md:flex gap-4 font-inter font-bold text-[14px] leading-[100%] tracking-normal text-[#322D2D]">
          <a href="#portfolio">Design Portfolio & CV Doctor</a>
          <a href="#interview">Interview Training</a>
          <a href="#community">Design Community</a>
        </nav>
        <Button asChild variant="custom">
          <a
            href="https://eidosdesign.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accelerate Job Search
          </a>
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
