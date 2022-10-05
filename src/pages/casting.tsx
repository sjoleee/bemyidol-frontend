import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Search from '@/components/Search/index';
import Button from '@/components/Button';
import MemberCardList from '@/components/MemberCardList';
import SelectedMemberCardList from '@/components/SelectedMemberCardList';

const Casting: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bemyidol</title>
      </Head>
      <Search />
      <MemberCardList />
      <SelectedMemberCardList />
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
