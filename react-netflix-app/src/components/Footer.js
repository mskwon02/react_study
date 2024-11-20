import React from "react";

export default function Footer() {
  const footer_list = [
    "넷플릭스 소개",
    "고객 센터",
    "미디어 센터",
    "이용약관",
    "개인정보",
    "회사정보",
    "문의하기",
    "법적고지",
    "투자 정보",
    "입사 정보",
    "속도 테스트",
    "오직 넷플릭스에서",
  ];
  return (
    <div className="flex justify-center text-gray-400 bg-black">
      <div className="flex flex-col w-[50vw] max-w-[1000px] my-12">
        <h1 className="font-semibold text-2xl">넷플릭스 대한민국</h1>
        <div className="flex flex-wrap mt-8">
          {footer_list.map((data, idx) => {
            return (
              <a
                key={idx}
                className="text-lg basis-1/4 my-4 hover:underline"
                href="https://help.netflix.com/ko/"
              >
                {data}
              </a>
            );
          })}
        </div>
        <div className="text-center text-xl mt-8 font-extrabold">
          <span>Netflix Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
