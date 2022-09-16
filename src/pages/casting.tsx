import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

import Search from '@/components/Search/index';
import Button from '@/components/Button';
import { MemberStore } from '@/store/store';
import MemberCardList from '@/components/MemberCardList';

const Casting: NextPage = () => {
  const { setMembers } = MemberStore();
  useEffect(() => {
    fetch('/data/mockdata.json')
      .then((res) => res.json())
      .then((res) => setMembers(res));
  }, []);

  return (
    <div>
      <Head>
        <title>bemyidol</title>
      </Head>
      <Search />
      <MemberCardList />
      <Link href="/setting">
        <a>
          <Button fullWidth={true} isFixed={true}>
            다음
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Casting;
