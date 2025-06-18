import React from "react";

export const TitleSection = (): JSX.Element => {
  return (
    <section id="portfolio" className="px-4 py-8 flex flex-col items-center gap-4 w-full">
      <div className="relative">
        <p className="font-inter font-bold text-[16px] leading-[24px] tracking-normal text-center text-[#e10091]">
          One-on-one. Free of charge.
        </p>
        <img
          className="absolute w-[116px] h-[7px] top-[24px] left-[73%] -translate-x-1/2"
          alt="Decorative underline"
          src="/vector-5.svg"
        />
      </div>

      <h1 className="font-['Asap',Helvetica] font-bold text-[#2d323c] text-5xl text-center leading-[normal]">
        Design Portfolio &amp; CV Doctor
      </h1>

      <p className="font-sans font-medium text-[#565f6e] text-base text-center leading-6">
        We&#39;re here to help you find your next design job. We&#39;ll give you
        a thorough and top-notch analysis of your portfolio and CV to make sure
        you land the job you want.
      </p>
    </section>
  );
};
