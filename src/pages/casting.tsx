import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { H2, T2 } from '@/components/Text';
import Search from '@/components/Search/index';
import Button from '@/components/Button';
import MemberCardList from '@/components/MemberCardList';
import SelectedMemberCardList from '@/components/SelectedMemberCardList';
import { SelectedMemberStore } from '@/store/store';

const Casting: NextPage = () => {
  const { selectedMembers } = SelectedMemberStore();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (selectedMembers.length > 1 && selectedMembers.length < 11) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedMembers]);
  return (
    <div className="relative h-screen overflow-hidden p-4">
      <Head>
        <title>bemyidol</title>
      </Head>
      <H2>멤버를 캐스팅해주세요 ⭐️</H2>
      <Search />
      <MemberCardList />
      {selectedMembers.length ? <SelectedMemberCardList /> : null}
      <Link href="/setting">
        <Button isFixed={true} disabled={isDisabled}>
          <T2 className="text-white">
            {isDisabled ? '최소 2명 ~ 최대 10명을 선택해주세요' : '캐스팅 완료 👌'}
          </T2>
        </Button>
      </Link>
    </div>
  );
};

export default Casting;
