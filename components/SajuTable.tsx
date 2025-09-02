"use client";

import { useState } from "react";
import sajuData from "../config/SajuData";
import "../styles/saju.css";
import "../styles/responsive.css";

const SajuTable = () => {
  const [sajuList] = useState(sajuData.list);

  function formattedDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const time = `${hours}:${minutes}`;

    return `${year}년 ${month}월 ${day}일 ${time}`;
  }

  function contentLineBreak(content: string) {
    return content.kr.split(",").map((line, index) => {
      if (line) {
      }

      if (!line.trim() && !line.trim()) {
        return (
          <p className="sm" key={index}>
            (없음)
          </p>
        );
      }

      return (
        <>
          <p className="lg" key={index}>
            {content.ch.split(",")[index].trim()}
            {index < content.kr.split(",").length - 1}
          </p>
          <p className="sm">
            ({line.trim()}){index < content.kr.split(",").length - 1}
          </p>
        </>
      );
    });
  }

  function setBackgroundColor(flag: string) {
    const dayColorMap = {
      Mon: "#4a90e2",
      Tue: "#C23030",
      Wed: "#2f2f2f",
      Thu: "#18868c",
      Fri: "#f9f9f9",
      Sat: "#9013fe",
      Sun: "#ffc107",
    };

    return dayColorMap[flag];
  }

  return (
    <>
      <div className="saju__container">
        <div className="saju__table--border">
          <span className="border border__top"></span>
          <span className="border border__left"></span>
          <span className="border border__right"></span>
          <span className="border border__bottom"></span>
        </div>
        <div className="saju__table--title">
          <h4>{sajuData.name}님의 사주</h4>
          <h3>{formattedDate(sajuData.birthday)}</h3>
        </div>
        <div className="saju__table--content">
          <ul className="saju__table--header">
            <li></li>
            <li>시</li>
            <li>일</li>
            <li>월</li>
            <li>년</li>
          </ul>
          <ul className="saju__table--body">
            {sajuList.map((item, index) => (
              <li className="saju__table--list" key={index}>
                <div className="saju__table__list--title">
                  <p className="lg">{item.titleCh}</p>
                  <p className="sm">({item.titleKr})</p>
                </div>
                {item.titleKr === "천간" || item.titleKr === "지지" ? (
                  <ul className="saju__table--item">
                    {item.content.map((content, contentIndex) => (
                      <li key={contentIndex} className="saju__table__item--title">
                        <div className={`color__box bg-[${setBackgroundColor(content.day)}] ${content.day}`}>
                          <p className="sm">{content.kr}</p>
                          <p className="lg">{content.ch}</p>
                          <p className="md">{content.flag}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="saju__table--item">
                    {item.content.map((content, contentIndex) => (
                      <li key={contentIndex} className="saju__table__item--title">
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
