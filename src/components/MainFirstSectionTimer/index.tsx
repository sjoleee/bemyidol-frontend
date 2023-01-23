import React from "react";

import useObserver from "hooks/useObserver";

const MainFirstSectionTimer = ({
  setCurrentIndex,
  index,
}: {
  setCurrentIndex: (index: number) => void;
  index: number;
}) => {
  const onIntersectFirstSection: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting ? setCurrentIndex(index) : null;
  };

  const { setTarget } = useObserver({
    onIntersect: onIntersectFirstSection,
    threshold: 1,
  });

  return <div ref={setTarget} className=" bg-transparent w-1 h-[50vh]"></div>;
};

export default MainFirstSectionTimer;
