import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const SocialSection = (): JSX.Element => {
  // Data for avatars
  const avatars = [
    { src: "/ellipse-3-1.png", alt: "User avatar" },
    { src: "/ellipse-3-2.png", alt: "User avatar" },
    { src: "/ellipse-3-3.png", alt: "User avatar" },
    { src: "/ellipse-3-4.png", alt: "User avatar" },
    { src: "/ellipse-3-5.png", alt: "User avatar" },
    { src: "/ellipse-3-6.png", alt: "User avatar" },
  ];

  // Data for stars
  const stars = Array(5).fill({ src: "/star-1.svg", alt: "Star" });

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col items-center gap-4 pt-0 pb-8 px-4 w-full md:pt-8 md:flex-row md:justify-center md:items-start md:gap-14">
        <div className="flex flex-col items-center gap-2">
          {/* Avatar row */}
          <div className="relative w-[204px] h-11">
            <div className="relative h-11">
              {avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className="absolute w-11 h-11 top-0 ring-1 ring-white"
                  style={{ left: `${index * 36}px`, zIndex: index }}
                >
                  <AvatarImage
                    src={avatar.src}
                    alt={avatar.alt}
                    className="object-cover"
                  />
                </Avatar>
              ))}
            </div>
          </div>

          {/* "Yes, they are real" text */}
          <div className="flex items-center gap-2">
            <img
              className="w-[19.73px] h-3"
              alt="Vector"
              src="/vector-2-1.svg"
            />
            <div className="[font-family:'Indie_Flower',Helvetica] font-normal text-[#565f6e] text-lg tracking-[0] leading-[22px]">
              Yes, they are real
            </div>
          </div>
        </div>
  
          <div className="flex flex-col items-center justify-center">
            {/* Star rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {stars.map((star, index) => (
                  <img
                    key={index}
                    className="w-[19.02px] h-[18.09px]"
                    alt={star.alt}
                    src={star.src}
                  />
                ))}
              </div>
            </div>

            {/* LinkedIn link */}
            <div className="flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/vadimgrin/"
                className="[font-family:'Inter',Helvetica] font-medium text-[#783cf5] text-sm text-center tracking-[0] leading-6 underline hover:no-underline"
              >
                Learn more on LinkedIn
              </a>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};
