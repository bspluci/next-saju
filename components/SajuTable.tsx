import { useState } from "react";
import sajuData, { SajuContent } from "../config/SajuData";

const SajuTable = () => {
  const [sajuList] = useState(sajuData.list);

  function formattedDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
  }

  function contentLineBreak(content: SajuContent): React.ReactNode {
    return content.kr.split(",").map((line, index) => {
      if (!line.trim() && !line.trim()) {
        return (
          <p className="text-[2.6vw] sm:text-[12px]" key={index}>
            (없음)
          </p>
        );
      }

      return (
        <div key={index}>
          <p className="text-[3.7vw] sm:text-[17px]">
            {content.ch.split(",")[index].trim()}
            {index < content.kr.split(",").length - 1}
          </p>
          <p className="text-[2.6vw] sm:text-[12px]">
            ({line.trim()}){index < content.kr.split(",").length - 1}
          </p>
        </div>
      );
    });
  }

  type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

  function setBackgroundColor(flag?: string): string {
    const dayColorMap: Record<Day, string> = {
      Mon: "#4a90e2",
      Tue: "#C23030",
      Wed: "#2f2f2f",
      Thu: "#18868c",
      Fri: "#f9f9f9",
      Sat: "#9013fe",
      Sun: "#ffc107",
    };

    return dayColorMap[flag as Day] ?? "#fff";
  }
  return (
    <>
      <div className="relative w-[92vw] max-w-[419px] mt-[-5.3vw] mx-auto mb-0 pb-[8.8vw] bg-[#f5f3ec] border-[3px] border-solid border-[#1b2f49] sm:mt-[-24px] sm:pb-[39px]">
        <div className="absolute w-full h-full">
          <span className="absolute block bg-[#2b557e] top-[1.3vw] left-[0] w-full h-[1px] sm:top-[6px]"></span>
          <span className="absolute block bg-[#2b557e] top-[0] left-[1.3vw] w-[1px] h-full sm:left-[6px]"></span>
          <span className="absolute block bg-[#2b557e] top-[0] right-[1.3vw] w-[1px] h-full sm:right-[6px]"></span>
          <span className="absolute block bg-[#2b557e] bottom-[1.3vw] left-[0] w-full h-[1px] sm:bottom-[6px]"></span>
        </div>
        <div className="relative mt-[10.6vw] mb-[6.9vw] text-center text-[#424242] sm:mt-[47px] sm:mb-[31px] saju-title-before saju-title-after">
          <h4 className="mb-[3.2vw] text-[4.2vw] font-[400] sm:mb-[14px] sm:text-[19px]">{sajuData.name}님의 사주</h4>
          <h3 className="text-[5.3vw] font-[400] sm:text-[24px]">{formattedDate(sajuData.birthday)}</h3>
        </div>
        <div className="mx-[4.8vw] text-center sm:mx-[22px]">
          <ul className="flex justify-between items-center border-b-[1px] border-solid border-[#000]">
            <li className="flex items-center justify-center w-[15%] h-[12vw] border-r-[1px] border-solid border-[#8a8a8a] text-[3.7vw] font-[700] text-[#424242] sm:h-[54px] sm:text-[17px]"></li>
            <li className="flex items-center justify-center w-[calc((100%-15%)/4)] h-[12vw] border-r-[1px] border-solid border-[#8a8a8a] text-[3.7vw] font-[700] text-[#424242] sm:h-[54px] sm:text-[17px]">
              시
            </li>
            <li className="flex items-center justify-center w-[calc((100%-15%)/4)] h-[12vw] border-r-[1px] border-solid border-[#8a8a8a] text-[3.7vw] font-[700] text-[#424242] sm:h-[54px] sm:text-[17px]">
              일
            </li>
            <li className="flex items-center justify-center w-[calc((100%-15%)/4)] h-[12vw] border-r-[1px] border-solid border-[#8a8a8a] text-[3.7vw] font-[700] text-[#424242] sm:h-[54px] sm:text-[17px]">
              월
            </li>
            <li className="flex items-center justify-center w-[calc((100%-15%)/4)] h-[12vw] border-r-[1px] border-solid border-[#8a8a8a] text-[3.7vw] font-[700] text-[#424242] sm:h-[54px] sm:text-[17px]">
              년
            </li>
          </ul>
          <ul className="saju__table--body">
            {sajuList.map((item, index) => (
              <li
                className="flex justify-between w-full border-b-[1px] border-solid border-[#000] text-[3.7vw] font-[400] sm:text-[17px]"
                key={index}
              >
                <div className="flex flex-col justify-center w-[15%] min-h-[11.7vw] leading-[3.7vw] border-r-[1px] border-solid border-[#000] sm:min-h-[52px] sm:leading-[17px]">
                  <p className="text-[2.6vw] sm:text-[12px]">{item.titleCh}</p>
                  <p className="text-[2.1vw] sm:text-[9px]">({item.titleKr})</p>
                </div>
                {item.titleKr === "천간" || item.titleKr === "지지" ? (
                  <ul className="flex content-between w-[85%] bg-[#fff]">
                    {item.content.map((content, contentIndex) => (
                      <li
                        key={contentIndex}
                        className="flex flex-col justify-center w-[25%] min-h-[11.7vw] p-[1.3vw] leading-[3.7vw] border-r-[1px] border-solid border-[#8a8a8a] sm:min-h-[52px] sm:p-[6px] sm:leading-[17px]"
                      >
                        <div
                          style={{ backgroundColor: setBackgroundColor(content.day) }}
                          className={`p-[1.3vw] rounded-[3.3vw] sm:rounded-[15px] sm:p-[6px] ${
                            content.day === "Fri"
                              ? "text-[#000] border-[1px] border-solid border-[#000]"
                              : "text-[#fff]"
                          }`}
                        >
                          <p className="text-[1.8vw] leading-[1.1] sm:text-[8px]">{content.kr}</p>
                          <p className="text-[5.8vw] leading-[1.1] sm:text-[26px]">{content.ch}</p>
                          <p className="text-[2.1vw] leading-[1.4] font-[300] sm:text-[9px]">{content.flag}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="flex content-between w-[85%] bg-[#fff]">
                    {item.content.map((content, contentIndex) => (
                      <li
                        key={contentIndex}
                        className="flex flex-col justify-center w-[25%] min-h-[11.7vw] p-[1.3vw] leading-[3.7vw] border-r-[1px] border-solid border-[#8a8a8a] sm:min-h-[52px] sm:p-[6px] sm:leading-[17px]"
                      >
                        {contentLineBreak(content)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SajuTable;
