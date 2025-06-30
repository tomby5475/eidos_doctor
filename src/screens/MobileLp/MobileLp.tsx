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
    <div className="w-full bg-white-100">
      {/* Full-width background */}
      <header className="w-full bg-white shadow-[0px_1px_0px_#e4e4e4]">
       <div className="flex items-center justify-between px-4 py-3 w-full mx-auto max-w-[393px] lg:max-w-[1040px] lg:px-8">
          <div className="relative w-[162px] h-[29px]">
            <img
              className="h-[29px] object-contain"
              alt="Doctor"
              src="/logoLila.svg"
            />
          </div>
          <nav className="hidden lg:flex gap-4 font-inter font-bold text-[14px] leading-[100%] tracking-normal text-[#322D2D]">
            <a href="#portfolio">Design Portfolio & CV Doctor</a>
            <a href="#interview">Interview Training</a>
            <a href="#community">Design Community</a>
          </nav>
          <Button asChild variant="custom">
            <a
              href="https://eidosdesign.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3"
            >
              Accelerate Job Search
            </a>
          </Button>
        </div>
      </header>

      {/* Centered max-width container for all sections */}
      <main className="w-full mx-auto flex flex-col max-w-[393px] md:max-w-[1040px] md:px-8">
        <TitleSection />
        <ImageSection />
        <TitleWrapperSection />
        <CoachSection />
        <HowItWorksSection />
        <SocialSection />
        <InterviewsSection />
        <CommunitySection />
      </main>
    </div>
  );
};
