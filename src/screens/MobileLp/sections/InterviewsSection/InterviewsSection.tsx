import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const InterviewsSection = (): JSX.Element => {
  return (
    <section id="interview" className="flex flex-col items-center gap-8 px-4 py-8 w-full">
      <header className="flex flex-col items-center gap-4 w-full">
        <p className="w-full font-['Inter',Helvetica] font-bold text-[#e10091] text-base text-center leading-6">
          Next step
        </p>

        <h2 className="w-full font-['Asap',Helvetica] font-bold text-[#2d323c] text-5xl text-center leading-[normal]">
          Already passed the screening?
          <br />
          Prepare for the interview.
        </h2>

        <p className="w-full font-['Inter',Helvetica] font-medium text-[#565f6e] text-base text-center leading-6">
          If you&#39;ve passed the initial screening and want to show your best
          at the interview, we can help! Take advantage of our interview
          coaching services.
        </p>
      </header>

      <div
        className="h-[420px] rounded-[32px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(..//video.png)" }}
      />

      <Card className="w-full border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col items-start gap-8 px-4 w-full">
            <div className="gap-4 w-full flex items-start">
              <div className="flex flex-col items-start justify-center flex-1">
                <div className="flex items-center gap-4 w-full">
                  <p className="flex-1 font-['Inter',Helvetica] text-base leading-6">
                    <span className="font-medium text-[#2d323c]">
                      If you are satisfied with the first mentoring session, we
                      would be happy to prepare you for the next steps: all
                      types of interviews, presentations and case studies. With
                      this trainings you can build your confidence. <br />
                      <br />
                    </span>

                    <span className="font-bold text-[#2d323c]">
                      Become a paid subscriber to Eidos Design and take
                      advantage of our mentoring services.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center w-full">
        <Button className="p-4 bg-[#8462d6] text-white font-['Inter',Helvetica] font-bold text-lg rounded-lg shadow-[inset_0px_2px_0px_#ffffff40]">
          Schedule Training
        </Button>
      </div>
    </section>
  );
};
