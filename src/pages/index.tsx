import { useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Button from '@/components/Button';
import { H1, T2 } from '@/components/Text';
import { DebutGroupStore, SelectedMemberStore } from '@/store/store';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  const { setSelectedMembers } = SelectedMemberStore();
  const { setDebutGroup } = DebutGroupStore();

  useEffect(() => {
    localStorage.removeItem('scrollY');
    setSelectedMembers([]);
    setDebutGroup([], '', '');
  }, []);

  return (
    <div className="flex relative flex-col items-center h-full overflow-hidden">
      <Seo title="Home" />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img className="w-32 md:w-40 mt-[18vh] " src="images/logo.png" alt="로고" />
        <H1>BeMyIdol</H1>
      </motion.div>
      <T2 className="text-center mt-12 ">
        꾸준한 덕질의 결실로
        <br />
        <strong>‘마스터 엔터테인먼트’</strong>의 CEO가 된 당신은
        <br />
        현존하는 최고의 아이돌 멤버들을 영입하여
        <br />
        <strong>아이돌 어벤져스</strong>를 만들 계획이다.
      </T2>
      <Link href="/casting">
        <Button isWhite={true} isFixed={true}>
          <T2>걸그룹 만들러가기 🎀</T2>
        </Button>
      </Link>
      <div className="absolute bg-PRIMARY -z-10 rounded-[180%] md:rounded-[120%] w-[180%] h-full -bottom-[55%] md:-bottom-1/2" />
    </div>
  );
};

export default Home;
