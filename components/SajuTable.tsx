"use client";

import { useState } from "react";
import sajuData from "../config/SajuData";
import "../styles/saju.css";

const SajuTable = () => {
  const [sajuList] = useState(sajuData.list);

  function formattedDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일`;
  }

  function contentLineBreak(content: string) {
    if (!content) {
      return null;
    }

    return content.split(",").map((line, index) => (
      <span key={index}>
        {line.trim()}
        {index < content.split(",").length - 1 && <br />}
      </span>
    ));
  }

  return (
    <>
      <div className="saju__container">
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
                <div className="saju_table--title">{item.title}</div>
                <ul className="saju__table--item">
                  {item.content.map((content, contentIndex) => (
                    <li key={contentIndex}>{contentLineBreak(content)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SajuTable;
