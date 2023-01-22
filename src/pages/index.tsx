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
    entry.isIntersecting ? setIsSecondSectionSeen(true) : setIsSecondSectionSeen(false);
  };

  const { setTarget: setTargetSecondSection } = useObserver({
    onIntersect: onIntersectSecondSection,
    threshold: 0.9,
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

      <section className="h-[200vh] w-full relative">
        <div
          className="h-screen w-full bg-PRIMARY sticky top-0 left-0 flex flex-col justify-center items-center"
          ref={setTargetSecondSection}
          style={{ opacity: isSecondSectionSeen ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <T1 className="w-full h-[100px] text-center font-bold absolute">
            내가 좋아하는 <span className="bg-white px-4 mx-2 text-4xl rounded-lg">asdfasdf</span>이
          </T1>
          <T1 className="font-bold">모두 같은 그룹이라면?</T1>
          <div className=" bg-slate-500 w-full h-[100px]">asdf</div>
        </div>
        <div className="bg-black absolute w-1 h-[100%] bottom-0" ref={setTargetSecondSection}></div>
      </section>

      {!isMainSeen && (
        <Link href="/casting">
          <Button isWhite={isSecondSectionSeen} isFixed={true} style={{ transition: "all 0.3s" }}>
            <T2>걸그룹 만들러가기 🎀</T2>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Home;
