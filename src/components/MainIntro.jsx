import MainImage from "../assets/firstpage/image.png";
import GoogleBtnIcon from "../assets/firstpage/GoogleStoreIcon.png";
import AppStoreBtn from "../assets/firstpage/AppStoreIcon.png";
import Button from "./Button";
import Circle from "../assets/firstpage/Circle.png"; // 동그라미 이미지
import Wavve from "../assets/firstpage/Wave.png"; // 물결 이미지

const MainIntro = () => {
  return (
    <div
      className="w-full h-full flex text-black flex-wrap justify-center items-center
                    h-sm:mt-[75px]
                    sm:justify-nomal sm:flex-nowrap
                    md:justfi-nomal md:flex-nowrap
                    lg:justify-nomal lg:flex-nowrap
                   "
    >
      <div
        className="w-1/2 flex flex-col justify-center items-center mt-20 flex-wrap min-w-[250px]
                      sm:ml-0 sm:mt-0 sm:items-start
                      md:ml-0 sm:mt-0 md:items-start
                      lg:ml-0 sm:mt-0 lg:items-start
                     "
      >
        <div
          className="mb-4 
                        text-[10px] text-center
                        sm:text-sm sm:text-start
                        md:text-base md:justify-start
                        lg:text-lg lg:justify-start
                       "
        >
          탁주부터 전통소주까지
        </div>

        <div
          className="flex font-jua font-bold text-black mb-1 relative items-center
                        text-[17px] text-center
                        sm:text-3xl sm:text-start
                        md:text-4xl md:text-start
                        lg:text-5xl lg:text-start
                        "
        >
          <div className="mr-3 relative z-10">
            전통주
            <img
              src={Wavve}
              alt="Wave"
              className="absolute mt-12 ml-3 z-[-100] left-[-12px] top-[-32px]
                         sm:left-[-15px] sm:w-25 sm:h-3 sm:top-[-23px]
                         md:left-[-15px] md:w-25 md:h-6 md:top-[-25px]
                         lg:left-[-10px] lg:w-30 lg:h-5 lg:top-[-15px]
                        "
            />
          </div>
          <div className="relative z-10 ">
            한 잔
            <img
              src={Circle}
              alt="Circle"
              className="absolute -mt-2 -ml-2 z-[-100] left-2 top-[7px]
                          sm:top-[5px] sm:left-2 sm:w-40 sm:h-10
                          md:top-[0] md:left-2 md:w-40 md:h-14 
                          lg:top-[0] lg:left-2 lg:w-40 lg:h-19
                        "
            />
          </div>
        </div>

        <div
          className="font-jua font-bold text-black mb-4
                     text-[17px] text-center
                     sm:text-3xl sm:text-start
                     md:text-4xl md:text-start
                     lg:text-5xl lg:text-start
                    "
        >
          생각 날 때
        </div>
        <div
          className="text-[10px] text-center
                     sm:text-xs sm:text-start
                     md:text-base md:text-start
                     lg:text-lg lg:text-start
                    "
        >
          누림에서 가장 가까운 전통주점을
        </div>
        <div
          className="text-[10px] text-center
                     sm:text-xs sm:text-start
                     md:text-base md:text-start
                     lg:text-lg lg:text-start
                    "
        >
          찾을 수 있어요.
        </div>

        <div
          className="flex flex-wrap gap-3 mt-4 justify-center
                        sm:justify-start
                        md:justify-start
                        lg:justify-start
                       "
        >
          <Button
            icons={GoogleBtnIcon}
            text="Google Store"
            link="https://play.google.com/store/apps/details?id=com.kiwoongsksksk.NuRim&hl=ko"
            color="bg-[#FF8224]"
            width="w-35"
            height="h-12"
          />
          <Button
            icons={AppStoreBtn}
            text="App Store"
            link="/"
            color="bg-[#FF8224]"
            width="w-35"
            height="h-12"
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center min-w-[160px]">
        <img src={MainImage} alt="Main" className="rounded-full object-cover" />
      </div>
    </div>
  );
};

export default MainIntro;
