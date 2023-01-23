import React, { useState } from "react";
import Link from "next/link";

import Button from "../Button";
import { T2 } from "../Text";

import useObserver from "hooks/useObserver";

const MainSecondSection = () => {
  const [isSecondSectionSeen, setIsSecondSectionSeen] = useState(false);

  const onIntersectSecondSection: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting ? setIsSecondSectionSeen(true) : setIsSecondSectionSeen(false);
  };

  const { setTarget: setTargetSecondSection } = useObserver({
    onIntersect: onIntersectSecondSection,
  });

  return (
    <>
      <section className="h-[250vh] w-full relative flex flex-col justify-start items-center">
        <div className="w-full h-[100vh] sticky top-0 z-10 gap-2 flex flex-col justify-center items-center">
          <span className="w-full text-4xl text-center text-white">원하는 멤버만 골라,</span>
          <span className="w-full text-4xl text-center text-white">마음대로 만드는</span>
          <span className="bg-white px-4 py-2 mx-2 text-5xl font-bold rounded-lg text-PRIMARY mb-[96px]">
            나만의 아이돌
          </span>
        </div>
        <div
          className="h-screen w-full bg-PRIMARY sticky top-0 left-0 flex flex-col justify-center items-center"
          ref={setTargetSecondSection}
        ></div>
      </section>
      <Link href="/casting">
        <div
          className={
            isSecondSectionSeen ? "animate-fadein transition-all" : "animate-fadeout opacity-0 "
          }
        >
          <Button isWhite={true} isFixed={true}>
            <T2>걸그룹 만들러가기 🎀</T2>
          </Button>
        </div>
      </Link>
    </>
  );
};

export default MainSecondSection;
