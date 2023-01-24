import React, { useState } from "react";

import MainFirstSectionTimer from "../MainFirstSectionTimer";

import useObserver from "hooks/useObserver";
import { INTRODUCE_TEXT_ARR } from "@/constants";

const MainFirstSection = () => {
  const [isFirstSectionSeen, setIsFirstSectionSeen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIntersectFirstSection: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting ? setIsFirstSectionSeen(true) : setIsFirstSectionSeen(false);
  };

  const { setTarget: setTargetFirstSection } = useObserver({
    onIntersect: onIntersectFirstSection,
    threshold: 0.8,
  });

  return (
    <section className="h-[600vh] w-full relative">
      <div
        className="h-screen w-full sticky top-0 left-0 flex flex-col justify-center items-center z-10"
        ref={setTargetFirstSection}
        style={{ opacity: isFirstSectionSeen ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <span className="text-4xl font-bold absolute top-[calc(50%-18px-64px)]">내가 좋아하는</span>
        {INTRODUCE_TEXT_ARR.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col justify-center items-center">
              {item.imgSrc && (
                <img
                  alt={item.content}
                  src={item.imgSrc}
                  className="object-cover w-screen h-screen opacity-20 absolute md:object-top"
                  style={{ opacity: currentIndex === index ? 0.2 : 0, transition: "opacity 0.3s" }}
                />
              )}
              <div
                className="bg-PRIMARY px-4 py-2 mx-2 rounded-lg absolute top-[calc(50%-32px)]"
                style={{ opacity: currentIndex === index ? 1 : 0, transition: "opacity 0.3s" }}
              >
                <span className="text-5xl font-bold text-white">{item.content}</span>
              </div>
            </div>
          );
        })}
        <span className="text-4xl font-bold absolute top-[calc(50%-18px+64px)]">
          모두 같은 그룹이라면?
        </span>
      </div>
      <div>
        {INTRODUCE_TEXT_ARR.map((item, index) => {
          return (
            <MainFirstSectionTimer key={item.id} index={index} setCurrentIndex={setCurrentIndex} />
          );
        })}
      </div>
    </section>
  );
};

export default MainFirstSection;
