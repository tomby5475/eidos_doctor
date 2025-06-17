import React from "react";

export const TitleSection = (): JSX.Element => {
  return (
    <section className="px-4 py-8 flex flex-col items-center gap-4 w-full">
      <div className="relative">
        <p className="font-bold text-[#e10091] text-base text-center leading-6 font-sans">
          One-on-one. Free of charge.
        </p>
        <img
          className="absolute w-[119px] h-[7px] top-[24px] left-1/2 -translate-x-1/2"
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
