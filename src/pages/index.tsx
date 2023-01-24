import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Lottie from "react-lottie-player";

import lottieJson from "public/lotties/scrollDown.json";
import { H1, T1 } from "@/components/Text";
import { DebutGroupStore, SelectedMemberStore } from "@/store/store";
import Seo from "@/components/Seo";
import useObserver from "hooks/useObserver";
import MainFirstSection from "@/components/MainFirstSection";
import MainSecondSection from "@/components/MainSecondSection";

const Home: NextPage = () => {
  const { setSelectedMembers } = SelectedMemberStore();
  const { setDebutGroup } = DebutGroupStore();
  const [isMainSeen, setIsMainSeen] = useState(true);

  useEffect(() => {
    localStorage.removeItem("scrollY");
    setSelectedMembers([]);
    setDebutGroup([], "", "");
  }, []);

  const onIntersectMain: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting ? setIsMainSeen(true) : setIsMainSeen(false);
  };

  const { setTarget: setTargetMain } = useObserver({
    onIntersect: onIntersectMain,
    threshold: 0,
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
            className="absolute bottom-[20%]"
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
      <MainSecondSection />
    </div>
  );
};

export default Home;
