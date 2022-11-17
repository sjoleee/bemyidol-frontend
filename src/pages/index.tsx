import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from '@/components/Button';
import { H1, T2 } from '@/components/Text';
import { DebutGroupStore, MemberStore, SelectedMemberStore } from '@/store/store';

const Home: NextPage = () => {
  const { setMembers } = MemberStore();
  const { setSelectedMembers } = SelectedMemberStore();
  const { setDebutGroupDescription, setDebutGroupMembers, setDebutGroupName } = DebutGroupStore();

  useEffect(() => {
    setMembers([]);
    setSelectedMembers([]);
    setDebutGroupDescription('');
    setDebutGroupName('');
    setDebutGroupMembers([]);
  }, []);
  return (
    <div className="flex relative flex-col items-center h-full overflow-hidden">
      <img className="w-32 md:w-40 mt-[30%] md:mt-[10%]" src="images/logo.png" alt="로고" />
      <H1>아이돌 메이커</H1>
      {/* <p className="text-center my-6">
        30년 간 꾸준한 덕질의 결실로
        <br />
        ‘마스터 엔터테인먼트’의 CEO가 된 당신은
        <br />
        현존하는 최고의 아이돌 멤버들을 영입하여
        <br />
        아이돌 어벤져스를 만들 계획이다.
      </p> */}
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
