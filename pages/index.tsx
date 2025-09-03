import React from "react";
import Image from "next/image";
import SajuTable from "../components/SajuTable";

export default function Home() {
  return (
    <>
      <div className="max-w-md mx-auto bg-[#f3f2ef] pb-[11.2vw] sm:pb-[50px]">
        <div className="relative w-full">
          <div className="relative w-full h-[206.4vw] max-h-[925px]">
            <Image src="/images/saju_01.png" alt="talk girl" fill style={{ objectFit: "contain" }} />
          </div>
          <p className="absolute text-center leading-[150%] font-normal tracking-[0.08vw] text-[4.2vw] top-[175.46vw] left-[17vw] w-[35.7vw] sm:top-[786px] sm:left-[76px] sm:text-[19px] sm:tracking-[0.3px] sm:w-[160px]">
            이제 본격적으로
            <br />
            OO님의 사주팔자를
            <br />
            분석해볼 차례네요.
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative w-[calc(100%-6.4vw)] h-[81.1vw] max-h-[363px] sm:w-[calc(100%-29px)]">
            <Image src="/images/saju_02.png" alt="talk girl" fill style={{ objectFit: "contain" }} />
          </div>
        </div>

        <div className="relative w-full mt-[-25.3vw] sm:mt-[-113px]">
          <div className="relative w-full h-[114.6vw] max-h-[513px]">
            <Image src="/images/saju_03.png" alt="talk girl" fill style={{ objectFit: "cover" }} />
          </div>
          <p className="absolute text-center leading-[150%] font-normal tracking-[0.08vw] text-[4.2vw] top-[14.4vw] left-[15.4vw] w-[47.5vw] sm:top-[65px] sm:left-[69px] sm:text-[19px] sm:tracking-[0.3px] sm:w-[213px]">
            제가 OO님의 사주를
            <br />
            보기 쉽게 표로 정리했어요
          </p>
        </div>
        <div className="relative w-full">
          <SajuTable />
        </div>
      </div>
    </>
  );
}
