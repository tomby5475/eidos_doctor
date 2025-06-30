import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import styles from "../../../../../src/components/ui/ButtonCustom.module.css";

export const InterviewsSection = (): JSX.Element => {
  return (
    <section
      id="interview"
      className="flex flex-col items-center gap-8 px-4 py-8 md:mt-8 md:pt-16 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-crosses"
    >
      <div className="max-w-[393px] md:max-w-[1040px] mx-auto">
        <header className="relative flex flex-col items-center gap-4 w-full">
          <p className="w-full font-['Inter',Helvetica] font-bold text-[#e10091] text-base text-center leading-6">
            Next step
          </p>
          <img
            src="/starLila.svg"
            alt="Star"
            className="absolute w-4 h-4 top-[50px] left-[10%] hidden lg:block"
          />
          <img
            src="/starLila.svg"
            alt="Star"
            className="absolute w-4 h-4 top-[100px] left-[85%] hidden lg:block"
          />
          <img
            src="/starLila.svg"
            alt="Star"
            className="absolute w-4 h-4 top-[-30px] left-[57%] hidden lg:block"
          />
          <h2 className="w-full font-['Asap',Helvetica] font-bold text-[#2d323c] text-5xl text-center leading-[normal] md:w-[638px]">
            Already passed the screening?
            <br />
            Prepare for the interview.
          </h2>

          <p className="w-full font-['Inter',Helvetica] font-medium text-[#565f6e] text-base text-center leading-6 md:w-[686px]">
            If you&#39;ve passed the initial screening and want to show your
            best at the interview, we can help! Take advantage of our interview
            coaching services.
          </p>
        </header>

        <video
          src="/consultation.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-[361px] h-[420px] md:w-[686px] rounded-[32px] object-cover my-8 mx-auto"
        ></video>

        <div className="flex flex-col lg:flex-row m-auto md:p-8">
          <Card className="w-full border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="flex flex-col items-start gap-8 px-4 md:px-0 w-full">
                <div className="gap-4 w-full flex items-start">
                  <div className="flex flex-col items-start justify-center flex-1">
                    <div className="flex items-center gap-4 w-full">
                      <p className="flex-1 font-['Inter',Helvetica] text-base leading-6">
                        <span className="font-medium text-[#2d323c]">
                          If you are satisfied with the first mentoring session,
                          we would be happy to prepare you for the next steps:
                          all types of interviews, presentations and case
                          studies. With this trainings you can build your
                          confidence. <br />
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

          <div className="flex flex-col items-center w-full lg:items-end">
            <div className="flex justify-center pt-8 lg:pt-0">
              <Button
                asChild
                variant="custom"
                className={styles.buttonCustomLarge}
              >
                <a
                  href="https://calendar.notion.so/meet/vadimgrin/7v93a4ocw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4"
                >
                  Schedule Training
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
