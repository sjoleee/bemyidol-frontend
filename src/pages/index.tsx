import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from '@/components/Button';
import { H1 } from '@/components/Text';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <Head>
        <title>bemyidol</title>
      </Head>
      <H1>아이돌 메이커</H1>
      <p className="text-center my-6">
        30년 간 꾸준한 덕질의 결실로
        <br />
        ‘마스터 엔터테인먼트’의 CEO가 된 당신은
        <br />
        현존하는 최고의 아이돌 멤버들을 영입하여
        <br />
        아이돌 어벤져스를 만들 계획이다.
      </p>
      <Link href="/casting">
        <a>
          <Button>시작하기</Button>
        </a>
      </Link>
    </div>
  );
};

export default Home;
