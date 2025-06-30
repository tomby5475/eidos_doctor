export const TitleSection = (): JSX.Element => {
  return (
    <section
      id="portfolio"
      className="relative px-4 py-8 md:py-16 flex flex-col items-center gap-4 w-full md:max-w-[1040px]"
    >
       <img
        src="/starLila.svg"
        alt="Star"
        className="absolute w-4 h-4 top-[116px] left-[12%] hidden lg:block"
      />
      <img
        src="/starLila.svg"
        alt="Star"
        className="absolute w-4 h-4 top-[161px] left-[90%] hidden lg:block"
      />
      <img
        src="/starLila.svg"
        alt="Star"
        className="absolute w-4 h-4 top-[42px] left-[70%] hidden lg:block"
      />
      <div className="relative">
        <p className="font-inter font-bold text-[16px] leading-[24px] tracking-normal text-center text-[#e10091]">
          One-on-one. Free of charge.
        </p>
        <img
          className="absolute max-w-none h-[7px] top-[24px] left-[73%] -translate-x-1/2 w-[115px]"
          alt="Decorative underline"
          src="/stroke.svg"
        />
      </div>
      <h1 className="font-['Asap',Helvetica] font-bold text-[#2d323c] text-[48px] text-center leading-tight">
        <span className="block md:inline">
          Design Portfolio&nbsp;&amp;&nbsp;CV Doctor
        </span>
      </h1>
      <p className="font-sans font-medium text-[#565f6e] text-base text-center leading-6 md:w-[686px]">
        We&#39;re here to help you find your next design job. We&#39;ll give you
        a thorough and top-notch analysis of your portfolio and CV to make sure
        you land the job you want.
      </p>
    </section>
  );
};
