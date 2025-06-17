import React from "react";

export const TitleWrapperSection = (): JSX.Element => {
  return (
    <section className="py-8 px-4 flex flex-col items-center gap-4 w-full">
      <h3 className="w-full font-bold text-[#e10091] text-base text-center leading-6">
        How it works
      </h3>

      <h2 className="w-full font-['Asap',Helvetica] font-bold text-[#2d323c] text-5xl text-center leading-[normal]">
        Detailed Analysis. <br />
        Actionable Feedback.
      </h2>

      <p className="w-full font-['Inter',Helvetica] font-medium text-[#565f6e] text-base text-center leading-6">
        Tired of spending hours polishing your portfolio and CV? We'll help you
        pass an initial screening! With our help, your portfolio and CV will be
        so impressive that no company will be able to resist.
      </p>
    </section>
  );
};
