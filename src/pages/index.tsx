import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Lottie from "react-lottie-player";

import lottieJson from "public/lotties/scrollDown.json";
import Button from "@/components/Button";
import { H1, T1, T2 } from "@/components/Text";
import { DebutGroupStore, SelectedMemberStore } from "@/store/store";
import Seo from "@/components/Seo";
import useObserver from "hooks/useObserver";
import MainFirstSection from "@/components/MainFirstSection";

const Home: NextPage = () => {
  const { setSelectedMembers } = SelectedMemberStore();
  const { setDebutGroup } = DebutGroupStore();
  const [isMainSeen, setIsMainSeen] = useState(true);
  const [isSecondSectionSeen, setIsSecondSectionSeen] = useState(false);

  useEffect(() => {
    localStorage.removeItem("scrollY");
    setSelectedMembers([]);
    setDebutGroup([], "", "");
  }, []);

  //메인 화면의 io
  const onIntersectMain: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting ? setIsMainSeen(true) : setIsMainSeen(false);
  };

  const { setTarget: setTargetMain } = useObserver({
    onIntersect: onIntersectMain,
    threshold: 0,
  });

  //2번째 섹션의 io
  const onIntersectSecondSection: IntersectionObserverCallback = ([entry]) => {
    console.log(entry.isIntersecting);
    // if (entry.isIntersecting)
    entry.isIntersecting ? setIsSecondSectionSeen(true) : setIsSecondSectionSeen(false);
  };

  const { setTarget: setTargetSecondSection } = useObserver({
    onIntersect: onIntersectSecondSection,
    threshold: [0.1, 0.5],
  });

  return (
    <div className="flex relative flex-col items-center">
      <Seo title="Home" />
      <section className="h-screen">
        <div className="flex flex-col items-center  relative h-full">
          <img
            className="w-32 md:w-40 mt-[18vh] "
            src="images/logo.png"
            alt="로고"
            ref={setTargetMain}
          />
          <H1>BeMyIdol</H1>
          <T1 className="text-center">나만의 아이돌을 만들고 공유해보세요!</T1>
          <Lottie
            className="absolute bottom-[10%]"
            loop
            animationData={lottieJson}
            play
            style={{
              width: 50,
              height: 50,
              opacity: isMainSeen ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />
        </div>
      </section>

      <MainFirstSection />

      <section className="h-[200vh] w-full relative flex flex-col justify-start items-center">
        <div className="w-full h-[100vh] sticky top-0 z-10 gap-2 flex flex-col justify-center items-center">
          <span className="w-full text-4xl text-center text-white">원하는 멤버만 골라,</span>
          <span className="w-full text-4xl text-center text-white">마음대로 만드는</span>
          <span className="bg-white px-4 py-2 mx-2 text-5xl font-bold rounded-lg text-PRIMARY">
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
    </div>
  );
};

export default Home;
