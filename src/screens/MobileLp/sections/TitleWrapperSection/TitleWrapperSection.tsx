export const TitleWrapperSection = (): JSX.Element => {
  return (
    <section className="py-8 px-4 flex flex-col items-center gap-4">
      <h3 className="w-full font-bold text-[#e10091] text-base text-center leading-6">
        How it works
      </h3>

      <h2 className="w-full font-['Asap',Helvetica] font-bold text-[#2d323c] text-5xl text-center leading-[normal]">
        Detailed Analysis. <br />
        Actionable Feedback.
      </h2>

      <p className="w-full font-['Inter',Helvetica] font-medium text-[#565f6e] text-base text-center leading-6 md:max-w-[686px]">
        Tired of spending hours polishing your portfolio and CV? We'll help you
        pass an initial screening! With our help, your portfolio and CV will be
        so impressive that no company will be able to resist.
      </p>

      <div className="relative aspect-[16/9] w-[361px] lg:w-[868px] h-[420px] mt-4 rounded-[32px] overflow-hidden">
        <iframe
          src="https://www.loom.com/embed/5069daf9acc44b43a95586a281ce7826?sid=85761799-59e9-43e0-83aa-09517804f518"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
         
        ></iframe>
      </div>
    </section>
  );
};
